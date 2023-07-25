const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".navList");
    const navListLi = document.querySelectorAll(".navList li");
    const navListA = document.querySelectorAll(".navList a");

    burger.addEventListener("click", () => {
        // Toggle Nav
        nav.classList.toggle("nav-active");

        // Animate Links
        navListLi.forEach((list, index) => {
            if (list.style.animation) {
                list.style.animation = "";
            } else {
                list.style.animation = `navLinkFade 0.5s ease forwards ${index / 15 +
                    0.5}s`;
            }
        });
        // Burger Animation
        burger.classList.toggle("toggle");
    });

    navListA.forEach(list =>
        list.addEventListener("click", () => {
            if (nav.classList.contains("nav-active")) {
                // Close Navbar when Anchor tags are clicked
                nav.classList.remove("nav-active");

                burger.classList.toggle("toggle");

                // Remove Style for each link
                navListLi.forEach(list => {
                    list.style.animation = "";
                });
            }
        })
    );
};

navSlide();

let date = new Date();
let year = date.getFullYear();
let yearSpan = document.getElementById("year");
yearSpan.textContent = year;