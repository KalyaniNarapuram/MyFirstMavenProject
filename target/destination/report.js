$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/hp/IdeaProjects/MyFirstMavenProject/src/test/java/feature/firstfeature.feature");
formatter.feature({
  "line": 1,
  "name": "Access Websites",
  "description": "",
  "id": "access-websites",
  "keyword": "Feature"
});
formatter.before({
  "duration": 292977,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Access Google.com through Chrome",
  "description": "",
  "id": "access-websites;access-google.com-through-chrome",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am a Chrome User",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I access Google Website",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I see Google Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "FistFeatureStepDefinition.i_am_a_Chrome_User()"
});
formatter.result({
  "duration": 211450131,
  "status": "passed"
});
formatter.match({
  "location": "FistFeatureStepDefinition.i_access_Google_Website()"
});
formatter.result({
  "duration": 2783571,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinition.FistFeatureStepDefinition.i_access_Google_Website(FistFeatureStepDefinition.java:23)\r\n\tat ✽.When I access Google Website(C:/Users/hp/IdeaProjects/MyFirstMavenProject/src/test/java/feature/firstfeature.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "FistFeatureStepDefinition.i_see_Google_Home_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 95573,
  "status": "passed"
});
formatter.before({
  "duration": 798719,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Access facebook.com through Chrome",
  "description": "",
  "id": "access-websites;access-facebook.com-through-chrome",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am a Chrome User",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I access facebook Website",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I see facebook Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "FistFeatureStepDefinition.i_am_a_Chrome_User()"
});
formatter.result({
  "duration": 63716,
  "status": "passed"
});
formatter.match({
  "location": "FistFeatureStepDefinition.i_access_facebook_Website()"
});
formatter.result({
  "duration": 380017,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinition.FistFeatureStepDefinition.i_access_facebook_Website(FistFeatureStepDefinition.java:35)\r\n\tat ✽.When I access facebook Website(C:/Users/hp/IdeaProjects/MyFirstMavenProject/src/test/java/feature/firstfeature.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "FistFeatureStepDefinition.i_see_facebook_Home_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 464782,
  "status": "passed"
});
formatter.before({
  "duration": 1159394,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Access amazon.com through Chrome",
  "description": "",
  "id": "access-websites;access-amazon.com-through-chrome",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I am a Chrome User",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I access amazon Website",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I see amazon Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "FistFeatureStepDefinition.i_am_a_Chrome_User()"
});
formatter.result({
  "duration": 66559,
  "status": "passed"
});
formatter.match({
  "location": "FistFeatureStepDefinition.i_access_amazon_Website()"
});
formatter.result({
  "duration": 1424497,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinition.FistFeatureStepDefinition.i_access_amazon_Website(FistFeatureStepDefinition.java:47)\r\n\tat ✽.When I access amazon Website(C:/Users/hp/IdeaProjects/MyFirstMavenProject/src/test/java/feature/firstfeature.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "FistFeatureStepDefinition.i_see_amazon_Home_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 275342,
  "status": "passed"
});
formatter.before({
  "duration": 407893,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Access booking.com through Chrome",
  "description": "",
  "id": "access-websites;access-booking.com-through-chrome",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@sanity"
    },
    {
      "line": 20,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I am a Chrome User",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I access booking Website",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I see booking Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "FistFeatureStepDefinition.i_am_a_Chrome_User()"
});
formatter.result({
  "duration": 94436,
  "status": "passed"
});
formatter.match({
  "location": "FistFeatureStepDefinition.i_access_Booking_Website()"
});
formatter.result({
  "duration": 232106,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinition.FistFeatureStepDefinition.i_access_Booking_Website(FistFeatureStepDefinition.java:59)\r\n\tat ✽.When I access booking Website(C:/Users/hp/IdeaProjects/MyFirstMavenProject/src/test/java/feature/firstfeature.feature:23)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "FistFeatureStepDefinition.i_see_Booking_Home_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 76800,
  "status": "passed"
});
});