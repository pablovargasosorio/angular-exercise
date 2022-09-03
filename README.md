# Angular/NgRx UI Exercise

This project is an incomplete UI. Based on a simple SaaS App manager.
The data is mocked in three JSON constants, one for each collection (Apps, Accounts and Users) so we can respond that, instead of requesting a Rest API.

The project should be completed with the following requirements:
- Grid component should be responsive. Show different columns depending on the screen width.
- App card in the grid should show the name, the icon, the description and a counter of accounts for that App (app.id === account.app_id)
- Account card should show the account name, the App icon and the User name for that Account.
- User card should show the name and the icons of the apps which that user is using.
- Each page should load 50 results, when scrolling down it should load the next 50 and so on.
- Page components should not use services directly, use NgRx store selectors and actions instead.
- The API service getList method should emulate a 3s timeout when getting the data. So the UI shows loading placeholders, like if we did real backend requests. You can use rxjs debounce for that. 
- The collection items should be cached, so if we go back to a list which is already loaded, the store doesn't need to get the data again from the API (mock) source.
