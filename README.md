# Vegan Beer

A simple app based on the Barnivore API to check whether or not a beer is vegan-friendly

## Running the server

I recommend using [nodemon](http://nodemon.io/):

```
nodemon app/server.js
```

Alternatively just use node:

```
node app/server.js
```

## Building in development

To compile assets whilst developing locally run the following command:

```
gulp dev
```

## Building for production

To compile assets for production, run the following command with the `prod` flag:

```
gulp build --prod
```
