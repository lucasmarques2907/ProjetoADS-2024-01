<?php include_once("header.php");
?>
<div class="backgroundNavMob">
    <div class="navMob container">
        <div class="phone row">
            <img src="imgs/home.avif" alt="Home" id="home" >
            <img src="imgs/work.avif" alt="Work" id="work" class="d-none">
            <img src="imgs/blog.avif" alt="Blog" id="blog" class="d-none">
            <img src="imgs/about.avif" alt="About" id="about" class="d-none">
            <div class="navButtons row">
                <button class="col-3 homeButton buttonPressed" onClick="selectHome()"><i class="fa-solid fa-house"></i><br>Home</button>
                <button class="col-3 workButton" onClick="selectWork()"><i class="fa-solid fa-box"></i><br>Trabalho</button>
                <button class="col-3 blogButton" onClick="selectBlog()"><i class="fa-solid fa-book"></i><br>Blog</button>
                <button class="col-3 aboutButton" onClick="selectAbout()"><i class="fa-solid fa-users"></i><br>Sobre Nós</button>
            </div>
        </div>
    </div>
</div>
<script src="script.js"></script>
</body>

</html>