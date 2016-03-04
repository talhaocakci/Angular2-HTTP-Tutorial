# Angular2-HTTP-Tutorial
A simple demo for an Angular2 SPA and a NodeJS backend communicate via RxJS.

For client below repo is used
https://github.com/pkozlowski-opensource/ng2-play/

For server below repo is used
https://github.com/auth0/nodejs-jwt-authentication-sample

Then, some corrections according to Angular2 modifications have been done and code simplified for beginners.

##Using client:##
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

##Using server

Server is running on NodeJS. So ensure that you have NodeJS installed.
Then, start the server with

**node server.js**


----------


##Further Explanation on client project##

####TypeScript####
Angular2 uses **Typescript**. 

TypeScript = ES6 + powerful type checking abilities + object oriented features

Even the ES6 itself is not natively supported by browsers yet. So, the TypeScript code should be converted into current Javascript with TypeScript platform.

Angular2 uses modules. Modules are installed and communicated with each other with SystemJS.
You will see module loading codes inside index.html with SystemJS such as 

      System.import('dist/hello')

This code will asynchronously load the modules to the application.

SystemJS depends on some other libraries namely  *ES6 module loader polyfill* and *Traceur*. You will see the  libraries that can be linked to the project inside *package.json*.

####package.json####
package.json defines all the dependencies and the metadata of the project. When you invoke **npm i** in command line, all the libraries  defined in this file are installed into your OS if they are missing.

In fact, the libraries are linked into the project when their related js file is included inside the html file. Fo instance the excerpt below includes Angular 2 and RxJS into our project:

    <script src="/node_modules/rxjs/bundles/Rx.js"></script>
	<script src="/node_modules/angular2/bundles/angular2.min.js">
	</script>

Please be aware of the path. When you install a package with NPM (NodeJS package manager), related files are bundled inside node_modules folder. The relative path must point to this folder. After that you may point to the library you want.


#### index.html ####
This page is the single page of our SPA (single page application)
All the modules and libraries are imported into the project via this file. Javascript imports link the external modules. And the Angular 2 components are imported with SystemJS as I said before with 

      System.import('dist/hello')

dist folder contains the javascript components that is converted from TypeScript.

Inside index.html, notice this code block:

    <body>
         <random-app>Loading...</random-app>
         <hello-app>Loading...</hello-app>
    </body>
 
 **random-app** and **hello-app** tags include an Angular 2 component. Here the show starts. This is the first place we faced an Angular 2 component that is one of the most important items of Angular architecture.
 
 This components are defined in a separate file under src file. These are:
*hello.ts* and *app.ts*

Let's inspect them:

###Angular 2 component

Angular 2 components simply consists of:
1- A typescript class (converted into javascript)
2- View. This is called as template in Angular 2 and this template can be a direct html snippet or a html file reference. Note that the root element should not be *html* but a *div*.
3- A @Component annotation. This annotation is a feature of Angular 2 and exposes a TypeScript class as a component. *selector* attribute defines the name of the tag that will be used inside html snippet. You remember < random-app > ? This is it.

When < random-app > tag is seen by Angular 2, it searches for a directive inside the project. A directive might be anything that can be executed in Angular 2. For instance a component is also a directive with some html template inside it. 
Everytime, a directive is used for breaking a solution into smaller pieces. Each directive packages some functionality and/or some DOM structure.

You may define your own directives and you may use the built-in directives such as validation, collection iteration etc..

