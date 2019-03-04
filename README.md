# storybook-addon-contributors
Storybook Addon Contributors allow you to view the contributors information using the Storybook UI.

This is how Contributors look like:
![](docs/screenshot.png)

## Getting started
First, install the addon.
```
$ npm add @mixmaxhq/storybook-addon-contributors --dev
```

Add this line to your addons.js file (create this file inside your storybook config directory if needed).
```javascript
import '@mixmaxhq/storybook-addon-contributors/register';
```

Import the withContributors decorator to check your stories for contributors information.
```javascript
import { withContributors } from '@mixmaxhq/storybook-addon-contributors';

// should only be added once
// best place is in config.js
addDecorator(withContributors)
```

Here is an example of using Contributors with a React component.
```
Button.contributors = [
  {
    name: 'Andy Tran',
    url: 'https://github.com/andyhqtran',
  },
];
```
