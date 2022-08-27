# Udemy Project | Typescript: The Complete Developer's Guide

Custom Front-End Framework from scratch has similar functionality to ReactJS and AngularJS. The project's main focus was to learn more about Design Patterns, Composition, Inheritance, and the proper structure of classes and interfaces.

#### Inpiration comes from Marionette JS & BackBone JS

##### Similar Implementation: [Class Views](https://marionettejs.com/docs/master/marionette.view.html)

```
import _ from 'underscore';
import { View } from 'backbone.marionette';

const MyView = View.extend({
  template: _.template(`
    <div id="first-region"></div>
    <div id="second-region"></div>
    <div id="third-region"></div>
  `),
  regions: {
    firstRegion: '#first-region',
    secondRegion: '#second-region'
  }
});
```

#### Notes

**Model Classes:** Handle data, used to represent Users, Blog Posts, Images, etc

**View Classes:** Handle HTML and events caused by the user (like clicks)

#### Run Code

```
yarn install

yarn start
```

`yarn start` uses concurrently to run both the API and UI simultaneously

Follows RESTful conventions

**Serialize** --> convert data from an object into some save-able format (json)

**Deserialize** --> put data on an object using some previously saved data (json)

In Typescript a string can be a type and all object keys are strings
