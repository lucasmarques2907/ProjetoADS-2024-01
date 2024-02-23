function perguntasFrequentes(){
    window.location.href="perguntasFrequentes.php";
}

function navMobile(){
    window.location.href="navMobile.php";
}

const pathname = window.location.pathname;

if (pathname.includes("navMobile.php")){
    home = document.querySelector("#home");
    work = document.querySelector("#work");
    blog = document.querySelector("#blog");
    about = document.querySelector("#about");

    homeButton = document.querySelector(".homeButton");
    workButton = document.querySelector(".workButton");
    blogButton = document.querySelector(".blogButton");
    aboutButton = document.querySelector(".aboutButton");

    function selectHome(){
        home.removeAttribute("class");
        work.setAttribute("class", "d-none");
        blog.setAttribute("class", "d-none");
        about.setAttribute("class", "d-none");

        homeButton.classList.add("buttonPressed")
        workButton.classList.remove("buttonPressed");
        blogButton.classList.remove("buttonPressed");
        aboutButton.classList.remove("buttonPressed");
    }
    
    function selectWork(){
        home.setAttribute("class", "d-none");
        work.removeAttribute("class");
        blog.setAttribute("class", "d-none");
        about.setAttribute("class", "d-none");
    
        homeButton.classList.remove("buttonPressed")
        workButton.classList.add("buttonPressed");
        blogButton.classList.remove("buttonPressed");
        aboutButton.classList.remove("buttonPressed");
    }
    
    function selectBlog(){
        home.setAttribute("class", "d-none");
        work.setAttribute("class", "d-none");
        blog.removeAttribute("class");
        about.setAttribute("class", "d-none");

        homeButton.classList.remove("buttonPressed")
        workButton.classList.remove("buttonPressed");
        blogButton.classList.add("buttonPressed");
        aboutButton.classList.remove("buttonPressed");
    }
    
    function selectAbout(){
        home.setAttribute("class", "d-none");
        work.setAttribute("class", "d-none");
        blog.setAttribute("class", "d-none");
        about.removeAttribute("class");

        homeButton.classList.remove("buttonPressed")
        workButton.classList.remove("buttonPressed");
        blogButton.classList.remove("buttonPressed");
        aboutButton.classList.add("buttonPressed");
    }    
}
