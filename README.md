# Angular2-HTTP-Tutorial
A simple demo for an Angular2 SPA and a NodeJS backend communicate via RxJS.

For client below repo is used
https://github.com/pkozlowski-opensource/ng2-play/

For server below repo is used
https://github.com/auth0/nodejs-jwt-authentication-sample

Then, some corrections according to Angular2 modifications have been done and code simplified for beginners.

**Usage:**

Client is using *gulp* for triggering

 1. Transpiling ES6 code to Javascript
 2. Serving the application's HTML file
 3. Listening for changes and reflect dynamically to the browser

So, you can install all the dependencies first with
**npm i**  (sudo may be required according to your OS).

In case you got some authentication errors change it to:
**sudo npm i**

Then start the client with 
**gulp play**

*play* task is defined as serving on 9000 port and listening any modifications on files with gulpfile.js

    var port = 9000, app;

    gulp.watch(PATHS.src, ['ts2js']);

    app = connect().use(serveStatic(__dirname));
    http.createServer(app).listen(port, function () {
        open('http://localhost:' + port);
    });


----------

**Using server**

Server is running on NodeJS. So ensure that you have NodeJS installed.
Then, start the server with

**node server.js**

