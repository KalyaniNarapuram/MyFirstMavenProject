package stepDefinition;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features ="C:\\Users\\hp\\IdeaProjects\\MyFirstMavenProject\\src\\test\\java\\feature\\firstfeature.feature",
        glue={"stepDefinition"},
        tags={"@smoke,@sanity"},
        format = {"pretty", "html:target/destination" +
                ""}
        //monochrome = {},
        //dryRun = {}
        //snippets = {},
        //strict = {},


)

public class TestRunner {


}
