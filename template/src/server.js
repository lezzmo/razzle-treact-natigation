/**
 * Razzle React Native Web Example
 * https://github.com/jaredpalmer/razzle
 *
 * Generated with the Lezzmo Razzle Treact Natigation template
 * https://github.com/lezzmo/razzle-treact-natigation
 * 
 * This file will only be run by Razzle.
 *
 * @format
 */

import App from './App';

import express from 'express';
import ReactDOMServer from 'react-dom/server';
import { AppRegistry } from 'react-native';

import handleServerRequest from './serverRequest';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();

server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res) => {
    // register the app
    AppRegistry.registerComponent('App', () => App);

    // prerender the app
    const { element, getStyleElement } = AppRegistry.getApplication('App');
    // handle the request and render the html
    const html = ReactDOMServer.renderToString(handleServerRequest(req.url, element));
    // then the styles
    const css = ReactDOMServer.renderToStaticMarkup(getStyleElement());

    res.send(
      `<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet='utf-8' />
        <title>Welcome to Razzle</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${css}
    </head>
    <body>
        <div id="root">${html}</div>
  ${
          process.env.NODE_ENV === 'production'
            ? `<script src="${assets.client.js}" defer></script>`
            : `<script src="${assets.client.js}" defer crossorigin></script>`
        }
    </body>
</html>`
    );
  });

export default server;
