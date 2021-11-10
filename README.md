# Capacitor Camera / Cordova File Plugin Sample Project

This project demonstrates an approach to retain access to the native [File Web API](https://developer.mozilla.org/en-US/docs/Web/API/File) when using the [cordova-file-plugin](https://github.com/apache/cordova-plugin-file).

## Details

Cordova plugins have the ability to 'clobber' a namespace under `window`. In this case, the cordova-plugin-file clobber `File`, which is an API provided by the browser. This sample project provides a solution when the user needs access to browsers's `File` API, while using the Cordova File Plugin. This is solution is based on a [Github comment](https://github.com/apache/cordova-plugin-file/issues/453#issuecomment-771689178) related to this issue.

## Instructions

To implement in your project:

1. In your index.html file, add the follow code as the first child of your body tag:

```html
<script type="text/javascript">window.OriginalFile = window.File;</script>
```

1. This creates a reference called OriginalFile that can be referenced in your Angular code.
2. Anywhere you need to use the `OriginalFile` object, you'll need add the following statement (preferrable just below your import statements):

```ts
declare var OriginalFile: any;
```

## Usage Example

To instantiate a new File:  

```ts
const file = new OriginalFile([blob], 'myNewImage.jpg', {type: 'image/jpeg'});
```

This could be passed into any method that's expecting a web `File` object
