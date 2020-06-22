package ir.sadad.config;

import lombok.Data;
import lombok.ToString;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.PropertySource;

//${spring.profiles.active}
//ignoreResourceNotFound=true,
@Data
@ToString
@ConfigurationProperties(prefix = "oauth2")
@PropertySource(value="classpath:security.properties")
public class SecurityConfigs {

  @Value("${oauth2.client.secret:}")
  private String clientSecret;

  @Value("${oauth2.client.id:}")
  private String clientId;

  @Value("${oauth2.client.name:}")
  private String clientName;

  @Value("${oauth2.client.scope:}")
  private String clientScope;

  @Value("${oauth2.client.redirectUri:}")
  private String redirectUri;

  @Value("${oauth2.client.authenticationMethod:}")
  private String authenticationMethod;

  @Value("${oauth2.client.grantType:}")
  private String grantType;

  @Value("${provider.tokenUri:}")
  private String tokenUri;

  @Value("${provider.authorizationUri:}")
  private String authorizationUri;

  @Value("${secretKeyLocation:}")
  private String secretKeyLocation;

  @Value("${oauth2.client.user.info.endpoint}")
  private String userInfoUri;

  @Value("${oauth2.client.user.ExcludedUrls}")
  private String[] excludedUrls;

  @Value("${oauth2.client.user.secureUrls}")
  private String[] secureUrls;

  @Value("${oauth2.client.logoutSuccessUrl}")
  private String logoutSuccessUrl;

  @Value("${oauth2.client.validate.token.uri}")
  private String validateTokenUri;
}
