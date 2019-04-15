Feature: Access Websites

  @smoke
  Scenario: Access Google.com through Chrome
    Given I am a Chrome User
    When I access Google Website
    Then I see Google Home Page

  @sanity
  Scenario: Access facebook.com through Chrome
    Given I am a Chrome User
    When I access facebook Website
    Then I see facebook Home Page

  @sanity
  Scenario: Access amazon.com through Chrome
    Given I am a Chrome User
    When I access amazon Website
    Then I see amazon Home Page
  @sanity @smoke
  Scenario: Access booking.com through Chrome
    Given I am a Chrome User
    When I access booking Website
    Then I see booking Home Page

  Scenario: Access gumtree.com through Chrome
    Given I am a Chrome User
    When I access gumtree Website
    Then I see gumtree Home Page


