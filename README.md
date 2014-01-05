Angular Project Seed
====================

This is for devs wanting to getan Angular.js app up and running fast without the hassle of setting up and wiring everything together.  This stack was created with Yeoman and includes:

* Grunt - For running tasks
* Bower - For dependencies
* Angular - App framework
* LESS - For styling
* Jasmine - For testing
* HTML 5 Boilerplate - For initial markup

Folder Structure
----------------

`app`

Directory to hold the source files for the server and website.

`dist`

Working directory where processed files will be stored (such as output from a CSS preprocessor, or a file that has been minified). From this directory,
you can start the server after building to see what the compiled/processed output looks like. [http://yeoman.io/deployment.html](http://yeoman.io/deployment.html)

`test`

Suite of tests that should be run against the code in the build folder.

`node_modules`

Dependencies required by the application in order to run.

Getting Started
===============

Follow the instructions below to get started with developing with this template.

### Node

You will need to install Node.js in order to develop/run this project. Get it from here: http://nodejs.org/. Version was primarily developed against `v0.10.15`


### Global Dependencies

Install [Yeoman](http://http://yeoman.io/), [Grunt](http://gruntjs.com) and [Bower](http://http://bower.io/) as global dependencies. From the command line type:

    npm install -g yo grunt-cli bower


### Local Dependencies

Install the dependencies that your project uses. Navigate to the directory of your project and type:

    npm install


### Starting the server

You should now be able to start the server by typing:

    grunt serve

Testing App
===========

To run unit tests on the app, type:

    grunt karma

For instructions on setting up unit tests using Jasmine, refer to [http://pivotal.github.io/jasmine/](http://pivotal.github.io/jasmine/)

Default Grunt Tasks
===================

There are a number of different tasks and subtasks set up in Grunt that will perform the necessary actions for development.

##Grunt Serve

This is the main task for development. It can be run by navigating to the project directory and typing:

    grunt serve

This task produces compiled output, and then starts up a new server instance, which includes directory monitoring and live reloading for quicker development.
Developers will generally use this task while working. The following subtasks will be run:

* `clean:server` - Empties the main app `styles` folder and the `dist` folder.
* `bower-install` - Injects the app dependencies from the `bower.json` file.
* `autoprefixer` - Adds vendor prefixes.
* `less` - Complies all of the files in the `app/styles/less` directory.
* `cssmin` - Minifies all of the compiled less into the main styles sheet `app/styles/styles.css`
* `connect:livereload` - Starts the server. The default port is 9000.
* `watch` - Watches for changes in various files and then executes corresponding tasks, such as livereload.

##Grunt Test

This is the main task for testing. It can be run by navigating to the project directory and typing:

    grunt test

This task runs all server and client side tests. The following subtasks will be run:

* `clean:server` - Empties the main app `styles` folder and the `dist` folder.
* `autoprefixer` - Adds vendor prefixes.
* `connect:test` - Starts the test server. The default port is 9001.
* `karma` - Runs the tests

##Grunt Build

Once a release is ready to be deployed, this task will be run. It produces production level output (minified files, maximum compression for images, etc), runs
tests to ensure that nothing is wrong, and then deploys to the `dist` folder. It can be run by navigating to the project directory and typing:

    grunt build

or just:

    grunt

The following subtasks will be run:

* `clean:dist` - Empties the `dist` folder.
* `bower-install` - Injects the app dependencies from the `bower.json` file.
* `usemin` - Looks for usemin blocks if you have set them up. By default, there aren't any in this template.
* `autoprefixer` - Adds vendor prefixes.
* `concat` - Concatenates files using strings defined in Gruntfile.js. By default, there is no usage of this feature.
* `ngmin` - Makes it safe to minify files with the `ng` references.
* `cdnify` - Replaces Google CDN references.
* `less` - Complies all of the files in the `app/styles/less` directory.
* `cssmin` - Minifies all of the compiled less into the main styles sheet `app/styles/styles.css`
* `uglify` - Minifies the files in the scripts folder.
* `rev` - Renames files for browser caching purposes.
* `htmlmin` - Minifies the HTML files.
* `karma` - Runs final tests.

Dependency Documentation
========================

Here are all of the packages that the project needs to run, a brief description, and relevant documentation links.

`grunt` : Task Runner for Node.js.

* [Homepage](http://gruntjs.com/)
* [Getting Started](http://gruntjs.com/getting-started)
* [GitHub](https://github.com/gruntjs/grunt)

`grunt-autoprefixer` : Parse CSS and add vendor-prefixed CSS properties.

* [GitHub](https://github.com/nDmitry/grunt-autoprefixer)

`grunt-bower-install` : Inject Bower components into your HTML.

* [GitHub](https://github.com/stephenplusplus/grunt-bower-install)

`grunt-concurrent` : Runs tasks along side other tasks for speed.

* [GitHub](https://github.com/sindresorhus/grunt-concurrent)

`grunt-contrib-clean` : Cleans files and folders.

* [GitHub](https://github.com/gruntjs/grunt-contrib-clean)

`grunt-contrib-connect` : Starts up a server using the connect library.

* [GitHub](https://github.com/gruntjs/grunt-contrib-connect)

`grunt-contrib-copy` : Copies files from one location to another.

* [GitHub](https://github.com/gruntjs/grunt-contrib-copy)

`grunt-contrib-htmlmin` : Minifies HTML

* [GitHub](https://github.com/gruntjs/grunt-contrib-htmlmin)

`grunt-contrib-imagemin` : Optimizes .png files and enables .jpg progressive download.

* [GitHub](https://github.com/gruntjs/grunt-contrib-imagemin)

`grunt-contrib-jshint` : Lints Javascript.

* [GitHub](https://github.com/gruntjs/grunt-contrib-jshint)

`grunt-contrib-less` : Processes .less files and turns them into CSS.

* [GitHub](https://github.com/gruntjs/grunt-contrib-less)

`grunt-contrib-uglify` : Minifies Javascript files

* [GitHub](https://github.com/gruntjs/grunt-contrib-uglify)

`grunt-contrib-watch` : Watches location for changed files and executes tasks

* [GitHub](https://github.com/gruntjs/grunt-contrib-watch)

