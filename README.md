# Design and Development Challenge – Bowling Score

## Requirement
Create a program which, given a valid sequence of rolls for one line of American Ten-Pin Bowling, produces the total score for the game. Fork this repository, build your program in the language of your choice, then submit a pull request with your code.

## Tasks which are out of scope
*   No need to check for valid rolls.
*   No need to check for correct number of rolls and frames.
*   No need to provide scores for intermediate frames.

## Scoring Logic
*   Each game, or "line" of bowling, includes ten turns, or "frames" for the bowler.
*   In each frame, the bowler gets up to two tries to knock down all the pins.
*   If in two tries, he fails to knock them all down, his score for that frame is the total number of pins knocked down in his two tries.
*   If in two tries he knocks them all down, this is called a "spare" and his score for the frame is ten plus the number of pins knocked down on his next throw (in his next turn).
*   If on his first try in the frame he knocks down all the pins, this is called a "strike". His turn is over, and his score for the frame is ten plus the simple total of the pins knocked down in his next two rolls.
*   If he gets a spare or strike in the last (tenth) frame, the bowler gets to throw one or two more bonus balls, respectively. These bonus throws are taken as part of the same turn. If the bonus throws knock down all the pins, the process does not repeat: the bonus throws are only used to calculate the score of the final frame.
*   The game score is the total of all frame scores.

## Validation Test Cases
Use the test cases from the table below to validate the scoring logic of your program. For program input, "X" indicates a strike, "/" indicates a spare, "-" indicates a miss, and a number indicates the number of pins knocked down in the roll.

| Program Input         | Scoring Calculation                                                                                                             | Total Score |
|-----------------------|---------------------------------------------------------------------------------------------------------------------------------|-------------|
| XXXXXXXXXXXX          | (10+10+10) + (10+10+10) + (10+10+10) + (10+10+10) + (10+10+10) + (10+10+10) + (10+10+10) + (10+10+10) + (10+10+10) + (10+10+10) | 300         |
| 9-9-9-9-9-9-9-9-9-9-  | 9 + 9 + 9 + 9 + 9 + 9 + 9 + 9 + 9 + 9                                                                                           | 90          |
| 5/5/5/5/5/5/5/5/5/5/5 | (10+5) + (10+5) + (10+5) + (10+5) + (10+5) + (10+5) + (10+5) + (10+5) + (10+5) + (10+5)                                         | 150         |


########################################################################################################################

# AngularJS bowling score app project

This project is an application skeleton for a typical [AngularJS](http://angularjs.org/) web app.



### Prerequisites
I have used a number of node.js tools to initialize and test angular-seed. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).


### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` (auto generated by WebStorm IDE) so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
angular-seed changes this location through the `.bowerrc` file.  Putting it in the app folder makes
it easier to serve the files by a webserver.*

### Run the Application

We have preconfigured the project with a simple development web server (auto generated by WebStorm IDE).  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/app/index.html`.



## Directory Layout

```
app/                    --> all of the source files for the application
  app.css               --> default stylesheet
  bower_components      --> excternal libraries
  components/           --> all app specific modules
    version/              --> version related components
      version.js                 --> version module declaration and basic "version" value service
      version_test.js            --> "version" value service tests
      version-directive.js       --> custom directive that returns the current app version
      version-directive_test.js  --> version directive tests
      interpolate-filter.js      --> custom interpolation filter
      interpolate-filter_test.js --> interpolate filter tests
  view1/                --> the view1 view template and logic
    view1.html            --> the partial template
    view1.js              --> the controller logic
    view1_test.js         --> unit tests of the controller  
    player.js             --> Player object with all business logics
  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)  
	karma.conf.js         --> config file for running unit tests with Karma
	e2e-tests/            --> end-to-end tests
  protractor-conf.js    --> Protractor config file
  scenarios.js          --> end-to-end scenarios to be run by Protractor
node_modules            --> node libraries
```

## Testing

There are two kinds of tests in the angular-seed application: Unit tests and End to End tests.

### Running Unit Tests

The angular-seed app comes preconfigured with unit tests. These are written in
[Jasmine][jasmine], which we run with the [Karma Test Runner][karma]. We provide a Karma
configuration file to run them.

* the configuration is found at `karma.conf.js`
* the unit tests are found next to the code they are testing and are named as `..._test.js`.

The easiest way to run the unit tests is to use the supplied npm script:

```
npm test
```

This script will start the Karma test runner to execute the unit tests. Moreover, Karma will sit and
watch the source and test files for changes and then re-run the tests whenever any of them change.
This is the recommended strategy; if your unit tests are being run every time you save a file then
you receive instant feedback on any changes that break the expected code functionality.

You can also ask Karma to do a single run of the tests and then exit.  This is useful if you want to
check that a particular version of the code is operating as expected.  The project contains a
predefined script to do this:

```
npm run test-single-run
```


### End to end testing

Not provided