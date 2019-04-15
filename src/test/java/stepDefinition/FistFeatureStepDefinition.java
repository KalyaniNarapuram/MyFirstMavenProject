package stepDefinition;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import static stepDefinition.HookTest.myDriver;

public class FistFeatureStepDefinition {


    @Given("^I am a Chrome User$")
    public void i_am_a_Chrome_User() {
        // Write code here that turns the phrase above into concrete actions

    }

    @When("^I access Google Website$")
    public void i_access_Google_Website() {
        // Write code here that turns the phrase above into concrete actions
        myDriver.get("https://www.google.co.uk/");
    }

    @Then("^I see Google Home Page$")
    public void i_see_Google_Home_Page() {
        // Write code here that turns the phrase above into concrete actions
        myDriver.quit();
    }

    @When("^I access facebook Website$")
    public void i_access_facebook_Website() {
        // Write code here that turns the phrase above into concrete actions
        myDriver.get("https://www.facebook.com/");
    }

    @Then("^I see facebook Home Page$")
    public void i_see_facebook_Home_Page() {
        // Write code here that turns the phrase above into concrete actions
        myDriver.quit();
    }

    @When("^I access amazon Website$")
    public void i_access_amazon_Website() {
        // Write code here that turns the phrase above into concrete actions
        myDriver.get("https://www.amazon.co.uk/");
    }

    @Then("^I see amazon Home Page$")
    public void i_see_amazon_Home_Page() {
        // Write code here that turns the phrase above into concrete actions
        myDriver.quit();
    }

    @When("^I access booking Website$")
    public void i_access_Booking_Website() {
        // Write code here that turns the phrase above into concrete actions
        myDriver.get("https://www.booking.com/");
    }
    @Then("^I see booking Home Page$")
    public void i_see_Booking_Home_Page() {
        // Write code here that turns the phrase above into concrete actions
        myDriver.quit();
    }

    @When("^I access gumtree Website$")
    public void i_access_gumtree_Website() {
        // Write code here that turns the phrase above into concrete actions
        myDriver.get("https://www.gumtree.co.uk/");
    }

    @Then("^I see gumtree Home Page$")
    public void i_see_gumtree_Home_Page() {
        // Write code here that turns the phrase above into concrete actions
        Assert.assertEquals(myDriver.getTitle().contains("Gumtree"), true);
        myDriver.quit();
    }
    @When("^I access website \"([^\"]*)\"$")
            public void i_access_website(String websiteUrl){
        myDriver.get(websiteUrl);
            }
    /*@Then("^I see title as \"([^\"]*)\"$")
            public void i_see_title_as(String title){
*/
    @Then("^I see title as \"([^\"]*)\"$")
    public void i_see_title_as(String websiteTitle)  {
        Assert.assertEquals(myDriver.getTitle().contains(websiteTitle), true);
        Assert.assertEquals(myDriver.getTitle().contains(websiteTitle), true);

    }

}