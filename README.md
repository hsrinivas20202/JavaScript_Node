# JavaScript_Node
JavaScript Node code solutions

1. Jasmine angular means
Behavior-driven development framework
Jasmine is a behavior-driven development framework for testing JavaScript code that plays very well with Karma.
Like Karma, it's also the recommended testing framework within the Angular documentation as it's setup for you with the Angular CLI. Jasmine is also dependency free and doesn't require a DOM
Jasmine is a JavaScript testing framework that supports a software development practice called Behaviour-Driven Development, or BDD for short. It’s a specific flavour of Test-Driven Development (TDD).
describe('Hello world', () => { (1)
  it('says hello', () => { (2)
    expect(helloWorld()) (3)
        .toEqual('Hello world!'); (4)
  });
});

•	The describe(string, function) function defines what we call a Test Suite, a collection of individual Test Specs.
•	The it(string, function) function defines an individual Test Spec, this contains one or more Test Expectations.
•	The expect(actual) expression is what we call an Expectation. In conjunction with a Matcher it describes an expected piece of behaviour in the application.
•	The matcher(expected) expression is what we call a Matcher. It does a boolean comparison with the expected value passed in vs. the actual value passed to the expect function, if they are false the spec fails.

Karma:

jasmine-core. Jasmine is the framework we are going to use to create our tests. It has a bunch of functionalities to allow us the write different kinds of tests.
karma. Karma is a task runner for our tests. It uses a configuration file in order to set the startup file, the reporters, the testing framework, the browser among other things.
The rest of the dependencies are mainly reporters for our tests, tools to use karma and jasmine and browser launchers
To run the test you only need to run the command “ng test”. This command is going to execute the tests, open the browser, show a console and a browser report and, not less important, leave the execution of the test in watch mode.
https://medium.com/swlh/angular-unit-testing-jasmine-karma-step-by-step-e3376d110ab4
