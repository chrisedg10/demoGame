import { expect, type Locator, type Page } from '@playwright/test';

export class SignUp {
    readonly page: Page;
    readonly signUpHeader: Locator;
    readonly emailInput: Locator;

    /* Redeem Bonus section */
    readonly promoCodeRdbtn: Locator
    readonly noBonusRdbtn: Locator
  
    constructor(page: Page) {
      this.page = page;
      this.signUpHeader = page.locator('div[class*="page__header"]', { hasText: 'Sign up' });
      this.emailInput = page.locator('input[placeholder*="Email"]');
      this.promoCodeRdbtn = page.locator('input[id="promo_code"]');
      this.noBonusRdbtn = page.locator('input[id="bonus-0"]');
    }
  
    async loadSignUpPage() {
      await expect(this.signUpHeader).toBeVisible({timeout: 60000});
      await expect(this.emailInput).toBeVisible({timeout: 60000});
    }

    async enterNewUserData() {
        await this.emailInput.fill("ceh.edgardo10+xyz01@gmail.com");
        
        await expect(this.promoCodeRdbtn).toBeVisible({timeout: 60000});
        await expect(this.noBonusRdbtn).toBeVisible({timeout: 60000});

        await this.noBonusRdbtn.click();
    }
  }