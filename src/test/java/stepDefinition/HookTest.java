package stepDefinition;


import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class HookTest {

    static WebDriver myDriver;
    ConfigFileReader myConfig = new ConfigFileReader();

    @Before
    public void beforescenario(){
        //System.setProperty("webdriver.chrome.driver", "C:\\Users\\hp\\IdeaProjects\\MyFirstMavenProject\\src\\chromedriver.exe");
        System.setProperty("webdriver.chrome.driver",myConfig.getDriverPath());
        System.out.println("I ran first");
        myDriver = new ChromeDriver();

    }

    @After
    public void afterscenario(){
        System.out.println("I ran last");
        myDriver.quit();
    }

}
