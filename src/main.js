import { showMainMenu } from './mainMenu.js';
import { makeReferenceLinks } from './makeReferenceLinks.js';
import { removeReferenceLinks } from './removeReferenceLinks.js';
import {loadModule} from './loader.js';

removeReferenceLinks();
makeReferenceLinks('./src/mainMenu.css');

loadModule(showMainMenu);

const mainMenuButton = document.getElementById('mainMenuButton');

mainMenuButton.addEventListener('click', () => {
    loadModule(showMainMenu);
});
