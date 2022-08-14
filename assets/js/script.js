const toogle = document.querySelector('.toogle');
const navMenu = document.querySelector('.nav-menu');
const navLink = document.querySelectorAll(".nav-link");
const navbar = document.querySelector('.navbar');

// Navbar toogle atau biasa orang menyebut hamburger mobile version
toogle.addEventListener('click', versiMobile);

function versiMobile() {
    toogle.classList.toggle('active');
    navMenu.classList.toggle('active');
}
// menghilangkan navbar pada saat di click
navLink.forEach(n => n.addEventListener('click', closeMenu));

function closeMenu() {
    toogle.classList.remove('active');
    navMenu.classList.remove('active');
}
// Akhir navbar mobile version
// navbar Scroll animasi
window.onscroll = () => {
    let nilai = window.scrollY; //scrollY berarti scroll vertical
    // console.log(top);
    if (nilai >= 700) { //jika ketinggiannya lebih besar dari 700px
        navbar.classList.add('change') //maka lakukan ini
    } else if (nilai >= 400) { //jika ketinggiannya lebih besar dari  500px
        navbar.classList.add('mobileChange')
    } else { //false
        navbar.classList.remove('change')
        navbar.classList.remove('mobileChange')
    }
};
// animasi scroll
function animasiScroll() {
    let anim = document.querySelectorAll(".animasiScroll");

    for (let i = 0; i < anim.length; i++) {
        let windowHeight = window.innerHeight; //Memberi ketinggian viewport
        let elementTop = anim[i].getBoundingClientRect().top; //memberi jarak dari atas viewport
        let elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) { //jika jarak atas vewport lebih kecil dari ketinggian vieportnya - 150
            anim[i].classList.add("diScroll");
        } else {
            anim[i].classList.remove("diScroll");
        }
    }
}

window.addEventListener("scroll", animasiScroll);