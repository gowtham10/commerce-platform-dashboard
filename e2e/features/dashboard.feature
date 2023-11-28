Feature: Dashboard

  Dashboard should have a header section with filters, cards section and metrics section.

  Background:
    Given The loaded dashboard page

  Scenario: Dashboard main content validation
    Then I should see the below sections:
      | page-title |
      | filters |
      | cards   |
      | metrics |

  Scenario: Dashboard cards 
    Then 3 cards should be displayed

  Scenario: Metrics count should match selected metrics
    When I update the selected metrics 
    Then Displayed metrics count should match the selected metrics count 
