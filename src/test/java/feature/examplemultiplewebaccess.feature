Feature: Examples Test

  Scenario Outline: Verify Accessing multiple websites
    Given I am a Chrome User
    When I access website "<websiteUrl>"
    Then I see title as "<websiteTitle>"
    Examples:
      |websiteUrl|websiteTitle|
      |https://www.google.co.uk/|Google|
      |https://www.facebook.com/|Facebook|
