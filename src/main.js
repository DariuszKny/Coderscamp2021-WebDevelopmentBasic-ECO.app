import { showMainMenu } from './mainMenu.js';
import { makeReferenceLinks } from './makeReferenceLinks.js';
import { removeReferenceLinks } from './removeReferenceLinks.js';

window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
};

removeReferenceLinks();
makeReferenceLinks('./src/mainMenu.css');

showMainMenu();

const mainMenuButton = document.getElementById('mainMenuButton');

mainMenuButton.addEventListener('click', () => {
  document.location.reload();
});
