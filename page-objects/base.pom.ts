import { expect, type Locator, type Page } from '@playwright/test';

export class Base {
  readonly page: Page;
  readonly signUpBtn: Locator;
  readonly signInBtn: Locator;
  readonly welcomeModal: Locator;
  readonly closeModalBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.welcomeModal = page.locator('div[class*="modal__content"]', { hasText: 'Welcome' });
    this.closeModalBtn = page.locator('button[class*="mfp-close"]');
    this.signUpBtn = page.locator('a[class*="registration"]', { hasText: 'Sign up' });
    this.signInBtn = page.locator('div[class*="button--login"]', { hasText: 'Sign in' });
  }

  async goto() {
    await this.page.goto('https://demo.casino/');
  }

  async loadMainPage() {
    await expect(this.signInBtn).toBeVisible({timeout: 60000});
    await expect(this.signUpBtn).toBeVisible({timeout: 60000});
  }

  async closeModal() {
    await expect(this.welcomeModal).toBeVisible({timeout: 60000});
    await this.closeModalBtn.click();
  }

  async moveToSignUpScreen() {
    await this.signUpBtn.click();
  }
}