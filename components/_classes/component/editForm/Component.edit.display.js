"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* eslint-disable max-len */
var _default = [{
  weight: 0,
  type: 'textfield',
  input: true,
  key: 'label',
  label: 'Label',
  placeholder: 'Field Label',
  tooltip: 'The label for this field that will appear next to it.',
  validate: {
    required: true
  }
}, {
  weight: 100,
  type: 'textfield',
  input: true,
  key: 'placeholder',
  label: 'Placeholder',
  placeholder: 'Placeholder',
  tooltip: 'The placeholder text that will appear when this field is empty.'
}, {
  weight: 100,
  type: 'textfield',
  input: true,
  key: 'sChema.i18nPlaceholder.zh',
  label: '中文placeholder',
  placeholder: '中文placeholder',
  tooltip: 'The 中文placeholder text that will appear when this field is empty.'
}, {
  weight: 600,
  type: 'textfield',
  input: true,
  key: 'tabindex',
  label: 'Tab Index',
  placeholder: '0',
  tooltip: 'Sets the tabindex attribute of this component to override the tab order of the form. See the <a href=\'https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex\'>MDN documentation</a> on tabindex for more information.'
}, {
  weight: 1200,
  type: 'checkbox',
  label: 'Hide Label',
  tooltip: 'Hide the label (title, if no label) of this component. This allows you to show the label in the form builder, but not when it is rendered.',
  key: 'hideLabel',
  input: true
}, {
  weight: 1400,
  type: 'checkbox',
  label: 'Disabled',
  tooltip: 'Disable the form input.',
  key: 'disabled',
  input: true
}];
/* eslint-enable max-len */

exports.default = _default;