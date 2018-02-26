# AFL Developer Challenge

## Requisites
- Node.js
- NPM
- Yarn

## Getting Started

All JS, Sass and tests are in the `/src` folder (compiled CSS goes here too but is ignored by version conrol). The favicon, `index.html` and some image assets are in `/public`. Production builds are deployed to `/build`.

## Usage

To start a development build and server run: `yarn start`. A new tab will appear in your default browser, pointing to `localhost:3000`. The development build watches for any changes to `/src` and will re-compile JS and Sass, then hotload it into the browser.

To start the interactive test suite run: `yarn test`.

To compile a production build run: `yarn build`. This will dump an optimized build into `/build`. This folder can be uploaded and served statically.
