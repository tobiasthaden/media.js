# Getting Started

Quick start guide for installing and configuring **Media.js**

## Installation

For most projects and especially if you need to customize your media player, you'll want to install Media.js via npm.

```sh
npm install mediajs
```

## Quickstart

**tl;dr**

You want to try Media.js or stick with the defaults?

Add an element with a `data-audio` attribute to your markup and initialize Media.js.

`<div data-video="video.mp4"></div>`

```js
import Media from "mediajs";

Media.watch();
```

## Configuration

Media.js is a highly customizable set of components to control your media files. You may pick some of the shipped components and/or extend our media player with your own components.

#### Build your Markup

Creating a new media player is simple adding an element that has a `data-attribute` to your markup.

```html
<div class="my-video" data-video="my-video.mp4"></div>
```

#### Use Media.js

If you don't provide a selector or element to the `watch()` method, Media.js is looking for any element with an `data-video` attribute.

In cases you want to add configurations or construct multiple media players you will be more specific.

```js
Media.watch(".my-video", options);
```

#### Available Options

By passing an configuration object you may register any [hooks](events) to control and extend Media.js.

You may also add controls to the [toolbar](toolbar).

```js
Media.watch(".my-video", {
  keyboard: true, // Enable keyboard support
  controls: [...], // Add controls to the toolbar
  events: {}, // Register any event listeners
});
```

#### Audio Player Support

Provide a `data-audio` attribute to build an audio player

`<div class="my-audio" data-audio="audio.mp3"></div>`.

```js
Media.listen(".my-audio", options);
```
