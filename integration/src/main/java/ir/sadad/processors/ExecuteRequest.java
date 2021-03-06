package ir.sadad.processors;

import ir.sadad.config.CommonConfigs;
import org.apache.camel.builder.RouteBuilder;
import org.apache.camel.http.common.HttpOperationFailedException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component()
public class ExecuteRequest extends RouteBuilder {

  @Autowired
  private RestHelper restHelper;

  @Autowired
  private AccessTokenProcessor accessTokenProcessor;

  @Autowired
  private ValidateToken validateToken;

  @Autowired
  private ExceptionHandlerProcessor exceptionHandlerProcessor;

  @Autowired
  private DownloadHelper downloadHelper;

  @Autowired
  private CommonConfigs commonConfigs;

  @Override
  public void configure() {

    onException(HttpOperationFailedException.class)
      .process(exceptionHandlerProcessor)
      .continued(true);

    from("direct:ExecuteRequest")
      .setHeader("Accept", constant("application/json"))
      .process(restHelper)
      .process(accessTokenProcessor)
      .process(validateToken)
      .setHeader("Access-Control-Allow-Origin", constant("*"))
      .setHeader("Access-Control-Allow-Credentials", constant("true"))
      .to("http://" + commonConfigs.getServicesBaseURI() + "?bridgeEndpoint=true&throwExceptionOnFailure=false&maxTotalConnections=1200&connectionsPerRoute=1200")
      .convertBodyTo(String.class);

    from("direct:ExecuteRequestDownload")
      .setHeader("Accept", constant("application/octet-stream"))
      .process(accessTokenProcessor)
      .to("http://" + commonConfigs.getServicesBaseURI()  + "?bridgeEndpoint=true&throwExceptionOnFailure=false&maxTotalConnections=1200&connectionsPerRoute=1200")
      .process(downloadHelper).end();
  }

}
