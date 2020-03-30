# Helpers

## `Element.create`

Create a new HTML DOM Element

#### Parameters

- type `string`

- parameters `...Object` `...Function`

#### Return Value

`Element`

```js
  Element.create('div', attributes, callback);
```

#### Example

```js
  // Create a new "button" element with a type 
  // of "submit" and a class of "btn-primary".

  Element.create('button', {
      'type': 'submit',
      'class': 'btn-primary'
  });

  // Create a new "div" element and append it to a parent element.

  Element.create('div', element => parent.appendChild(element));

  // Create a new "button" with a class of "btn-primary", 
  // add an event listener and append it to a parent element.

  Element.create('button', { 'class' : 'btn-primary' }, element => {
      element.addEventListener('click', event => handle);
      parent.appendChild(element);
  });
```


## `Keyboard.transform`

Transform a `KeyboardEvent` into a [custom event](/guide/events/#available-events).

#### Parameters

- event `KeyboardEvent`

#### Return Value

`Event`

```js
  Keyboard.transform(event);
```

#### Example

```js
element.addEventListener('keydown', event => {
    element.dispatchEvent(Keyboard.transform(event));
});
```
