# Player

#### Instances

- Audio: `AudioPlayer` extends `AbstractPlayer`

- Video: `VideoPlayer` extends `AbstractPlayer` 

#### Parameters

- element `Element`
  
- options `Object` `null`

```js
  new Player.Audio(element, options);
```

## `dispatch`

Dispatch a player event.

#### Parameters

- event `Event`

#### Return Value

`void`

```js
  player.dispatch(event);
```

## `listen`

Handle a player event.

#### Parameters

- event `string`

- callback `Function`

#### Return Value

`void`

```js
  player.listen(event, callback);
```


## `enableKeyboard`

Enable keyboard support.

#### Return Value

`void`

```js
  player.enableKeyboard();
```

## `disableKeyboard`

Disable keyboard support.

#### Return Value

`void`

```js
  player.disableKeyboard();
```


## `switchMute`

Toggle the mute state.

#### Return Value

`void`

```js
  player.switchMute();
```

## `switchPlay`

Toggle the play state.

#### Return Value

`void`

```js
  player.switchPlay();
```

## `setTime`

Update the current time.

#### Parameters

- time `number`

#### Return Value

`void`

```js
  player.setTime(time);
```

## `incrementTime`

Increment the current time by 5 seconds.

#### Return Value

`void`

```js
  player.incrementTime();
```

## `decrementTime`

Decrement the current time by 5 seconds.

#### Return Value

`void`

```js
  player.decrementTime();
```

## `setVolume`

Update the current volume.

#### Parameters

- volume `number`

#### Return Value

`void`

```js
  player.setVolume(Volume);
```

## `incrementVolume`

Increment the current Volume.

#### Return Value

`void`

```js
  player.incrementVolume();
```

## `decrementVolume`

Decrement the current Volume.

#### Return Value

`void`

```js
  player.decrementVolume();
```
