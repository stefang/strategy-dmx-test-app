## Weirdnesses

Because node serialport doesn't like webpack (AT ALL) I've used react-app-rewired to allow me to mark serialport as an external. You then need to include it in the index.html as a global variable on window which the strategy-dmx then looks for to set up the DMX / Serial Port connection

`<script>window.DMX = require('dmx')</script>`

This app only works in Electron, you cannot access the serial port from a web browser. The DMX library does work on the command line however, if that help you sanity check your dmx interface is working correctly.

## Available Scripts

In the project directory, you can run:

### `npm install`
### `npm start`

to launch the electron app.