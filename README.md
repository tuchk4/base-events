# Base events

Provides easy way to subscribe and emit events. Super light component

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

manager.on('component.add', ({ component }) => { 
 // ....
});
```

### Available methods

- `on(event, callback)` - subscribe for event. Returns **unsubscribe** function
- `once(event, callback)` - subscribe for event. Will be emitted only one time
- `emit(event, arguments)` - trigger event with provided arguments


### Community
You are always welcome for ideas and pull requests :)


### TODO

- [ ] Event keys as patterns. If you are interested in this - please comment here https://github.com/tuchk4/base-events/issues/1

```js
const events = new BaseEvents();

events.on('a', () => { ... });
events.on('a.*', () => { ... });
events.on('a.b.c', () => { ... });
events.on('a.*.c', () => { ... });


events.emit('a', params); // available listeners: a
events.emit('a.b.c', params); // available listeners: a.* / a.b.c / a.*.c
events.emit('a.B.c', params); // available listeners: a.*.c

events.emit('x.y.z', params); // no listeners
events.emit('a', params);  // available listeners: a
```
