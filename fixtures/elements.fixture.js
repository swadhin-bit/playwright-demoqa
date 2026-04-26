import { test as base } from '@playwright/test';
import { Button } from '../pages/Button';
import { CheckBox } from '../pages/CheckBox';
import { RadioButton } from '../pages/RadioButton';
import { TextBoxPage } from '../pages/TextBoxPage';
import { Links } from '../pages/Links';
import { WebTablesPage } from '../pages/webTablesPage';
import { BrokenLinks } from '../pages/BrokenLinks';

export const test = base.extend({

  buttonsPage: async ({ page }, use) => {
    await use(new Button(page));
  },

  brokenLinksPage: async ({ page }, use) => {
      await use(new BrokenLinks(page));
    },

  checkBoxesPage: async ({ page }, use) => {
    await use(new CheckBox(page));
  },

  radioButtonsPage: async ({ page }, use) => {
    await use(new RadioButton(page));
  },

  textBoxesPage: async ({ page }, use) => {
    await use(new TextBoxPage(page));
  },

  linksPage: async ({ page }, use) => {
    await use(new Links(page));
  },

  webTablesPage: async ({ page }, use) => {
    await use(new WebTablesPage(page));
  }

});

export const expect = test.expect;