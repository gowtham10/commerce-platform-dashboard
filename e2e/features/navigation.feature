Feature: Navigation 

  Once the page is loaded, it should display the configured links.

  Scenario Outline: Display the configured links
    Given I am on the <pageName> page
    Then I should see the following links:
      | Dashboard |
      | Sales |
      | Products |
      | Customers |
    And "<displayName>" should be highlighted with color "#ffc42a" and the rest should be "#d1d1d1"

    Examples:
      | pageName | displayName |
      | dashboard | Dashboard |
      | sales | Sales |
      | products | Products |

  Scenario: Nested links
    Given I am on the customers page
    Then I should see the following links:
      | Dashboard |
      | Sales |
      | Products |
      | Customers |
      | Analytics |
    

