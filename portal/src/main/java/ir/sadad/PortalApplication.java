package ir.sadad;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.env.Environment;

import java.util.Arrays;
import java.util.Collection;
@SpringBootApplication
public class PortalApplication implements InitializingBean {

    private static final Logger log = LoggerFactory.getLogger(PortalApplication.class);

    private final Environment env;

    public PortalApplication(Environment env) {
        this.env = env;
    }

    public static void main(String[] args) {
        SpringApplication.run(PortalApplication.class, args);
    }

    public void afterPropertiesSet() throws Exception {
        Collection<String> activeProfiles = Arrays.asList(env.getActiveProfiles());
        log.info("your application!  run with"
                + activeProfiles
                + "profile");
    }

}
