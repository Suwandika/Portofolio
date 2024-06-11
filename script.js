let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('#sidemenu');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    if (navbar.style.display === 'block') {
        navbar.style.display = 'none';
    } else {
        navbar.style.display = 'block';
    }
}

nav.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    });
});

var tablinks = document.querySelectorAll(".tab-links");
var tabcontents = document.querySelectorAll(".tab-contents");

    function opentab(tabname) {
        for (let i = 0; i < tablinks.length; i++) {
            tablinks[i].classList.remove("active-link");
            tabcontents[i].classList.remove("active-tab");
        }

        for (let i = 0; i < tablinks.length; i++) {
            if (tablinks[i].textContent.toLowerCase() === tabname.toLowerCase()) {
                tablinks[i].classList.add("active-link");
                tabcontents[i].classList.add("active-tab");
                break;
            }
        }
    }

