import {capitalize} from '@core/utils';

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('No $root provided for DomListener');
    }
    this.$root = $root;
    this.listeners = listeners;
  }

  initDomListeners() {
    this.listeners.forEach((listener) => {
      const method = getEventName(listener)
      const name = this.name || '';

      if (!this[method]) {
        throw new Error(`Method ${method} is not implement in ${name} Components `)
      }

      this.method = this[method].bind(this);
      this.$root.on(listener, this[method])
    });
  }

  removeDomListeners() {
    this.listeners.forEach((listener) => {
      const method = getEventName(listener);
      this.$root.off(listener, this[method])
    })
  }
}

function getEventName(eventName) {
  return 'on' + capitalize(eventName);
}
