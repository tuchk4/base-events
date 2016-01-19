import events from 'events';

let _emitter = Symbol('emitter');

export default class Events {
  constructor() {
    this[_emitter] = new events.EventEmitter();
  }

  on(event, callback) {
    this[_emitter].on(event, callback);

    return () => {
      this[_emitter].removeListener(event, callback);
    };
  }

  once(event, callback) {
    this[_emitter].once(event, callback);
  }

  emit(event, params) {
    this[_emitter].emit(event, params);
  }
}
