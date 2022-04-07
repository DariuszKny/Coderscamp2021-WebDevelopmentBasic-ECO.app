# Coders Camp 2020 | Projekt Zespołowy | JavaScript

- [Zespół projektowy](#zespół-projektowy)
- [Eco App](#eco-app)
  - [Demo](#demo)
  - [Cel projektu](#cel-projektu)
  - [Działanie aplikacji](#działanie-aplikacji)
    - [Menu Główne](#menu-główne)
      - [Gra Sorter](#gra-sorter)
      - [Oznaczenia na opakowaniach](#oznaczenia-na-opakowaniach)
      - [Quiz](#quiz)
      - [Jakość powietrza](#jakość-powietrza)
      - [Baza wiedzy](#baza-wiedzy)
      - [Ranking](#ranking)
- [Development aplikacji](#development-aplikacji)
  - [Wykorzystywane technologie](#wykorzystywane-technologie)
  - [Uruchomienie projektu](#uruchomienie-projektu)
  - [Organizacja pracy](#organizacja-pracy)

## Zespół projektowy

Zespół pracował w ramach kursu [CodersCamp 2021](https://coderscamp.pl/).
Aplikację została wykonana przez uczestników kursu pod okiem dwóch mentorów.

**Mentorzy**: Dariusz Knysak, Paweł Michalak

**Uczestnicy**:

- [Marcin Barszcz](https://github.com/marcinnnnb)
- [Agnieszka Bury](https://github.com/angbur)
- [Natallia Haurylenka](https://github.com/BetaBart)
- [Agnieszka Kapelańczyk](https://github.com/AgnieszkaKapelanczyk)
- [Marta Pejkowska](https://github.com/MartaPejkowska)
- [Michał Stuleblak](https://github.com/fixedmichal)

## Eco App

### Demo

Wersja demonstracyjna aplikacji jest dostępna [TUTAJ]().

### Cel projektu

Celem projektu było napisanie aplikacji wykorzystującej wiedzę nabytą z pierwszego działu kursu tj. z następujących technologi: html, css, javascript.
Zespół projektowy zdecydował się na aplikację własnego pomysłu składającą się z 6 różnych modułów- gry sorter, opisów oznaczeń na opakowaniach, quizu dotyczącego odpadów, stanu jakości powietrza, bazy wiedzy oraz rankingu zawierającego wyniki z quizu i gry.

Aplikacja została wykonana wg wymagań dostarczonych przez organizatorów CodersCamp.
Szablon projektu dostępny jest [TUTAJ](https://github.com/CodersCamp2021/ProjectWebDevelopmentBasics).

### Działanie aplikacji

#### Menu Główne

Po uruchomieniu aplikacji wyświetlone zostaje menu główne, na którym widać przyciski kierujące do odpowiednich modułów, logo aplikacji oraz odnośniki do strony organizatora kursu i repozytorium projektu na githubie.

W menu głównym użytkownik ma 6 opcji do wyboru:

- [Gra Sorter](#gra-sorter)
- [Oznaczenia na opakowaniach](#oznaczenia-na-opakowaniach)
- [Quiz](#quiz)
- [Jakość powietrza](#jakość-powietrza)
- [Baza wiedzy](#baza-wiedzy)
- [Ranking](#ranking)

Z poziomu każdego ekranu jest możliwość powortu do menu głównego po naciśnięciu logo aplikacji znajdującego się w lewym górnym rogu ekranu.

##### Gra Sorter

Użytkownik za pomocą klawiatury kieruje spadającymi z góry ekranu odpadami, tak aby trafiły do odpowiednich pojemników wg zasad segregacji. Za każde trafienie gracz otrzymuje 10 punktów a za każdą złą odpowiedź traci jedno życie. Gra kończy się po 3 nieudanych próbach.

##### Oznaczenia na opakownaiach

Ekran, na którym wyświetlane są oznaczenia jakie możemy znaleźć na opakowaniach. Dzięki nim wiemy do jakiego pojemnika wrzucić dany odpad.

##### Quiz

Quiz składa się z 20 pytań, dotyczących głównie segregacji śmieci. Każde pytanie zawiera zdjęcie oraz 4 odpowiedzi, z których tylko 1 jest prawidłowa. Gracz po wybraniu odpowiedzi wie, czy była ona prawidłowa, ponieważ zmienia się kolor przycisku- zielony w przypadku odpowiedzi prawidłowej i czerwony w przypadku nieprawidłowej. Za każdą dobrą odpowiedź gracz otrzymuje 100 punktów. Aktualna punktacja wyświetlana jest w prawym górnym rogu. W lewym górnym rogu ekranu znajduje się pasek postępu quizu.

##### Jakość powietrza

Na ekranie pojawia się pole, w którym użytkownik wpisuje interesujące go miasto. Po zatwierdzeniu pojawia się aktualny poziom zanieczyszczenia powietrza w wybranym miejscu.

##### Baza wiedzy

Ekran składa się z karuzeli slajdów, zawierających infromacje m.in na temat segregacji śmieci, jak dużo kg odpadów na osobę jest wytwarzane w danych krajach czy ile dany odpad się rozkłada.

##### Ranking

W formie tabeli wyświetlane są najlepsze wyniki zarówno z gry sorter jak i quizu.

## Development aplikacji

### Wykorzystywane technologie

W trakcie developmentu wykorzystujemy:

- JavaScript
- Web APi dla JavaScript
- CSS
- HTML
- LocalStorage
- Fetch

### Uruchomienie projektu

Aby uruchomić aplikację na lokalnej maszynie, wykonaj następujące kroki:

1. Zainstaluj zależności za pomocą komendy: `npm install`
2. Wystartuj serwer developerski `npm run dev`

Aplikacja będzie dostępna pod adresem []()

Kod produkcyjny aplikacji znajduje się w katalogu `src`.

### Organizacja pracy

Przy użyciu narzędzia Trello rozdzielono poszczególne moduły. Każdy z członków zespołu miał do wykoniania jeden moduł. Komunikacja zespołu odbywała się głównie przez Google Meets i Discord.
