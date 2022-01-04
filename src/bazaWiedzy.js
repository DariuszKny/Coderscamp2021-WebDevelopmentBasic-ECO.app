import { makeReferenceLinks } from './makeReferenceLinks.js';
import { removeReferenceLinks } from './removeReferenceLinks.js';



export function showBazaWiedzy(){
    removeReferenceLinks();
    makeReferenceLinks('./src/bazaWiedzy.css');
    
    document.querySelector('#app').innerHTML = `
<div class="carousel">
        <div class="carousel-buttons ">
            <button class="carousel-button carousel-button_previous">
                <span class="fas fa-chevron-circle-left"></span>
            </button>
            <button class="carousel-button carousel-button_next">
                <span class="fas fa-chevron-circle-right"></span>
            </button>
        </div>
        <div class="slides">
            <div class="slide">
                <div class="content-1">
                    <div class="text-container text-1_1">
                        <p>Codziennie każdy z nas produkuje niewyobrażalną ilość odpadów. Z danych zebranych przez Bank Światowy wynika, że w 2020 roku było to średnio 800 gramów śmieci w przypadku jednej osoby. Niektórzy produkują ich aż 5 kilogramów w ciągu dnia. Jeśli nie zmienimy nawyków, w 2030 roku będziemy potrzebowali więcej niż 
                        dwóch planet do przetrwania. Jak długo rozkładają się śmieci? Co możemy zmienić w tym zakresie?</p>
                    </div>
                    <div class="text-container text-1_2">
                        <ul>
                            <li>Unikać niepotrzebnych opakowań</li>
                            <li>Unikać artykułów jednorazowych</li>
                            <li>Wykorzystywać produkty ponownie.Podarować im w ten sposób nowe życie</li>
                            <li>Oszczędzać papier (wszystkie kartki, zanim wyrzucisz, zapisz po
                                obydwu stronach)</li>
                        </ul> 
                    </div>
                    <div class="container_1" >
                        <div class="text-container text-1_3">
                            <h4>Kto produkuje najwięcej śmieci?</h4>
                            <p>Liczba produkowanych odpadów wciąż rośnie. Szacuje się, że w Europie<br> przeciętny człowiek rocznie produkuje ich 486 kg. Oto negatywne przykłady<br> Państw na naszym kontynencie (dane z 2020 roku):</p>
                            <ul>
                                <li>Dania – 781 kg na osobę,</li>
                                <li>Cypr – 637 kg na osobę,</li>
                                <li>Niemcy – 633 kg na osobę,</li>
                                <li>Szwecja – 706 kg na osobę,</li>
                                <li>Islandia – 656 kg na osobę.</li>
                            </ul>
                        </div>
                        <div class="container-img_1" >
                            <img class="img-1" src="resource/eko1.jpg"/>
                        </div>
                    </div>
                    <div class="text-container text-1_4">
                        <p>Co ciekawe, Amerykanie produkują ich aż około 864 kg, a Japończycy do 1000 kilogramów na osobę! Można więc powiedzieć, że istnieje duża zależność między zamożnością społeczeństwa a wytwarzanymi odpadami. Zazwyczaj im kraj jest bogatszy, tym więcej śmieci produkuje. Mimo że <strong>Polska</strong> w tym zestawieniu wypada o wiele lepiej, bo przeciętny Polak wytwarza od 250 do 315 kg śmieci, nie mamy też powodów do dumy. Na wysypiska trafia 73% odpadów, do spalarni śmieci jedynie 1%, a na kompost 8%.</p>
                    </div>      
                </div>
            </div>
            <div class="slide">
                <div class="container-2">
                    <div class="content-2">
                        <img src="resource/Tablica-edukacyjna-Rozklad-odpadow-w-czasie.jpg"/>
                    </div>
                </div> 
            </div>
            <div class="slide">
                <div class="container-3">
                    <div class="content-3">
                        <img src="resource/piramida-zero-waste-w.jpg"/>
                        <p>W stylu życia jakim jest Zero Waste istotną rolę odgrywają nasze codzienne wybory - oparte na minimalizmie i rozsądnym samoograniczaniu konsumpcji. W rezultacie prowadzą one do mniejszego zanieczyszczenia środowiska. Żeby łatwiej to zrozumieć, wystarczy zapoznać się z zasadami 5R.</p>
                    </div>
                </div> 
            </div>
            <div class="slide">
                <div class="nav">
                    <h1>Jak segregować, aby umożliwić recykling?</h1>
                </div>
                <div class="content-4">
                    <div class="split">
                        <div class="block">
                            <div class="header-4">
                                <h1>SZKŁO</h1>
                            </div>
                            <div class="text-4">
                                <p>Zielony pojemnik - wyrzucaj:</p>
                                <ul>
                                    <li>butelki po napojach</li>
                                    <li>butelki po żywności</li>
                                    <li>opróżnione słoiki bez nakrętek</li>
                                    <li>szklane opakowania po kosmetykach</li>
                                </ul>
                            </div>
                            <div class="icon-gen">
                                <div class="forbi">
                                    <div class="icon">
                                        <i class="fas fa-times-circle"></i>
                                    </div>
                                    <div class="info">
                                        <p>Szklanka, lustro, porcelana, szyba, ceramika to inny rodzaj szkła - wrzuć je do zmieszanych.</p>
                                    </div>
                                </div>
                                <div class="atten">
                                    <div class="icon">
                                        <i class="fas fa-exclamation-circle"></i>
                                    </div>
                                    <div class="info">
                                        <p>Segreguj tylko szkło opakowaniowe.</p>
                                    </div>
                                </div>
                            </div>       
                        </div>
                        <div class="block">
                            <div class="header-4">
                                <h1>PAPIER</h1>
                            </div>
                            <div class="text-4">
                                <p>Niebieski pojemnik - wyrzucaj:</p>
                                <ul>
                                    <li>opakowania z papieru, karton, tektura</li>
                                    <li>katalogi, ulotki, prospekty</li>
                                    <li>papier szkolny i biurowy, zadrukowane kartki, zeszyty, gazety i czasopisma</li>
                                    <li>torby papierowe</li>
                                </ul>
                            </div>
                            <div class="forbi">
                                <div class="icon">
                                    <i class="fas fa-times-circle"></i>
                                </div>
                                <div class="info">
                                    <p>Paragon, tłusty, zabrudzony papier, ręczniki higieniczne nie nadają się do recyklingu - wyrzuć je do zmieszanych.</p>
                                </div>
                            </div>
                            <div class="atten">
                                <div class="icon">
                                    <i class="fas fa-exclamation-circle"></i>
                                </div>
                                <div class="info">
                                    <p>Zabrudzenie papieru tłuszczami/resztkami ogranicza lub wręcz uniemożliwia jego recykling.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="split">
                        <div class="block">
                            <div class="header-4">
                                <h1>PLASTIK I METAL</h1>
                            </div>
                            <div class="text-4">
                                <p>Żółty pojemnik - wyrzucaj:</p>
                                <ul>
                                    <li>butelki po napojach, kubeczki po jogurtach</li>
                                    <li>puszki po napojach i konserwach</li>
                                    <li>kartony po napojach i płynnej żywności</li>
                                    <li>plastikowe jednorazówki</li>
                                    <li>nakrętki od butelek, słoików, kapsle</li>
                                    <li>plastikowe opakowania po kosmetykach i środkach czystości</li>
                                </ul>
                            </div>
                            <div class="forbi">
                                <div class="icon">
                                    <i class="fas fa-times-circle"></i>
                                </div>
                                <div class="info">
                                    <p>Baterie, zużyty sprzęt elektryczny i elektroniczny, opakowania po farbach zawierają substancje niebezpieczne - oddaj je do PSZOK.</p>
                                </div>
                            </div>
                            <div class="atten">
                                <div class="icon">
                                    <i class="fas fa-exclamation-circle"></i>
                                </div>
                                <div class="info">
                                    <p>Nie myj, opróżniaj, zgniataj.</p>
                                </div>
                            </div>
                        </div>
                        <div class="block block-4">
                            <div class="header-4">
                                <h1>BIO</h1>
                            </div>
                            <div class="text-4">
                                <p>Brązowy pojemnik - wyrzucaj</p>
                                <ul>
                                    <li>odpady kuchenne pochodzenia roślinnego i zielone: obierki, owoce i warzywa.</li>
                                    <li>skorupki jaj</li>
                                    <li>trawę, liście, gałęzie</li>
                                </ul>
                            </div>
                            <div class="forbi">
                                <div class="icon">
                                    <i class="fas fa-times-circle"></i>
                                </div>
                                <div class="info">
                                    <p>Kości, wędlina, mięso - nie nadają się do kompostowania - wrzuć je do zmieszanych.</p>
                                </div>
                            </div>
                            <div class="atten">
                                <div class="icon">
                                    <i class="fas fa-exclamation-circle"></i>
                                </div>
                                <div class="info">
                                    <p>Wyrzucaj bez worków foliowych.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

const buttonNext = document.querySelector(".carousel-button_next");

const buttonPrevious = document.querySelector(".carousel-button_previous");

const carousel = document.querySelector('.carousel');

const slidesContainer = document.querySelector('.slides')

let currentSlide = 0;
const numSlides = slidesContainer.children.length; 

console.log(numSlides);

function handleNext() {
    currentSlide = (currentSlide + 1) % numSlides; 
    carousel.style.setProperty('--current-slide', currentSlide);
}

function handlePrevious() {
    currentSlide = (currentSlide - 1) % numSlides; 
    if(currentSlide < 0){
        currentSlide += numSlides;
    }
    carousel.style.setProperty('--current-slide', currentSlide);
}

buttonNext.addEventListener("click",handleNext);

buttonPrevious.addEventListener("click",handlePrevious);
}