/*-------------confirmation message when click on a url--------*/
const showAlert = e => {
    let txtAlert = 'Tu es sûr de vouloir aller par là?';
    const reponse = window.confirm(txtAlert);
    if (!reponse) {
        e.preventDefault();
    }
};


const confirmLink = document.querySelector('#confirmLink');
confirmLink.addEventListener('click', showAlert);

/* onClick="showAlert(event)" peut être utilisé  dans le html balise <a> à la palce des deux lignes plus haut*/


