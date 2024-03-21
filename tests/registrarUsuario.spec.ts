import { test, expect } from '@playwright/test';
import { Base } from '../page-objects/base.pom';
import { SignUp } from '../page-objects/signUp.pom'

test('Cargando pagina principal', async ({ page }) => {
  const base = new Base(page);
  const signUp = new SignUp(page);

  await base.goto();
  await base.closeModal();
  await base.loadMainPage();
  await base.moveToSignUpScreen();
  
  await signUp.loadSignUpPage();
  await signUp.enterNewUserData();
});