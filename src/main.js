import './style.css';
import { showMainMenu } from './mainMenu';

const mainMenuButton = document.getElementById('mainMenuButton');

mainMenuButton.addEventListener('click', () => {
    showMainMenu()
})