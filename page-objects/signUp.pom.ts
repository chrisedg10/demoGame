import { expect, type Locator, type Page } from '@playwright/test';

export class SignUp {
    readonly page: Page;
    readonly signUpHeader: Locator;
    readonly emailInput: Locator;
    readonly termsAndConditions: Locator;

    /* Redeem Bonus section */
    readonly promoCodeRdbtn: Locator;
    readonly noBonusRdbtn: Locator;

    /* Password section */
    readonly passwordInput: Locator;
    readonly reEnterPasswdInput: Locator;

    readonly createAcctBtn: Locator;

    /* Account confirmation */
    readonly successIcon: Locator;
    readonly notificationTitle: Locator;
    readonly viewProfileBtn: Locator;
    readonly browseGamesBtn: Locator;
  
    constructor(page: Page) {
      this.page = page;
      
      this.signUpHeader = page.locator('div[class*="page__header"]', { hasText: 'Sign up' });
      this.emailInput = page.locator('input[placeholder*="Email"]');
      this.termsAndConditions = page.locator('label[for*="terms_and_conditions"]');
      
      this.promoCodeRdbtn = page.locator('label[for="promo_code"]');
      this.noBonusRdbtn = page.locator('label[for="bonus-0"]');
      
      this.passwordInput = page.locator('input[placeholder="Password"]');
      this.reEnterPasswdInput = page.locator('input[placeholder="Reenter password"]');
      
      this.createAcctBtn = page.locator('button[type="submit"]');

      this.successIcon = page.locator('i[class="icon-success"]');
      this.notificationTitle = page.locator('h1[class="notification__title"]', { hasText: 'Congratulations!' });
      this.viewProfileBtn = page.locator('div[class="notification__buttons"]>a[class*="button--t1"]')
      this.browseGamesBtn = page.locator('a[class*="button--t4"]')
    }
  
    /* Load User Registration page */
    async loadSignUpPage() {
      await expect(this.signUpHeader).toBeVisible({timeout: 60000});
      await expect(this.emailInput).toBeVisible({timeout: 60000});
    }

    /* Enter new user data */
    async enterNewUserData() {
      await this.emailInput.fill("testCH117@test.com");
      await this.termsAndConditions.click();
        
      await expect(this.promoCodeRdbtn).toBeVisible({timeout: 60000});
      await expect(this.noBonusRdbtn).toBeVisible({timeout: 60000});

      await this.noBonusRdbtn.scrollIntoViewIfNeeded();
      await this.noBonusRdbtn.click();

      await this.passwordInput.scrollIntoViewIfNeeded();
      await this.passwordInput.fill("Prueba1234");
      await this.reEnterPasswdInput.fill("Prueba1234");

      await this.createAcctBtn.click();
    }

    async confirmUserCreation() {
      await expect(this.successIcon).toBeVisible({timeout: 60000});
      await expect(this.notificationTitle).toBeVisible({timeout: 60000});
      await expect(this.viewProfileBtn).toBeVisible({timeout: 60000});
      await expect(this.browseGamesBtn).toBeVisible({timeout: 60000});
      await this.viewProfileBtn.click()
    }
  }