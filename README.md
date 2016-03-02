# react-demo-wordcloud

[![Build Status](https://travis-ci.com/Purii/react-demo-wordcloud.svg?token=qdXLSA5Q7qrhqsnmh1sw&branch=master)](https://travis-ci.com/Purii/react-demo-wordcloud)
![Dependencies](https://img.shields.io/david/purii/wordcloud.svg?style=flat)
![devDependencies](https://img.shields.io/david/dev/purii/wordcloud.svg?style=flat)

## Premise
* The components should be usable in an existing application. No routing needed.
* The data is already available. No fetching mechanism needed. Fetching mechanism uses `fetch` with `Promise, which isn't supported by IE.
* Choose a font for demo purposes.

## Installation
Be sure to use the latest version of node.js with npm.

1. Install dependencies: `npm i`
1. Start webpack-dev-server: `npm start`
1. Open browser: [http://localhost:8080/](http://localhost:8080/)

## Build for production
1. Install dependencies: `npm i`
1. Build bundle: `npm run build`
1. The bundle as well as other static files are located inside `dist/

## Dependencies
Have a look at the `package.json`.

## Outlook
* The components could be distributed as separated modules through npm.

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
