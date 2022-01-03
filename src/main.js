import { showMainMenu } from './mainMenu.js';
import { makeReferenceLinks } from './makeReferenceLinks.js';
import { removeReferenceLinks } from './removeReferenceLinks.js';

removeReferenceLinks();
makeReferenceLinks('./src/mainMenu.css');

showMainMenu();


const mainMenuButton = document.getElementById('mainMenuButton');

mainMenuButton.addEventListener('click', () => {
    document.location.reload()
})