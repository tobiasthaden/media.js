# Events

Media.js emits events from the `Player` object that allow you to track and control your media player.
You may listen for events by the `listen()` helper:

```js
player.listen("click", event => {
    //
});
```

## Available Events

In addition to any kind of **HTML DOM Event**, Media.js also emits the native **HTML Audio/Video Event** from the list below:

| Event          | Description                                                                             |
| :------------- | :-------------------------------------------------------------------------------------- |
| abort          | Fires when the loading of an audio/video is aborted                                     |
| canplay        | Fires when the browser can start playing the audio/video                                |
| canplaythrough | Fires when the browser can play through the audio/video without stopping for buffering  |
| durationchange | Fires when the duration of the audio/video is changed                                   |
| emptied        | Fires when the current playlist is empty                                                |
| ended          | Fires when the current playlist is ended                                                |
| error          | Fires when an error occurred during the loading of an audio/video                       |
| loadeddata     | Fires when the browser has loaded the current frame of the audio/video                  |
| loadedmetadata | Fires when the browser has loaded meta data for the audio/video                         |
| loadstart      | Fires when the browser starts looking for the audio/video                               |
| pause          | Fires when the audio/video has been paused                                              |
| play           | Fires when the audio/video has been started or is no longer paused                      |
| playing        | Fires when the audio/video is playing after having been paused or stopped for buffering |
| progress       | Fires when the browser is downloading the audio/video                                   |
| ratechange     | Fires when the playing speed of the audio/video is changed                              |
| seeked         | Fires when the user is finished moving/skipping to a new position in the audio/video    |
| seeking        | Fires when the user starts moving/skipping to a new position in the audio/video         |
| stalled        | Fires when the browser is trying to get media data, but data is not available           |
| suspend        | Fires when the browser is intentionally not getting media data                          |
| timeupdate     | Fires when the current playback position has changed                                    |
| volumechange   | Fires when the volume has been changed                                                  |
| waiting        | Fires when the video stops because it needs to buffer the next frame                    |

#### Defaults

By default, Media.js handles the most common events out of the box:

```js
{
  click: event => this.switchPlay(),
  "key:m": event => this.switchMute(),
  "key:f": event => this.fullscreen(),
  "key:space": event => this.switchPlay(),
  "key:right": event => this.incrementTime(),
  "key:left": event => this.decrementTime(),
  "key:up": event => this.incrementVolume(),
  "key:down": event => this.decrementVolume(),
}
```

## Keyboard Events

Media.js emits an event – `key:KEYCODE` – if any key was pressed.

```js
{
    player.listen("key:65", event => console.log("The 'a' key was pressed"));
}
```

#### Keyboard aliases

In addition through the `key:KEYCODE` events, Media.js emits aliased events for some special keys.

| Event      |    Key     | Description                   |
| :--------- | :--------: | :---------------------------- |
| key:esc    |   `esc`    | Fires if the key was pressed  |
| key:space  | `spacebar` | Fires if the key was pressed. |
| key:left   |    `←`     | Fires if the key was pressed. |
| key:up     |    `↑`     | Fires if the key was pressed. |
| key:right  |    `→`     | Fires if the key was pressed. |
| key:down   |    `↓`     | Fires if the key was pressed. |
| key:zero   |    `0`     | Fires if the key was pressed. |
| key:f      |    `f`     | Fires if the key was pressed. |
| key:j      |    `j`     | Fires if the key was pressed. |
| key:k      |    `k`     | Fires if the key was pressed. |
| key:l      |    `l`     | Fires if the key was pressed. |
| key:m      |    `m`     | Fires if the key was pressed. |
| key:comma  |    `,`     | Fires if the key was pressed. |
| key:period |    `.`     | Fires if the key was pressed. |
