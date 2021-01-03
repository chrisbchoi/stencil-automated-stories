import { Component, Host, h, Prop, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'date-input',
  styleUrl: 'date-input.css'
})
export class DateInput {

  @Prop() dateInputId: string;
  @Prop({ mutable: true }) value: string;
  @Prop() label: string;
  @Prop() isDisabled: boolean;
  @Prop() name: string;

  @Event() dateAdded: EventEmitter<string>;

  dateAddedHandler(event) {

    this.value = event.target ? event.target.value : null;
    //this.dateAdded.emit(this.value);
    this.value = this.value.replace(/\D/g, "")
      .split(/(..)/)
      .filter(s => s.length > 0)
      .reduce((t, v, i, a) => t + v + (i > 1 || i == a.length - 1 ? '' : '/'), '');
  }

  render() {
    return (
      <Host>
        <div class="wrapper">
          <label
            htmlFor={this.dateInputId}
            class="input-label"
            aria-label={this.label}
          >{this.label}
          </label>

          <input
            class="input-text-box"
            type="text"
            id={this.dateInputId}
            aria-id={this.dateInputId}
            disabled={this.isDisabled}
            placeholder="DD/MM/YYYY"
            onKeyUp={this.dateAddedHandler}
            name={this.name}
            value={this.value}
            maxlength="10"
          >
          </input>
        </div>
      </Host>
    );
  }

}
