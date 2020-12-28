import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'date-input',
  styleUrl: 'date-input.css',
  shadow: true,
})
export class DateInput {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
