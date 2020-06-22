package ir.sadad.util;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import ir.sadad.config.SecurityConfigs;
import lombok.extern.slf4j.Slf4j;
import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.*;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.Arrays;

@Slf4j
@RestController
public class TokenReceptor {

  private static final String ACCESS_TOKEN = "access_token";
  private static final String GRANT_TYPE = "authorization_code";


  @Autowired
  private AuthenticationManager authenticationManager;

  @Autowired
  private SecurityConfigs securityConfigs;


  @Bean
  public OAuth2AuthenticationManager oAuth2AuthenticationManager() {
    return new OAuth2AuthenticationManager();
  }

  private TokenExtractor tokenExtractor = new TokenExtractor();


  @RequestMapping(value = "/code", method = RequestMethod.GET)
  public void getAccessToken(@RequestParam("code") String code, HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) throws IOException {

    ResponseEntity<String> response = null;

    RestTemplate restTemplate = new RestTemplate();

    String credentials = securityConfigs.getClientId() + ":" + securityConfigs.getClientSecret(); //"los-ui-client:bK4cF1cJ5lF6nH7kG6iI5mN5gL1vB3dP1jF4jC1qB1";
    String encodedCredentials = new String(Base64.encodeBase64(credentials.getBytes()));

    HttpHeaders headers = new HttpHeaders();
    headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
    headers.add("Authorization", "Basic " + encodedCredentials);

    HttpEntity<String> request = new HttpEntity<String>(headers);

    String access_token_url = securityConfigs.getTokenUri();
    access_token_url += "?code=" + code;
    access_token_url += "&client_id=" + securityConfigs.getClientId();
    access_token_url += "&redirect_uri=" + securityConfigs.getRedirectUri();
    access_token_url += "&scope=" + securityConfigs.getClientScope();
    access_token_url += "&grant_type=" + GRANT_TYPE;

    response = restTemplate.exchange(access_token_url, HttpMethod.POST, request, String.class);

    ObjectMapper mapper = new ObjectMapper();
    JsonNode node = mapper.readTree(response.getBody());
    String token = node.path(ACCESS_TOKEN).asText();

    SecurityContext securityContext = SecurityContextHolder.getContext();
    Authentication authentication = tokenExtractor.crateAuthentication(token);
    Authentication authResult = authenticationManager.authenticate(authentication);
    securityContext.setAuthentication(authResult);

    HttpSession session = httpServletRequest.getSession(true);
    session.setAttribute("SESSION_TICKET", code);

    httpServletResponse.sendRedirect("/app/index.html");

  }

/*  @RequestMapping(value = "/validate-token", method = RequestMethod.GET)
  public void getUserInfo(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) throws IOException {

    ResponseEntity<String> response = null;
    String accessToken = null;

    HttpSession session = httpServletRequest.getSession(true);
    String accessCode = session.getAttribute("SESSION_TICKET").toString();

    RestTemplate restTemplate = new RestTemplate();

    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
    if (authentication != null) {
      accessToken = ((ir.sadad.util.BmiOAuth2User) ((OAuth2AuthenticationToken) authentication).getPrincipal()).getToken();
    }

    HttpHeaders headers = new HttpHeaders();
    headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
    headers.add("Authorization", "Bearer " + accessToken);

    HttpEntity<String> request = new HttpEntity<String>(headers);

    String validate_token_uri = securityConfigs.getValidateTokenUri();
    validate_token_uri += "?sessionTicket=" + accessCode;
    validate_token_uri += "&ip=" + httpServletRequest.getRemoteAddr();
    validate_token_uri += "&userAgent=" + httpServletRequest.getHeader("User-Agent");

    response = restTemplate.exchange(validate_token_uri, HttpMethod.GET, request, String.class);

    ObjectMapper mapper = new ObjectMapper();
    JsonNode node = mapper.readTree(response.getBody());
  }*/

}
