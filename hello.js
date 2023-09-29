
const allBlog = document.querySelector(".all-blog");
const allWeb = document.querySelector(".all-web");
const allApp = document.querySelector(".all-app");
const allIcon = document.querySelector(".all-icon");

const portfolioBtnOne = document.getElementById("portfolio-btn-1");
const portfolioBtnTwo = document.getElementById("portfolio-btn-2");
const portfolioBtnThree = document.getElementById("portfolio-btn-3");
const portfolioBtnFour = document.getElementById("portfolio-btn-4");


portfolioBtnTwo.addEventListener("click", ()=>{
    allWeb.style.display = "block";
    allBlog.style.display = "none";
    allApp.style.display = "none";
    allIcon.style.display = "none";
});

portfolioBtnThree.addEventListener("click", ()=>{
    allWeb.style.display = "none";
    allBlog.style.display = "none";
    allApp.style.display = "block";
    allIcon.style.display = "none";
});

portfolioBtnFour.addEventListener("click", ()=>{
    allWeb.style.display = "none";
    allBlog.style.display = "none";
    allApp.style.display = "none";
    allIcon.style.display = "block";
});
portfolioBtnOne.addEventListener("click", ()=>{
    allWeb.style.display = "none";
    allBlog.style.display = "block";
    allApp.style.display = "none";
    allIcon.style.display = "none";
});