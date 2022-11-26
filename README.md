# STAR WARS APP

Basic app using https://swapi.dev/ API to display and play with Star Wars data.

## Install and Launch Project 🚀

```bash
git clone https://github.com/Kinga-Zawarczynska/star-wars-app
cd star-wars-app
npm install
npm run dev
```

# Next steps
For this project next steps would be to define more suitable state management, i.e. I could provide context and then load more data and also make some more relations between them (but most probably they'd look like the relation between starships and pilots).

I'd also style it more, definitely, add some pictures based on the data for example and link to movies based on movie url.


I'd refactor App component, as it does a lot of things at the moment, but for such small amount of data it should be fine. With more data coming I could add some cache, save data to localStorage for example and not fetch them if they're already there.

I'd add ErrorBoundary for the whole app crash incident. For that though I'd have to change App component to class component and then create some new "main" component.

I left console.log(err) in fetch function, it should be somehow logged using for example sentry, but for now this should be fine. 