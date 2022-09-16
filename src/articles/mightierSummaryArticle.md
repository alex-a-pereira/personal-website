# My role at Mightier
As a senior full-stack engineer on a small team, I've had the opportunity to work on a lot of cool projects.

My team is responsible delivering web and mobile applications to customers, as well as implementing tools to empower other teams across the company.

##  Web and Mobile Applications

My team works closely with the product team to deliver applications for our customers.

I've had the opportunity to lead architectural and deployment efforts on a few projects.

### Mightier Parent - a React Native mobile app

Mightier Parent is a cross-platform mobile app for our customers to use to help track progress while using Mightier's game application. We built this using bare React Native as Expo was too limited for some of our use cases.

```js
console.log('hello!')
for (let i = 1; i < 15; i++) {
  console.log('helllllo')
}
```

`another-piece-of-code`

We've given the product and content teams full control over what content is displayed in the app using a hosted CMS (Strapi).

- item 1
- item 2


Ive lead architectural decisions and refactor efforts to keep the codebase easy to navigate and improve ~turnaround~ time on new features.

[Learn more about Mightier Parent](/typescript)

## Developer Experience Initiatives
I've lead a number of initatives to help my team work better and deliver high-quality code to customers faster.

### Mightier Parent - TypeScript migration

Mightier Parent originally had all of its React code written in vanilla JavaScript. We quickly recognized that the lack of typing was causing significant development overhead and leading to avoidable bugs.

I lead the effort to implement TypeScript transpilation and allow for a smooth transition from JS to TS.

Read more about how TypeScript helped our team

### Wranging serverless infrastructure using CloudFormation

We've been implementing serverless infrastructure in order to reduce AWS costs and set ourselves up for success as we scale. However, the benefits of serverless come at a price - infrastructure changes were all in the web UI with no commit history or code review. It was difficult to find services, manage Lambda function code changes, and cleanly implement permissions.

### React Native Over-The-Air Updates
Lorem Lorem ex qui officia veniam qui et sit velit tempor ipsum id et sit. Anim culpa minim reprehenderit incididunt ut ut elit quis adipisicing enim excepteur deserunt Lorem in. Veniam irure labore commodo est exercitation do magna dolor incididunt eiusmod nostrud. Nulla sunt dolor nisi enim occaecat consectetur minim eu anim ullamco id nulla est. Lorem nisi consequat adipisicing anim nisi id esse aute.

## Cross-Team tools
We operate with the paradigm that customer-experience, product, marketing, and game developers should never rely on web-engineers to bring new content live.

### Content Management System
I worked on a system to feed dynamic content to our web and mobile app clients so that content updates are decoupled from code changes.

We used Strapi, and open-source CMS, and served the content over CloudFront to ensure quick loading times to clients.
