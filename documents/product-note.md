### Product Note

Fictional e-commerce platform which sells products of all categories like Amazon.

Need to build an internal tool for this platform which helps the organisation to get quick overview on the sales, product performance and customer trends. This tool will help the organization to promptly take any required actions, whether enhancing sales or strategizing for new approaches. 
    
This internal tool will have the below 3 dashboard,
1. Sales Overview
2. Product Performance
3. Customer Analytics

---
### Navigation
The internal tool wil have the layout with navigation on the left side and profile details on the top right.

- Navigation will have the links to navigate to the respective dashboard, find the navigation order below,

    1. Dashboard - /dashboard 
    2. Sales 
        2.1 Overview - /sales/overview
    3. Products
        3.1 Overview - /products/overview
    4. Customers
        4.1 Overview - /customers/overview

---
### Dashboard

Dashboard will showcase

1. Hourly sales - real time update - line chart
2. Sales for last 15 days - bar chart
3. Top 5 products sold in last 15 days - table ( with product name, category and quantity and amount)
4. Top 5 customer spends in last 15 days - table ( with customer name, total spends )

on clicking on the each component will take them to their respective overview page.


---
### Sales Overview

For the organisation to get quick insight on the sales, display below metrics

1. Total Sales - card (with relavant comparison)
2. Total Order - card (with relavant comparison)
3. Total Profit - card (with relavant comparison)
4. Conversion Rate - card (with relavant comparison)
5. Total Refunds - card (with relavant comparison)
6. Total Returns - card (with relavant comparison)
7. Sales by channel - pie chart ( ios, android, website, mobile web)
8. Revenue & Profile product categorywise - stackedbar chart

All these metrics are aggregated for the selected date filter. By default it is selected for ==Today==. 

Relavant Comparision 
Today / Yesterday - if single day is filtered (correponding metrics for that last week same day is used for comparison)
if custom date is selected - correponding metrics for last x days data is compared

---
### Product Performance

Filters
Category + Timestamp

Cards
1. Total products sold
2. Total products returned
3. No. of products not sold

Table
1. Top 10 products by revenue
2. Top 10 underpeforming products by revenue
3. Top 10 products by quantity
4. Top 10 products by product returns
5. Top 10 products by customer rating
6. Top 10 products by bad customer rating


---
### Customer Analytics

Customer traffic by channel
Total customers 
Total new customers
Total repeating customers
Top spending customers
Funnel

---
### Not in this scope
    1. Product level performance metrics is not included in this scope.
    2. Login page is note needed.
    3. Designing the backend



