### Design

Building fully config driven FE application.

## Techstack, Frameworks
    1. NextJs Framework with typescript + react
    
    2. Is sepeate state management like Redux needed ? - No

    3. CSS 
        - inline css (when needed)
        - CSS Modules
        - BEM methodology
    
    4. CSR / SSR - SSR + CSR (where localstorage is needed)

## Components

1. Line Chart
2. Single Bar Chart
3. Double Bar Chart
4. No Filter Table
5. Cards
6. Date Range Picker
7. Dropdown

## Design

Layout can be found here [Layout](./layout.png)

* `Navigation`, `Cards section` and `Metrics Section` in the layout are `config driven section`.
* `All the cards` in the cards section are retrieved using `single api call`.
* `Metrics` in the metrics section are retrieved using `seperate api call`. (eg. if metrics section has 3 metrics, 3 api calls are made.)
* `All the components` have their corresponding `skeleton html`. 
* `Nested navigation` is supported
* From the `Dashboard` page, can be redirected to other dashboards by `clicking` either on the `Card or Metric`.
* `localstorage` is included in all the pages with `seperate keys` to store the `filters`. When the page reloads the selected filters are applied. 

all the mock configuration and sample data can be found here [mocks](../mocks/)

## Folder Structure

* [Link](./folder_structure.png)

