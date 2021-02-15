<<<<<<< HEAD
# Purple Cow Counter

## Description

This application tracks the number of times a user clicks the button on this app and displays it for the user. This application uses a third-party API to track the number of clicks therefore the data outlives the life of the application.

## How To Use :

Click the button to increment the button click count displayed on the page

## How To Run :

1. Docker (Pull from DockerHub and run directly) (Recommended)

   docker run -it --rm -p 1337:80 purple-cow-counter:prod
   Navigate to http://localhost:3030 in your browser (Chrome recommended)

2. Clone the project and run dockerfile using Docker

    git clone <project>
    docker build -f Dockerfile.prod -t purple-cow-counter:prod .
    docker run -it --rm -p 1337:80 purple-cow-counter:prod


3. Clone and run npm start (Not recommended at all.)
    git clone <project>
    cd project
    npm start


Future Potential Features

1. Add real-time updates. When one instance is ran, every click will increment the number displayed by 1. In the situation, when more than one instance is running or multiple users are using the same instance, there maybe times where you click and the numbers increments by a number greater than 1. Obviously, this is because a few users may have clicked the button multiple times between your last and current click.

2. Collect metrics on the location. It would be cool to see what regions users are from. 

3. Some animations when the button is clicked. Moving particle animation where each particle is a low-opacity vector of a cow head. Add some fun UI/UX.
    
=======
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
>>>>>>> e33a7571ca2b1abf49005633a4a374251a9ab553
