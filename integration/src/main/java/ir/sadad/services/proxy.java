package ir.sadad.services;

import ir.sadad.config.CommonConfigs;
import ir.sadad.processors.AccessTokenProcessor;
import org.apache.camel.CamelContext;
import org.apache.camel.builder.RouteBuilder;
import org.apache.camel.impl.DefaultCamelContext;
import org.apache.camel.model.rest.RestBindingMode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class proxy extends RouteBuilder {

  @Autowired
  private AccessTokenProcessor accessTokenProcessor;


  @Autowired
  private CommonConfigs commonConfigs;


  @Override
  public void configure() throws Exception {

    CamelContext context = new DefaultCamelContext();

    restConfiguration()
      .contextPath("/ir/sadad/services")
      .port("8080")
      .enableCORS(true)
      .component("servlet")
      .bindingMode(RestBindingMode.json);

    from("servlet:///?matchOnUriPrefix=true")
      .routeId("proxy-route")
      .to("direct:ExecuteRequest")
      .to("log:DEBUG?showBody=true&showHeaders=true");

  }
}
