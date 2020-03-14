# Brew Builder

## Purpose
The purpose of this application is to assist home brewers with designing there own beer recipes.  By providing the necessary information
for ingredients and automating calculations, users can qucikly and efficiently create and experiment with new beer recipes.

## Technologies Used:
- Javascript
- HTML
- EJS
- CSS
- Express
- MongoDB
- Mongoose

## Approach
- Utilize a database that will store ingredient data.
- Create a dynamic form where the users can put together new recipes.
- Perform recipe calculations.
- Store user recipes in a database where they can be edited and removed by users.


## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.



### Installing
- Seeding the recipe databases
    - host/seed_fermentables
    - host/seed_hops
    - host/seed_yeast
    
## NPM install
- express
- mongod
- method-override
- ejs

## Unsolved Problems
- Could not get the edit page to load the current recipe values properly.  Users can still update ther recipes
but they will need to enter in the original recipe data.  This only pertains to the array values within the database.
- Additional styling which include icons on button and links.
- Have not yet gotten the app to properly run on Heroku.
- Does not yet have encrypted passwords.


## Wish List
- Add in a beer style guide that will allow users to stay within certain style guidelines for their recipes.
- Add an RGB color view to give the user an idea of what color their beer will be.
- Add in mashing steps to the recipe builder.
- Improve the seeded ingredient database.




