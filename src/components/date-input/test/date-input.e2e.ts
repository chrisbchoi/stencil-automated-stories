import { newE2EPage } from '@stencil/core/testing';

describe('date-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<date-input></date-input>');

    const element = await page.find('date-input');
    expect(element).toHaveClass('hydrated');
  });
});
