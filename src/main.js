import './style.css';
import { showMainMenu } from './mainMenu';

showMainMenu()


const mainMenuButton = document.getElementById('mainMenuButton');

mainMenuButton.addEventListener('click', () => {
    showMainMenu()
})