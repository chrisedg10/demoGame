import { test } from '@playwright/test';
import { Base } from '../page-objects/base.pom';
import { SignUp } from '../page-objects/signUp.pom'
import { UserProfile } from '../page-objects/userProfile.pom'
import { GameMainPage } from '../page-objects/gameMainPage.pom'
import { LogInScreen } from '../page-objects/logInScreen.pom'

test('Registrar nuevo usuario', async ({ page }) => {
  const base = new Base(page);
  const signUp = new SignUp(page);
  const userProfile = new UserProfile(page);
  const gameMainPage = new GameMainPage(page);

  await base.goto();
  await base.closeModal();
  await base.loadMainPage();
  await base.moveToSignUpScreen();
  
  await signUp.loadSignUpPage();
  /* Cambiar debidamente el correo del NUEVO USUARIO, caso contrario el caso de prueba sera fallido */
  await signUp.enterNewUserData("testCH226@test.com", "Prueba1234");
  await signUp.confirmUserCreation();

  await userProfile.loadProfilePage();

  await base.returnToHomePage();
  await base.loadMainPageSigned();
});

test('Iniciar Sesion', async ({ page }) => {
  const base = new Base(page);
  const gameMainPage = new GameMainPage(page);
  const logInScreen = new LogInScreen(page);

  await base.goto();
  await base.closeModal();
  await base.loadMainPage();
  await base.moveTologInScreen();

  await logInScreen.loadLogInPage();
  await logInScreen.enterCredentials("testCH225@test.com", "Prueba1234");

  await base.loadMainPageSigned();
  await base.selectGameSection("Popular");
  await gameMainPage.startGame("Hell Hot 40");
});