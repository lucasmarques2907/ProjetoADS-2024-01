const pathname = window.location.pathname;

function perguntasFrequentes() {
    window.location.href = "faq.html";
}

function navMobile() {
    window.location.href = "navMobile.html";
}

if (pathname.includes("navMobile.html")) {

    home = document.querySelector("#home");
    work = document.querySelector("#work");
    blog = document.querySelector("#blog");
    about = document.querySelector("#about");

    homeButton = document.querySelector(".homeButton");
    workButton = document.querySelector(".workButton");
    blogButton = document.querySelector(".blogButton");
    aboutButton = document.querySelector(".aboutButton");

    function selectHome() {
        home.setAttribute("class", "showImg");
        work.setAttribute("class", "hideImg");
        blog.setAttribute("class", "hideImg");
        about.setAttribute("class", "hideImg");

        homeButton.classList.add("buttonPressed")
        workButton.classList.remove("buttonPressed");
        blogButton.classList.remove("buttonPressed");
        aboutButton.classList.remove("buttonPressed");
    }

    function selectWork() {
        home.setAttribute("class", "hideImg");
        work.setAttribute("class", "showImg");
        blog.setAttribute("class", "hideImg");
        about.setAttribute("class", "hideImg");

        homeButton.classList.remove("buttonPressed")
        workButton.classList.add("buttonPressed");
        blogButton.classList.remove("buttonPressed");
        aboutButton.classList.remove("buttonPressed");
    }

    function selectBlog() {
        home.setAttribute("class", "hideImg");
        work.setAttribute("class", "hideImg");
        blog.setAttribute("class", "showImg");
        about.setAttribute("class", "hideImg");

        homeButton.classList.remove("buttonPressed")
        workButton.classList.remove("buttonPressed");
        blogButton.classList.add("buttonPressed");
        aboutButton.classList.remove("buttonPressed");
    }

    function selectAbout() {
        home.setAttribute("class", "hideImg");
        work.setAttribute("class", "hideImg");
        blog.setAttribute("class", "hideImg");
        about.setAttribute("class", "showImg");

        homeButton.classList.remove("buttonPressed")
        workButton.classList.remove("buttonPressed");
        blogButton.classList.remove("buttonPressed");
        aboutButton.classList.add("buttonPressed");
    }
}
