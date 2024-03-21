import { test, expect } from '@playwright/test';
import { Base } from '../page-objects/base.pom';
import { SignUp } from '../page-objects/signUp.pom'
import { UserProfile } from '../page-objects/userProfile.pom'

test('Cargando pagina principal', async ({ page }) => {
  const base = new Base(page);
  const signUp = new SignUp(page);
  const userProfile = new UserProfile(page);

  await base.goto();
  await base.closeModal();
  await base.loadMainPage();
  await base.moveToSignUpScreen();
  
  await signUp.loadSignUpPage();
  await signUp.enterNewUserData("testCH220@test.com", "Prueba1234");
  await signUp.confirmUserCreation();

  await userProfile.loadProfilePage();

  await base.returnToHomePage();
  await base.loadMainPageSigned();
});