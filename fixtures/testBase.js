import { test as base } from '@playwright/test';
import { AlertsPage } from '../pages/AlertsPage';
import { BrokenLinks } from '../pages/BrokenLinks';
import { Button } from '../pages/Button';
import { CheckBox } from '../pages/CheckBox';
import { Links } from '../pages/Links';
import { RadioButton } from '../pages/RadioButton';
import { TextBoxPage } from '../pages/TextBoxPage';
import { UploadDownloadPage } from '../pages/UploadDownloadPage';
import { WebTablesPage } from '../pages/webTablesPage';

export const test = base.extend({

  page: async ({ page }, use) => {
    await page.goto('/');
    await use(page);
  },

  alertsPage: async ({ page }, use) => {
    await use(new AlertsPage(page));
  },

  brokenLinksPage: async ({ page }, use) => {
    await use(new BrokenLinks(page));
  },

  buttonsPage: async ({ page }, use) => {
    await use(new Button(page));
  },

  checkBoxesPage: async ({ page }, use) => {
    await use(new CheckBox(page));
  },

  linksPage: async ({ page }, use) => {
    await use(new Links(page));
  },

  radioButtonsPage: async ({ page }, use) => {
    await use(new RadioButton(page));
  },

  textBoxesPage: async ({ page }, use) => {
    await use(new TextBoxPage(page));
  },

  uploadDownloadPage: async ({ page }, use) => {
    await use(new UploadDownloadPage(page));
  },

  webTablesPage: async ({ page }, use) => {
    await use(new WebTablesPage(page));
  }

});

export const expect = test.expect;