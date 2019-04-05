package stepDefinition;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class FistFeatureStepDefinition {

    static WebDriver myDriver;


    @Given("^I am a Chrome User$")
    public void i_am_a_Chrome_User() {
        // Write code here that turns the phrase above into concrete actions
       System.setProperty("webdriver.chrome.driver", "C:\\Users\\hp\\IdeaProjects\\MyFirstMavenProject\\src\\chromedriver.exe");
        myDriver = new ChromeDriver();

    }

    @When("^I access Google Website$")
    public void i_access_Google_Website() {
        // Write code here that turns the phrase above into concrete actions
        myDriver.get("https://www.google.com/");
    }

    @Then("^I see Google Home Page$")
    public void i_see_Google_Home_Page() {
        // Write code here that turns the phrase above into concrete actions

    }



}
