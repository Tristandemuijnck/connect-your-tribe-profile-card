# Visitekaartje

## Titel
Visitekaartje

## Beschrijving
Dit is de repository van mijn uitvoering van connect-your-tribe-profile-card - Visitekaartje.

### Preview
<img src="https://user-images.githubusercontent.com/43402897/218087856-49eeea45-5423-4cdb-ab40-95b124a27ea8.png" width=700>

## :mag: Kenmerken

### :page_facing_up: HTML

Voor de layout maak ik gebruik van: 

  - EJS om partials in te laden voor de header en footer
  
### :art: CSS

Een aantal belangrijke css onderdelen zijn de media queries. Deze worden gebruikt voor het responsive maken van de website.
Ik heb ze op de volgende plekken neergezet:

* 600px
* 1000px

### :loop: JavaScript

Een belangrijk stukje code voor het visitekaartje is de card flip:

```
var infoCard = document.querySelector(".description-cards");

infoCard.addEventListener("click", () => {
    infoCard.classList.toggle("is-flipped");
});
```


## Live versie
Voor een live versie van het project: https://colorful-ant-uniform.cyclic.app/

## Licentie

![GNU GPL V3](https://www.gnu.org/graphics/gplv3-127x51.png)

This work is licensed under [GNU GPLv3](./LICENSE).
