BE-Jenny Li

Base URL :
https://foodie-pass.herokuapp.com

Endpoints:
POST - Register a new user
https://foodie-pass.herokuapp.com/auth/register
\*\*\* Requires a username, and password

POST - Login a registered user. Also provides Web Token.
https://foodie-pass.herokuapp.com/auth/llogin
\*\*\* Requires username and password

GET - Returns all posts/portfolios
https://foodie-pass.herokuapp.com/auth/api
\*\*\* Requires JSON Web Token

POST - Adds a new post
https://foodie-pass.herokuapp.com/auth/api
\*\*\* Requires JSON Web Token and a data object

PUT - Edits a post with the selected id
https://foodie-pass.herokuapp.com/auth/:id
\*\*\* Requires JSON Web Token and a data object

DELETE - Deletes a post with the selected id
https://foodie-pass.herokuapp.com/auth/:id
\*\*\* Requires JSON Web Token
