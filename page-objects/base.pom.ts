import { expect, type Locator, type Page } from '@playwright/test';

export class Base {
  readonly page: Page;

  /* Welcome modal elements */
  readonly welcomeModal: Locator;
  readonly closeModalBtn: Locator;

  /* Navbar elements */
  readonly signUpBtn: Locator;
  readonly signInBtn: Locator;
  readonly signInBtnHover: Locator;
  
  /* Main page elements */
  readonly mainSlider: Locator;

  /* Sidebar elements */
  readonly siteLogo: Locator;

  /* Game Items */
  readonly gameItems: Locator;

  constructor(page: Page) {
    this.page = page;
    
    this.welcomeModal = page.locator('div[class*="modal__content"]', { hasText: 'Welcome' });
    this.closeModalBtn = page.locator('button[class*="mfp-close"]');
    
    this.signUpBtn = page.locator('a[class*="registration"]', { hasText: 'Sign up' });
    this.signInBtn = page.locator('div[class*="button--login"]', { hasText: 'Sign in' });
    this.signInBtnHover = page.locator('a[class*="button--login"]');

    this.mainSlider = page.locator('div[class="slider-main"]')

    this.siteLogo = page.locator('aside[class*="sidebar"]>div[class*="logo"]');

    this.gameItems = page.locator('a[class="games-types__item-link"]>span')
  }

  /* Open browser to specified url */
  async goto() {
    await this.page.goto('https://demo.casino/');
  }

  /* Close modal function */
  async closeModal() {
    await expect(this.welcomeModal).toBeVisible({timeout: 60000});
    await this.closeModalBtn.click();
  }

  /* Load main page function */
  async loadMainPage() {
    await expect(this.signInBtn).toBeVisible({timeout: 60000});
    await expect(this.signUpBtn).toBeVisible({timeout: 60000});
    await expect(this.mainSlider).toBeVisible({timeout: 60000});
  }

  async loadMainPageSigned() {
    await expect(this.mainSlider).toBeVisible({timeout: 60000});
    
    /* Se coloco esta linea para que la ejecucion no se cierre repentinamente */
    await this.page.waitForTimeout(5000);
  }

  /* Navigate to Log In page */
  async moveTologInScreen() {
    await this.signInBtn.click();
    await this.signInBtnHover.click();
  }

  /* Navigate to Sign Up page */
  async moveToSignUpScreen() {
    await this.signUpBtn.click();
  }

  /* Navigate to home page */
  async returnToHomePage() {
    await this.siteLogo.click();
  }

  /* Select Game */
  async selectGameSection(gameSectionName: string) {
    let games = this.gameItems.all();

    for (const game of await games) {
      if(await game.textContent()===gameSectionName){
        /* Click if element with text found */
        await game.click();    
        break;   
      } 
    }
  }
}