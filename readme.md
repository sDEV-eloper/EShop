# STEPS

1. npm init -y (create package.json)
2. npm i express, nodemon (added node_modules and package.lock.json)
#  package.json is for declaring project metadata and dependencies, while 
# package-lock.json is for specifying and locking down the precise versions of those dependencies for consistent installations.
# the "node_modules" directory contains third-party packages and libraries that your project depends on.

3. Created file-server.js, .env, .gitignore

4. added scripts for start and server- on package.json 

5. Setup MongoDB and get URL to connect with Compass

6. Create config file for all configuration.

# using mongoose- provide access of mongodb database and providing more controls over it

# Using Morgan, you can easily log requests made to your Node. js server, including information such as the request method, the URL of the request, the status code of the response, and the length of the response body. 
Example: GET / 304 2.911 ms - -

7. bcrypt package- to password hashing
8. copy link to postman : http://localhost:8080/api/v1/auth/register
create user testing dummy api and send
it give response successfully registered



