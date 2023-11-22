Feature: Dashboard

  Dashboard should have a header section with filters, cards section and metrics section.

  Background:
    Given I am on the dashboard page

  Scenario: Dashboard main content validation
    Then I should see the below sections:
      | page-title |
      | simple-select |
      | cards   |
      | metrics |
