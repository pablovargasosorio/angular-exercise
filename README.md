# Angular/NgRx UI Exercise

This project is an incomplete UI. Based on a simple SaaS App manager.
We have 3 collections: Users, Apps and Accounts. An Account is a discovered usage of any App by any User.
The data is mocked in three JSON constants, one for each collection (Apps, Accounts and Users) so we can respond that, instead of requesting a Rest API.

# Base project:
![Alt text](./exercise_snapshot.png?raw=true "Angular Exercise")
The project is already built, like you can see in the screenshot. So the main challenges to complete the exercise would be:
- Figure out how to complete missing data in the cards (counters, etc.) which should be retrieved by a kind of joining logic.
- Now showing the first 50. Implement scroll 'get more results' action and store cache.

# Requirements:
- The app/account/user data should be presented as a card grid.
- The grid component should be responsive. Show different columns depending on the screen width.
- App card in the grid should show the name, the icon, the description and a counter of accounts for that App.
- Account card should show the account name, the App icon and the User name for that Account.
- User card should show the name and the icons of the apps which that user is using.
- Each page should load 50 results as a limit, when scrolling down it should load the next 50 and so on.
- The collection items should be cached, so if we go back to a list which is already loaded, the store doesn't need to get the same data again from the API (mock) source.
- There's some errors in unit tests. Fix them by mocking the required providers.

# Nice to have:
- Search functionality.
- Complete UT coverage.
- Cool design based on bootstrap classes.
