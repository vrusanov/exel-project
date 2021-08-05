import {$} from '@core/dom';

export class Exel {
  constructor(selector, options) {
    this.$el = $(selector);
    this.components = options.components || [];
  }
  getRoot() {
    const $root = $.create('div', 'exel');

    this.components = this.components.map((Component) => {
      // const el = document.createElement('div');
      // el.classList.add(Component.className);
      // console.log(el);
      const el = $.create('div', Component.className);
      const componets = new Component(el);
      el.html(componets.toHTML());
      $root.append(el);
      // console.log(componets);
      return componets;
    });
    return $root;
  }

  render() {
    this.$el.append(this.getRoot());

    this.components.forEach((component) => component.init())
  }
}
