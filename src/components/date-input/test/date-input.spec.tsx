import { newSpecPage } from '@stencil/core/testing';
import { DateInput } from '../date-input';

describe('date-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DateInput],
      html: `<date-input></date-input>`,
    });
    expect(page.root).toEqualHtml(`
      <date-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </date-input>
    `);
  });
});
