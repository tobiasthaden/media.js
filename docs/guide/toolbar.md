# Toolbar

Media.js ships with a toolbar you may customize.

## Available Controls

Media.js ships with a set of common controls you may pick some and add them to your toolbar.

```js
{
  controls: [
      new PlayButton(),
      new MuteButton(),
      new VolumeSlider(),
      new TimeDisplay(),
      new TimeSlider(),
      new FullscreenButton(),
  ],
}
```

## Add Your Own Controls

In some cases you'll extend the toolbar and add your own controls. A control extends the base `Control` class
and have to provide a `boot()` and a `makeElement()` method.

```js
export default class MyControlItem extends Control {
    boot() {
        // Here you may register your event listeners
        this.listen("click", event => {
            // Do something
        });
    }

    makeElement() {
        // Create the HTML Element that will be added to the toolbar.
        return Element.create("button", {
            class: "my-control-item",
        });
    }
}
```

Then simply add you controls to your configuration object.

```js
Media.watch(".my-video", {
    controls: [new PlayButton(), new MyControlItem(), new TimeSlider()],
});
```
