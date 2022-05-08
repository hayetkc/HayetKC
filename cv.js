window.addEventListener('scroll', function () {
    const header = Document.querySelector('header');
    header.classListe.toggle("stickey", window.scrollY > 0);
});

function toggleMenu() {
    const toggleMenu = document.querySelector('.menutoggle');
    const navbar = document.querySelector('.navbar');
    menuToggle.classListe.toggle('active');
    navbar.classListe.toggle('active');
}

const txtAnim = document.querySelector('h1');

new Typewriter(txtAnim, {
    deletedspeed: 20
}).typeString('Hayet KACIOUSALAH')
    .start();

var i = 0;
function move() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var width = 0;
        var id = setInterval(frame, 0);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width + "%";
            }
        }
    }
}

// // Progress bars
// $(document).ready(function () {
//     $('.progress .progress-bar').css("width",
//         function () {
//             return $(this).attr("aria-valuenow") + "%";
//         }
//     )
// });

