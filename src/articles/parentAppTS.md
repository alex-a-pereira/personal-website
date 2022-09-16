# Mightier Parent TypeScript Migration

## Problem Statement
When the codebase for Mightier Parent was created, the decision was made to use vanilla JavaScript for our React code. For a few months this decision felt alright - we were able get a proof-of-concept into testing and version 1.0 released to App Stores quickly without additional overhead.

We were rapidly added features to meet deadlines and as the codebase grew quickly it became difficult to navigate. We were writing code with avoidable bugs, and it seemed like every component had a ton of unnecessary null-checks.

## Vetting TypeScript

Our team had never worked with TypeScript before