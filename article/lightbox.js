/*ck 1 step regarder vers 22minutes*/
class lightbox {
    static init() { /*methode statique qui permet d'initialise rune lightbox Objectif est greffer un comportement sur tous les liens qui mene a une image. */
        const links = document.querySelectorAll('a[href$=".png"], a[href$=".jpg"], a[href$=".jpeg"]');
        .forEach(link => link.addEventListener('click', e => {
            e.preventDefault()
            new lightbox(e.currentTarget.getAttribute('href'));
        }))
    }
/*ck 3rd step : mettre cette div dans le body.*/
    /**
     * 
     * @param {string} url URL de l'image 
     */
    constructor (url) {
        const element = this.buildDOM(url)
        document.body.appendChild(element)
    }
/*ck 2nd step : construire la div vec la class lightbox pour une url donnée*/
    /**
     * 
     * @param {string} url URL de l'image
     * @returns {HTMLElement} 
     */

    buildDOM (url) {
        const dom = document.createElement('div')
        dom.classList.add('lightbox')
        dom.innerHTML = `
        <button class="lightbox__close"><i class="fas fa-times"></i></button>
        <button class="lightbox__next"><i class="fas fa-chevron-right"></i></button>
        <button class="lightbox__prev"><i class="fas fa-chevron-left"></i></button>
        <div class="lightbox__container">
            <img src="https://picsum.photos/900/1800" alt="">
        </div>`
        return dom
    }
}

lightbox ();
