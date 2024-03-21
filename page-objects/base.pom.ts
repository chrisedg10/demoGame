import { expect, type Locator, type Page } from '@playwright/test';

export class Base {
  readonly page: Page;

  /* Welcome modal elements */
  readonly welcomeModal: Locator;
  readonly closeModalBtn: Locator;

  /* Main page elements */
  readonly signUpBtn: Locator;
  readonly signInBtn: Locator;
  readonly mainSlider: Locator;

  /* Sidebar elements */
  readonly siteLogo: Locator;

  constructor(page: Page) {
    this.page = page;
    
    this.welcomeModal = page.locator('div[class*="modal__content"]', { hasText: 'Welcome' });
    this.closeModalBtn = page.locator('button[class*="mfp-close"]');
    
    this.signUpBtn = page.locator('a[class*="registration"]', { hasText: 'Sign up' });
    this.signInBtn = page.locator('div[class*="button--login"]', { hasText: 'Sign in' });
    this.mainSlider = page.locator('div[class="slider-main"]')

    this.siteLogo = page.locator('aside[class*="sidebar"]>div[class*="logo"]');
  }

  async goto() {
    await this.page.goto('https://demo.casino/');
  }

  /* Load main page function */
  async loadMainPage() {
    await expect(this.signInBtn).toBeVisible({timeout: 60000});
    await expect(this.signUpBtn).toBeVisible({timeout: 60000});
    await expect(this.mainSlider).toBeVisible({timeout: 60000});
  }

  /* Close modal function */
  async closeModal() {
    await expect(this.welcomeModal).toBeVisible({timeout: 60000});
    await this.closeModalBtn.click();
  }

  /* Navigate to Sign Up page */
  async moveToSignUpScreen() {
    await this.signUpBtn.click();
  }

  /* Navigate to home page */
  async returnToHomePage() {
    await this.siteLogo.click();
  }
}