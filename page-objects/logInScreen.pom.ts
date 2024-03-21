import { expect, type Locator, type Page } from '@playwright/test';

export class LogInScreen {
  readonly page: Page;

  /* Log in screen elements */
  readonly signInHeader: Locator;

  readonly usernameField: Locator;
  readonly passwordField: Locator;
  readonly signInBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    
    this.signInHeader = page.locator('h2[class*="page__title"]');

    this.usernameField = page.locator('input[name*="UserLogin[username]"]');
    this.passwordField = page.locator('input[name*="UserLogin[password]"]');

    this.signInBtn = page.locator('button[type="submit"]');
  }

  /* Load main page function */
  async loadLogInPage() {
    await expect(this.signInHeader).toBeVisible({timeout: 60000});

    await expect(this.usernameField).toBeVisible({timeout: 60000});
    await expect(this.passwordField).toBeVisible({timeout: 60000});
  }

  async enterCredentials(username: string, password: string) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.signInBtn.click();
  }
}