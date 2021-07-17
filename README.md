## Hi! I'm Roopesh Arvapalli. 18BCE2010
This is my project for the Dyte Backend Task of creating Webhooks Microservices usuing Molecular.js and the backend using Express.js

### Please follow the steps below, to run this project on your local machine.

## Clone this repository

Command - git clone https://github.com/roopesh04/Dyte.git

## Change directory into the Webhooks folder

Command - cd webhooks-microservice

## Now start the server

Command - npm start

## Now open localhost:3000 on your browser
You will see a website having all the required features opened up.


## Go the Greeter service in the Navbar

Click on the Tab no. 2 which is named as Greetings.


# Now perform the API calls

Here you can see, webhooks.register, webhooks.list, webhooks.trigger displayed there.
In each one of them, you can perform an API call by entering any data in the required fields.


## Admin Controls

For the Admin Part, the server has been deployed on heroku.
The URL for this server is https://roopesh-dyte.herokuapp.com/.
Here, you can see what the server returns back on sending the various requests. 
The format for sending the calls of different request types are mentioned below.

1. GET
>     No Body


2. POST
>     {
>     targetUrl:URL
>     }



3) UPDATE
>     {
>     targetUrl:URL
>     }

4) DELETE
>     {
>     targetUrl:URL
>     }

For Update and Delete, the URL should be
https://roopesh-dyte.herokuapp.com/:id




## If you want to view the demo site, checkout this URL.
https://roopesh-dyte-webhooks.herokuapp.com/



# Thankyou for viewing this project.