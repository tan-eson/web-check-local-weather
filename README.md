# Weather App

Get the current weather detail for every city around the world. Created using [Create-React-App](https://github.com/facebook/create-react-app), while also utilising libraries such as of `Redux Toolkit` and `Material-UI`.

## API KEY for [openweathermap.org](https://openweathermap.org/)

Before running the app, make sure you have a `.env.local` containing the API key. Otherwise, any API call to fetch weather information will not work.

You should place the `.env.local` in this directory:

```
.
├── public
├── src
├── README.md
├── .env.local
└── ...
```

Paste the following into your `.env.local`:
`REACT_APP_OPEN_WEATHER_MAP_API_KEY={YOUR_API_KEY_HERE}`

Don't forget to replace `YOUR_API_KEY_HERE` with your actual API key!

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### `yarn format:fix`

Runs prettier format for the entire project folder.

## App Highlight

- Get current weather information using AJAX
- Persist most recent 5 searches even on page refresh
- Able to delete any record within the search history
- Able to retrieve and search using each record in search history
- `UI` responsive to all screen sizes

#### For the devs

- Uses redux toolkit to create store, reducer and action
- Appropriate separation of constants and Shared Components
- Uses Redux hydration technique to keep search history in redux upon refresh

#### Folder Structure

```
.
├── src
│ ├── assets
│ ├── components
│ │ └── Weather Details
│ │ └── Weather History
│ │ └── Weather SearchBar
│ ├── helpers
│ │ └── constants
│ ├── pages
│ │ └── weather-page (wrapper for components)
│ ├── redux
│ │ └── Snackbar slice
│ │ └── Weather slice
│ │ └── store
│ │ └── types
│ └── ...
└── ...
```
