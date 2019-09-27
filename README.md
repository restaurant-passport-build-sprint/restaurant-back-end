BE-Jenny Li

Base URL :
https://foodie-pass.herokuapp.com

POST - Register a new user
Endpoint: https://foodie-pass.herokuapp.com/auth/register
\*\*\* Requires a username, password, city and email
Will need:
{
"username": "jenny",
"password": "password123",
"city": "San Francisco",
"email": "jenny123@gmail.com"
}
Register 201 Response:
{
"id": 3
}

POST - Login a registered user. Also provides Web Token.
Endpoint: https://foodie-pass.herokuapp.com/auth/login
\*\*\* Requires username and password
will need:
{
"username": "jenny",
"password":"password123"
}
Login User 200 Response:
{
"id": 3,
"message": "jenny",
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjozLCJ1c2VybmFtZSI6Implbm55IiwiaWF0IjoxNTY5NTE2NjIwLCJleHAiOjE1Njk1NDU0MjB9.NDZBbgwQKYoI-X3aLDuLvSfiWLbxW924Q4QQSIak0cQ"
}

GET - Returns all posts
Endpoint: https://foodie-pass.herokuapp.com/auth/api
\*\*\* Requires JSON Web Token
Server returns:
[ { "id": 1, "restaurant_name": "Pizza Hut", "restaurant_type": "Italian-American cuisine", "created_at": "2019-08-26 20:20:07", "user_id": 1, "item_name": "pizza", "photo_of_order": "https://www.pngfind.com/pngs/m/327-3272002_free-png-pizza-png-png-image-with-transparent.png", "food_rating": 3, "comments": "this is a great place to eat", "price": 7.45, "wait_time": "30min", "date_of_visit": "01/30/2019" }, { "id": 2, "restaurant_name": "Burger King", "restaurant_type": "Fast Food", "created_at": "2019-08-26 20:20:07", "user_id": 2, "item_name": "Whopper", "photo_of_order": "https://www.stickpng.com/assets/images/5882488ae81acb96424ffaaf.png", "food_rating": 4, "comments": "fast fun service", "price": 8.74, "wait_time": "10min", "date_of_visit": "02/05/2019" }, { "id": 3, "restaurant_name": "Mcdonalds", "restaurant_type": "Fast-Food", "created_at": "2019-08-26 20:20:07", "user_id": 3, "item_name": "Big Mac", "photo_of_order": "https://i.redd.it/bydegsnwwhp11.png", "food_rating": 4.5, "comments": "i order with no pickles and received pickles i will not be returning", "price": 8, "wait_time": "9min", "date_of_visit": "03/10/2019" }, { "id": 4, "restaurant_name": "olive garden", "restaurant_type": "Italian cuisine", "created_at": "2019-08-26 20:20:07", "user_id": 4, "item_name": "spaghetti and meatballs", "photo_of_order": "https://www.pastapass.com/images/dish1.png", "food_rating": 5, "comments": "my favorite go to spot ", "price": 12.1, "wait_time": "40min", "date_of_visit": "05/27/2019" }, { "id": 5, "restaurant_name": "Chili's Grill & Bar ", "restaurant_type": "American cuisine", "created_at": "2019-08-26 20:20:07", "user_id": 5, "item_name": "Chicken steak fish and chips", "photo_of_order": "https://www.pngkey.com/png/detail/21-216126_chicken-steak-fish-and-chips.png", "food_rating": 5, "comments": "the right amount of spice and the right amount of alcohol i <3 this place", "price": 13.24, "wait_time": "45min", "date_of_visit": "04/09/2019" }, { "id": 6, "restaurant_name": " Buffalo Wild Wings", "restaurant_type": "American cuisine", "created_at": "2019-08-26 20:20:07", "user_id": 6, "item_name": "BBQ hot wings", "photo_of_order": "http://www.pngmart.com/files/8/Grilled-Food-PNG-Clipart-Background.png", "food_rating": 4, "comments": "mm i had better wings", "price": 15, "wait_time": "40min", "date_of_visit": "01/30/2019" } ]

POST - Adds a new post
Endpoint: https://foodie-pass.herokuapp.com/auth/api
\*\*\* Requires JSON Web Token and a data object
Example:
{
"restaurant_name": "Pizza Hut",
"restaurant_type": "Italian-American cuisine",
"user_id": 1,
"item_name": "pizza",
"photo_of_order": "https://www.pngfind.com/pngs/m/327-3272002_free-png-pizza-png-png-image-with-transparent.png",
"food_rating": 3,
"comments": "this is a great place to eat",
"price": 7.45,
"wait_time": "30min",
"date_of_visit": "01/30/2019"
}

PUT - Edits a post with the selected id
Endpoint: https://foodie-pass.herokuapp.com/auth/:id
\*\*\* Requires JSON Web Token and a data object

DELETE - Deletes a post with the selected id
Endpoint: https://foodie-pass.herokuapp.com/auth/:id
\*\*\* Requires JSON Web Token
