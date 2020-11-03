# Duplicate state to preserve encapsulation?

I have a quandry about ReactJS that I am exploring in this repo. I have a form that I want to have live update a preview component, creating a truly WYSIWYG interface. I create the form first, where I have already set up a state object to manage all the form variables, pretty typical approach.

When it comes to live updating the preview, I am faced with how to communicate the update to the preview. The most react-y approach is to pass the object from the form in an event to the preview's props. The other react-y approach is to hoist state upwards, thus making the live updating data available to the preview via the parent of both the preview and form. State must be held in the parent for this to work properly.

However, this leads to an issue doing this with forms. Do I actually remove the state management from the form to put it in the parent? Or do I duplicate the state to preserve the encapsulation of the form? I think there are several factors that affect this decision:
- How easy is it for errors and bugs to creep in?
- How performant is it?
- How complex is the form state management?
- How does this change the nature of the form interface?
- How appropriate is it to change a form's implementation to make it work in a particular context?
- How portable is the code afterwards?

In this very simple example, there's probably not a lot in it. But I found this problem whilst dealing with a form (okay I'll admit, I wrote it!) with 30+ fields of different types, with complex create/update routines, and a preview built from the code that builds the static site! In that situation, legibility, flexibility and performance can count. Forms, though, tend to be very unlikely to be reused; A login form is about the most likely to be reused. But after that, it's almost always a rewrite, and the only reuse might be input wrapper components or behaviours.

# How this code is organised

I have split out the demonstration across PRs/branches. Master is the base implementation from which I make changes. Please see the PR's for explanations of the different approaches. The data models a really simple movie list, but I represent the objects passed around the app as _Entities_.

There are 5 components
- **App** - Top level of the app, with responsibility for routing
- **EntitySelector** - A component sitting outside routing to allow you to select entities
- **EntityEditor** - Parent for the form and preview panes, I want this to remain non-stateful
- **EntityForm** - The form pane
- **EntityPreview** - The preview pane

# How to run

This is a create-react-app, so to get kicked off:
```
npm install
npm start
```

On the master branch you will start off with just the selector list. This will allow you to view data by clicking on items on the selector list, but it will feel broken because changing the form data will not do anything.

Warning: I am not running dependabot on this repo. Please be careful when you install this example. Run `npm audit` to be sure there are no critical vulnerabilities before running.

