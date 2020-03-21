/*ck 1 step regarder vers 22minutes*/

/**
 * @property {HTMLElement} element
 */
class lightbox {
    static init() { /*methode statique qui permet d'initialise rune lightbox Objectif est greffer un comportement sur tous les liens qui mene a une image. */
        const links = document.querySelectorAll('a[href$=".png"], a[href$=".jpg"], a[href$=".jpeg"]');
        forEach(link => link.addEventListener('click', e => {
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
        this.element = this.buildDOM(url)
        this.loadImage(url)
        document.body.appendChild(this.element)
    }

    /**
     * 
     * @param {string} url URL de l'image
     */
    loadImage (url) {
        const image = new Image()
        const container = this.element.querySelector('.lightbox__container')
        const loader = document.createElement('div')
        loader.classList.add('lightbox__loader')
        container.appendChild(loader)
        image.onload = function () {
            container.removeChild(loader)
            container.appendChild(image)
        };
        image.src = url;
    }
/*ck 2nd step : construire la div vec la class lightbox pour une url donnée*/




    /**
     * Ferme la lightbox
     * @param {MouseEvent} e 
     */
    close (e) {
        e.preventDefault();
        this.element.classList.add('faceOut')
        window.setTimeout(() => {
            this.element.parentElement.removeChild(this.element)
        },500)
    }

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
        <div class="lightbox__container"></div>`
        dom.querySelector('lightbox__close').addEventListener('click', this.close.bind(this))
        return dom
    }
}

lightbox;
