# Control

## `boot`

Boot the control and register any event listeners.

#### Return Value

`void`

```js
  control.boot();
```

## `makeElement`

Create a new HTML DOM Element.

#### Return Value

`Element`

```js
  control.makeElement();
```

## `listen`

Handle events.

#### Parameters

- event `string`, `Event`

- callback `Function`

#### Return Value

`void`

```js
  control.listen(event, callback);
```

## `updateCssClass`

Update the elements class attribute.

#### Parameters

- add `string`

- remove `string`

#### Return Value

`void`

```js
  control.updateCssClass(add, remove);
```
