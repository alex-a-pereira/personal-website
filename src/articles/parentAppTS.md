# Mightier Parent - TypeScript Migration

## Problem statement
When the codebase for Mightier Parent was created, the decision was made to use vanilla JavaScript for our React code. For a few months this decision felt alright - we were able get a proof-of-concept into testing and version 1.0 released to App Stores quickly without additional overhead.

We were rapidly added features to meet deadlines and as the codebase grew quickly it became 
difficult to navigate. We were writing code with avoidable bugs, and many of our
components had a ton of unnecessary null-check boilerplate. These issues were a result of a very small team hustling to
get a usable product out to customers in a reasonable timeframe.

However, these design decisions made at the start of the project were starting to slow us down.

## Vetting TypeScript

Our team had never worked with TypeScript before, so there were questions that needed to be answered:
- how will static types improve our codebase?
- will efficiency gains actually offset the time it takes to define types?
- how can we avoid needing to re-write all 10,000 existing LOC?
- how much code needs to be re-written to see a benefit?

## Migration approach

In order to answer the questions above, I built a small proof-of-concept on a feature branch which
included settings up tooling, devtools, and a few examples of how to use TypeScript in a mixed codebase
for my team to reference.

By working to set up the codebase for mixed `.js` and `.ts(x)` files, I learned that no massive refactor pull requests would be necessary - we
could migrate modules individually:
- The TypeScript language is designed to [elegently handle](https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html) mixed codebases
- We could write [type declaration files](https://www.typescriptlang.org/docs/handbook/2/type-declarations.html#dts-files) for existing JavaScript code that we weren't yet ready to migrate

### Guiding principles

Considering these learnings, I documented our TypeScript coding standards and migration plan for
my team to reference. 

At a high level, we decided that  all new code should be written in TypeScript and existing
JavaScript could should be migrated "as needed."

My team followed this process:
- When making small changes (e.g. a minor bugfix or a copy change) to an existing JS file, try changing the extension to `.tsx`. If no significant refactor is necessary, migrate the code to TS
- If business logic in a module you're working on changes significantly, re-write the module entirely
- When new TS code has dependencies on existing JS code, and refactoring the JS is out of scope for your task, write a declaration file for the existing JS


## Quick results

About 2 months after merging the pull-request that allowed us to use TypeScript in the code, I was
curious about how much code we had refactored and converted to TypeScript. To my surprise, we had
already converted 1/3 of our ~10k LOC to TS. Great work team!

This included most of the important parts of the codebase to set ourselves up for success. We placed
emphasis on first refactoring all of the "sources" of data (API modules, local storage interface, etc.),
which allowed all new TS code to be typed through every codepath.

After about 6 months, business requirements dictated that a sizeable chunk of our UI be re-designed.
This was a great opportunity to replace a lot of old JS code from the initial launch of the app
with more stable, easier to read TS code. The result was about 2/3 of our codebase was now written in TypeScript.

## Benefits

Using TypeScript means that errors are highlighted "compile-time" (okay, in static-analysis) rather than at
runtime. To take it a step further, the Visual Studio Code TS integration pointed out what would be runtime errors
_before even saving the file_ - this instant feedback meant that developers were writing better-quality code faster.

We knew this was a benefit for our developers' sanity, but I had underestimated how much impact it
would have for the team.

### Quicker iteration

Developers no longer needed to click through many files to understand what type a variable might be in each context, nor
wonder what properties an object might contain.

A simply VSCode shortcut or mouse-over displayed exactly what was in the object, and the TypeScript intellisense/auto-complete
(in VSCode at least) enabled us to write code significantly quicker than when using JavaScript.

We were producing better code with less opportunity for bugs - so tickets were getting kicked back from QA far less often.

### Reduced Risk of Deployment

Due to static-anlysis being performed during build pipelines, we were confident that the code would perform the same in
production to how it worked in development and QA environments.

We also found that deployment dependencies (e.g. changes to the API must be deployed before our client code) were easier to spot.
For example, it became common practice for reviewers to check the production API swagger documentation when changes to client API typings file were made.

