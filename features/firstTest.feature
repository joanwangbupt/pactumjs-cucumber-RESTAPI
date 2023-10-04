Feature: First API Test Scenarios

    Scenario:  Verify a GET request
        Given I make a GET request to "qa"
        Then the response status code should be "200"
        And the response body should contain "test"