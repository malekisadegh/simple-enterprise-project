package ir.sadad.processors;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import ir.sadad.config.SecurityConfigs;
import ir.sadad.util.BmiOAuth2User;
import org.apache.camel.Exchange;
import org.apache.camel.Processor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.Arrays;

@Component
public class ValidateToken implements Processor {

  @Autowired
  private SecurityConfigs securityConfigs;

  @Override
  public void process(Exchange exchange) throws Exception {

    Logger logger = LoggerFactory.getLogger(this.getClass());

    ResponseEntity<String> response = null;
    String accessToken = null;

    HttpServletRequest curRequest = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getRequest();
    HttpSession session = curRequest.getSession(false);
    String accessCode = session.getAttribute("SESSION_TICKET").toString();

    RestTemplate restTemplate = new RestTemplate();

    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
    if (authentication != null) {
      accessToken = ((BmiOAuth2User) ((OAuth2AuthenticationToken) authentication).getPrincipal()).getToken();
    }

    HttpHeaders headers = new HttpHeaders();
    headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
    headers.add("Authorization", "Bearer " + accessToken);

    HttpEntity<String> request = new HttpEntity<String>(headers);

    String validate_token_uri = securityConfigs.getValidateTokenUri();
    validate_token_uri += "?sessionTicket=" + accessCode;
    validate_token_uri += "&ip=" + curRequest.getRemoteAddr();
    validate_token_uri += "&userAgent=" + curRequest.getHeader("User-Agent");

    response = restTemplate.exchange(validate_token_uri, HttpMethod.GET, request, String.class);

    ObjectMapper mapper = new ObjectMapper();
    JsonNode node = mapper.readTree(response.getBody());
    logger.info("token is validated successfully");
  }
}
