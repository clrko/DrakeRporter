const rootElement = document.documentElement



/*---------DarkMode DrakeRPorter page-----------*/

const switchTheme = (event) => {
    if (event.target.checked) {
        rootElement.setAttribute('data-theme', 'dark');
    }
    else {
        rootElement.setAttribute('data-theme', 'light');
    }    
}

const toggler = document.querySelector('#toggler');
if (toggler) toggler.addEventListener('change', switchTheme, false);



/*---------DarkMode Real page-----------*/

const darkMode = document.querySelector('#darkMode');

if (darkMode) {
    darkMode.onclick = () => {
        if (rootElement.getAttribute('data-theme') === 'dark') {  // Dark mode
            rootElement.setAttribute('data-theme', 'light');
        } 
        else { // Light mode
            rootElement.setAttribute('data-theme', 'dark');
        }
    
        sessionStorage.getItem('changeMode', rootElement.getAttribute('data-theme'));
    }
    
    rootElement.setAttribute('data-theme',sessionStorage.getItem('changeMode'));
}



/*-------------confirmation message when click on a url--------*/
const showAlert = e => {
    let txtAlert = 'Tu es sûr de vouloir aller par là?';
    const reponse = window.confirm(txtAlert);
    if (!reponse) {
        e.preventDefault();
    }
};


const confirmLink = document.querySelector('#confirmLink');
if (confirmLink) confirmLink.addEventListener('click', showAlert);

/* onClick="showAlert(event)" peut être utilisé  dans le html balise <a> à la palce des deux lignes plus haut*/


