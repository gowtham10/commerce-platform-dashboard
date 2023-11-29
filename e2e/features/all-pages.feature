Feature: Page validation 

  Once the page is fully loaded, The page main content should display four sections. Each page, count of cards to be displayed and metrics to be displayed is validated.

  Scenario Outline: Sections displayed on <pageName> page
    Given The loaded <pageName> page
    Then I should see the below sections:
      | page-title |
      | filters |
      | cards   |
      | metrics |
    And <cardsCount> cards should be displayed
    And <metricsCount> metrics should be displayed

    Examples:
      | pageName | cardsCount | metricsCount |
      | dashboard | 3 | 3 |
      | sales | 6 | 1 |
      | products | 4 | 4 |
      | customers | 3 | 2 |

