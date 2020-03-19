const rootElement = document.documentElement



/*---------DrakeRProter page-----------*/

const switchTheme = (event) => {
    if (event.target.checked) {
        rootElement.setAttribute('data-theme', 'dark');
    }
    else {
        rootElement.setAttribute('data-theme', 'light');
    }    
}
const toggler = document.querySelector('#toggler');
toggler.addEventListener('change', switchTheme, false);



/*---------Real page-----------*/

const darkMode = document.getElementById('DarkMode');

darkMode.onclick = () => {
    if (rootElement.getAttribute('data-theme') === 'dark') {  // Dark mode
        rootElement.setAttribute('data-theme', 'light');
        console.log('light');
    } 
    else { // Light mode
        rootElement.setAttribute('data-theme', 'dark');
        console.log('dark');
    }

    //sessionStorage.getItem('changeMode', rootElement.getAttribute('data-theme'));
}

//rootElement.setAttribute('data-theme',sessionStorage.getItem('changeMode'));






