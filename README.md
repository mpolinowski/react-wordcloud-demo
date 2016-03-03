# react-wordcloud-demo

[![Build Status](https://travis-ci.com/Purii/react-wordcloud-demo.svg?token=qdXLSA5Q7qrhqsnmh1sw&branch=master)](https://travis-ci.com/Purii/react-wordcloud-demo)
![Dependencies](https://img.shields.io/david/purii/react-wordcloud-demo.svg?style=flat)
![devDependencies](https://img.shields.io/david/dev/purii/react-wordcloud-demo.svg?style=flat)

**NOTE: This component is not published. It is just for demo purposes.**

![](https://raw.github.com/Purii/react-wordcloud-demo/master/assets/initialState.png)
![](https://raw.github.com/Purii/react-wordcloud-demo/master/assets/selectedState.png)

## Premise
* The component should be usable within an existing application. No routing needed.
* The data is already available. No fetching mechanism needed.
* The component should be distributable as `commonjs`, `umd` and `es6-module`.

## Installation
Be sure to use the latest version of node.js and npm.
*Note: Currently the component is not published via npm.*

1. Install: `npm i --save react-wordcloud`
1. Install peerDependencies, which are declarated in the `package.json`

## Development & example
To develop the component it is recommend to use the example.
1. Install dependencies of component and example: `npm i` inside `/` and `/example`
1. Start webpack-dev-server inside `/example`. This will bundle the component directly from the sources as `commonjs`: `npm start`
1. Open browser: [http://localhost:8080/](http://localhost:8080/)

### Structure
* `/components:`
  * Individual components with isolated markup
  * Could contain each other
  * Rarely have their own state. Better to write as functional components

* `/utils:`
  * Functions which are used by some components
  * Could easily be tested

### Dependencies
Have a look at the `package.json`.

### Test
1. Install dependencies: `npm i`
1. Run tests: `npm test`

## Build
### ..for publishing
1. Install dependencies: `npm i`
1. Build bundles for `umd`, `commonjs` and `es6-module`: `npm run bundle`
1. The css file will be located in `/dist/wordcloud.min.css`
1. Note the peerDependencies

### ..not and use sources instead
It is possible to use the sources directly and bundle them with the application itself. Just copy the contents of `/src`.


## Props

### WordCloud
| Prop  | Default | Type | Description |
| :------------ | :---------------:| :---------------:| ---------------|
| fontName | `Helvetica Neue` | `string` | Fontname used for the Cloud component |
| fontSizes | `[13, 16, 20, 26, 35, 49]` | `int[]` | Available fontsizes for the Cloud component |
| height | `400` | `int` | Height of component |
| topics | `[]` | `object[]` | Content of `topics.json` |
| width | `400` | `int` | Width of component |


### Cloud
| Prop  | Default | Type | Description |
| :------------ | :---------------:| :---------------:| ---------------|
| fontName | - | `string` | Fontname used for the Cloud component |
| fontSizes | - | `int[]` | Available fontsizes for the Cloud component |
| height | - | `int` | Height of component |
| onSelectTopic | - | `function` | Eventhandler |
| selectedTopic | - | `object` | Selected item object |
| topics | - | `object[]` | Content of `topics.json` |
| width | - | `int` | Width of component |



### Sidebar
| Prop  | Default | Type | Description |
| :------------ | :---------------:| :---------------:| ---------------|
| topic | `null` | `object` | Topic object |
