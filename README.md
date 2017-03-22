# Ga-Click

An alternative to embedding JavaScript in your HTML via `onclick` attributes when working with Google Analytics.

## Getting started

Clone this repository.

Add to and Edit the demo event objects in the `EVENTS` dictionary object in the ga-click.js file.

Each item in the EVENTS object has a Key which is a string that should be in camelCase, and a Value which is an object containing the following properties:

- Label: A string that describes the GA Event to be tracked.
- Action: A function that executes the corresponding GA Command.

Add a reference of your resultant script to your web page!

On each element you need to track add a `ga-click` attribute, and the Label of the event you intend that element to represent. E.g. I could add `ga-click='liked'` to my Like button.

Execute your web page.

You now have the power of Google Analytics without the headaches that inline JavaScript brings.

Enjoy!

Author(s)

- Ikechi Michael I.