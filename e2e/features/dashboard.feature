Feature: Dashboard Interactions

  Interactions with the dashboard, Clicking on the card, Filtering the selected metrics is tested in this feature file.

  Background:
    Given The loaded dashboard page

  Scenario: Metrics count should match selected metrics after filtering
    When I update the selected metrics 
    Then Displayed metrics count should match the selected metrics count 

  Scenario Outline: Dashboard Redirection from Card Click
    When The <card> card is clicked
    Then The <card> click should redirect to the <page> page
    Examples:
      | card | page |
      | salesCard | sales |
      | ordersCard | products |
      | customersCard | customers |
