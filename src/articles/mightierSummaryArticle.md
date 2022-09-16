# My role at Mightier
As a senior full-stack engineer on a small team, I've had the opportunity to work
on a lot of cool projects.

My team is responsible delivering web and mobile applications to customers, as well
as implementing tools to empower other teams across the company.

---

##  Web and Mobile Applications

My team works closely with the product team to deliver applications for our customers. I've had
the opportunity to lead architectural and deployment efforts on a few projects.

### Mightier Parent - a React Native mobile app

Mightier Parent is a cross-platform mobile app for our customers to use to help 
track progress while using Mightier's game application. We built this using bare 
React Native as Expo was too limited for some of our use cases.


We've given the product and content teams full control over what content is 
displayed in the app using a hosted CMS (Strapi).


Ive lead architectural decisions and refactor efforts to keep the codebase easy 
to navigate and improve turnaround time on new features.

[Learn more about Mightier Parent](https://www.mightier.com/parent-app/)

---

## Developer Experience Initiatives
I've lead a number of initatives to help my team work better and deliver 
high-quality code to customers faster.

### Mightier Parent - TypeScript migration

Mightier Parent originally had all of its React code written in vanilla 
JavaScript. We quickly recognized that the lack of typing was causing significant 
development overhead and leading to avoidable bugs.

I lead the effort to implement TypeScript transpilation and allow for a smooth 
transition from JS to TS.

[Read more about how TypeScript helped our team](/articles/parent-app-typescript-migration)

### Wranging serverless infrastructure using CloudFormation

We've been implementing serverless infrastructure in order to reduce AWS costs and
set ourselves up for success as we scale. 

However, the benefits of serverless came at a price - infrastructure changes were all in the web UI with no commit history or code review.
It was difficult to find services, manage Lambda function code changes, and cleanly implement
permissions.

I advocated for and lead investigation efforts to explore tools like AWS CDK to make provisioning
serverless infrastructure much easier.

### React Native Over-The-Air Updates
Before releasing Mightier Parent, my team had only ever provided a web-interface for our customers.
Other teams were accustomed to the immediately deployment that the web provides, but the App-Store review
process meant that even small changes would take at least a day to make it to customers.

I investigated and lead the implementation for using [CodePush](https://github.com/microsoft/react-native-code-push) in our
application.

---

## Cross-Team tools
We operate with the paradigm that customer-experience, product, marketing, and
game developers should never rely on web-engineers to bring new content live.

### Content Management System
I worked on a system to feed dynamic content to our web and mobile app clients so
that content updates are decoupled from code changes.

We used [Strapi](https://strapi.io/), an open-source headless CMS, to allow other teams to fully manage content.
We served the assets over CloudFront to ensure quick loading times to clients.
