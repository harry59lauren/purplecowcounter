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
    