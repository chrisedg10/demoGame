import { expect, type Locator, type Page } from '@playwright/test';

export class UserProfile {
  readonly page: Page;

  /* Profile screen elements */
  readonly myProfileHeader: Locator;
  readonly profileIcon: Locator;
  readonly logoutBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    
    this.myProfileHeader = page.locator('h1[class*="page__title"]', { hasText: 'My profile' });
    this.profileIcon = page.locator('div[class*="form-avatar__img"]');
    this.logoutBtn = page.locator('a[class="profile__logout"]>i');
  }

  /* Load main page function */
  async loadProfilePage() {
    await expect(this.myProfileHeader).toBeVisible({timeout: 60000});
    await expect(this.profileIcon).toBeVisible({timeout: 60000});
    await expect(this.logoutBtn).toBeVisible({timeout: 60000});
  }
}