import { expect, type Locator, type Page } from '@playwright/test';

export class GameMainPage {
  readonly page: Page;

  readonly gameSlots: Locator;
  readonly runBtn: Locator;

  constructor(page: Page) {
    this.page = page;

    this.gameSlots = page.locator('div[class="games-item__img"]');
    this.runBtn = page.locator('div[class*="overlay--active"] span[class*="button--play"]');
  }

  /* Load main page function */
  async startGame(gameName: string) {
    let games = this.gameSlots.all();

    for (const game of await games) {
      if(await game.textContent()===gameName){
        /* Click if element with text found */
        await game.hover({ timeout: 5000 });
        await game.click(); 
        await expect(this.runBtn).toBeVisible({timeout: 60000});
        await this.runBtn.click();
        break;   
      } 
    }

    /* Se coloco esta linea para que la ejecucion no se cierre repentinamente */
    await this.page.waitForTimeout(5000);
  }
}