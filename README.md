# Base events

Provide easy way to subscribe and fire events. Super light component

`npm install --save base-events`
 
### How to use

```js
import BaseEvents from 'base-events';

const events = new BaseEvents();

events.on('a.b.c', () => {
  console.log('a.b.c fired');
});

events.once('x.y.z', () => {
  console.log('x.y.z fired');
});

events.emit('a.b.c');
events.emit('x.y.z');

events.emit('x.y.z'); // will not emit x.y.z for second time


const off = events.on('a', () => {
  // ....
});

off(); // unsubscribe listener
```

### Extends

```js
import BaseEvents from 'base-events';

class Manager extends BaseEvents {
  constructor() {
    super();
  }
  
  add(component) {
    // ...
    this.emit('component.add', {
      component
    });
  }
}

const manager = new Manager();

manager.on('component.add', () => {
 // ....
});
```

### Available methods

- `on(event, callback)` - subscribe for event. Returns **unsubscribe** function
- `once(event, callback)` - subscribe for event. Will be emitted only one time
- `emit(event, arguments)` - trigger event with provided arguments


### Community
You are always welcome for ideas and pull requests :)
