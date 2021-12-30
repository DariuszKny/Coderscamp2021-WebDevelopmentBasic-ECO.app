import { makeReferenceLinks } from './makeReferenceLinks.js';
import { removeReferenceLinks } from './removeReferenceLinks.js';

export function  showOznaczeniaMenu() {

    removeReferenceLinks();
    makeReferenceLinks('./src/oznaczenia.css');

    document.querySelector('#app').innerHTML = `  
    <main class="main-content">
        <div class="labels-container">
            <div class="label">
                <div class="img-container">
                    <img src="resource/man-and-bin.png">
                </div>
                <div class="description-container">
                    <h2 class="label__header">ZNAK DBAJ O CZYSTOŚĆ</h2>
                    <p class="label__description">
                        Znak przypomina o tym, by opakowanie po zużytym produkcie wyrzucić do kosza. A nie, na przykład, do lasu.
                    </p>
                </div>

            </div>

            <div class="label">
                <div class="img-container">
                    <img src="resource/rearrows.png">
                </div>
                <div class="description-container">
                    <h2 class="label__header">ZNAK OPAKOWANIE NADAJE SIĘ DO RECYKLINGU</h2>
                    <p class="label__description">
                        Symbolem odzysku jest ten znak. Informuje on, że opakowanie wykonane jest z takiego surowca, który można poddać recyklingowi.
                    </p>  
                </div>          
            </div>

            <div class="label">
                <div class="img-container">
                    <img src="resource/yinyangxd.png">
                </div>
                <div class="description-container">
                    <h2 class="label__header">ZNAK ZIELONY PUNKT</h2>
                    <p class="label__description">
                        Często mylnie jest odbierany jako symbol recyklingu. A tak naprawdę oznacza, że producent sfinansował budowę i funkcjonowanie systemu odzysku odpadów.
                    </p>
                </div>
            </div>


            <div class="label">
                <div class="img-container">
                    <img src="resource/crossed_out_bin.png">
                </div>
                <div class="description-container">
                    <h2 class="label__header">ZNAK PRZEKREŚLONEGO KONTENERA</h2>
                    <p class="label__description">
                        Zwykle występuje na sprzętach elektronicznych, RTV i AGD. Oznacza on, że po zużyciu produktu nie wolno wyrzucić do kosza razem z innymi odpadami, tylko należy przekazać do punktu zbiórki elektrośmieci.                    </p>
                </div>
            </div>

            <div class="label">
                <div class="img-container">
                    <img src="resource/label-ce-sign-logo.png">
                </div>
                <div class="description-container">
                    <h2 class="label__header">ZNAK CE</h2>
                    <p class="label__description">
                        Pojawia na wyrobach medycznych (np. płynów do soczewek), elektro-sprzęcie, zabawkach i informuje o tym, że produkt powstał zgodnie z przepisami obowiązującymi na terenie Unii Europejskiej i z normami uwzględniającymi zdrowie i bezpieczeństwo użytkownika
                    </p>
                </div>
            </div>

            <div class="label">
                <div class="img-container">
                    <img src="resource/480px-Biodegradable.svg.png">
                </div>
                <div class="description-container">
                    <h2 class="label__header">OPAKOWANIE BIODEGRADOWALNE</h2>
                    <p class="label__description">
                        Znak występuje na opakowaniach, które rozkładają się podczas kompostowania.
                    </p>
                </div>
            </div>

            <div class="label">
                <div class="img-container">
                    <img src="resource/zsfgzk.png">
                </div>
                <div class="description-container">
                    <h2 class="label__header">MOŻLIWOŚĆ PONOWNEGO WYKORZYSTANIA</h2>
                    <p class="label__description">
                    Tym znakiem opatrywane są produkty, które po wykorzystaniu nadają się do ponownego użycia (mogą być wielokrotnego użycia). Można go spotkać na butelkach, szklanych pojemnikach, beczkach, kontenerach i puszkach.
                    </p>
                </div>
            </div>


            <div class="label">
                <div class="img-container">
                    <img src="resource/symbol_tworzywa-300x300.png">
                </div>
                <div class="description-container">
                    <h2 class="label__header">OZNACZENIE UMIESZCZANE NA OPAKOWANIACH PLASTIKOWYCH</h2>
                </div>
            </div>

        </div>

    </main>`;
}
