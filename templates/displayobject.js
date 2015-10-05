/**
 * {%=o.description%}
 *
 * @exports {%=o.exports%}
 * @extends {%=o.extends%}
 */
{% if (o.extendpixi) { %}
import {{%=o.extends%}} from 'pixi.js';
{% } else { %}
import {%=o.extends%} from '../{%=o.extends%}/{%=o.extends%}.js';
{% } %}

export default class {%=o.exports%} extends {%=o.extends%} {

  constructor(...args) {
    super(...args);
  }
  {% for(var i = 0; i < o.functions.length; i++) { %}
  {%= o.functions[i] %}() {

  }
  {% } %}
}
