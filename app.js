
var all = document.querySelector('.all')
var frontend = document.querySelector('.frontend')
var backend = document.querySelector('.backend')
var database = document.querySelector('.database')
var framework = document.querySelector('.framework')
var other = document.querySelector('.other')

let all_btn = [".html", ".css", ".javascript", ".python", ".node-js", ".java",".figma",".react",".git",".github",".mysql"];
let front_btn = [".html", ".css", ".javascript",".react"];
let back_btn = [".node-js"];
let database_btn = [".mysql"];
let framework_btn = [".react"];
let other_btn = [".python", ".java",".git",".figma",".github"];


var typed = new Typed(".text-type",{
    strings: ["Web Developer","Designer","Programmer"],
    typeSpeed: 300,
    backSpeed: 200,
    loop : true
})


all.addEventListener('click', function () {
    for (var i = 0; i < all_btn.length; i++) {
        document.querySelector(all_btn[i]).style.display = "inline";
        document.querySelector(all_btn[i]).style.display = "flex";
        // document.querySelector(all_btn[i]).style.flex-direction = "c";
        all.style.borderBottom = "1px solid #4B4453";
        

        frontend.style.border = "0";
        backend.style.border = "0";
        database.style.border = "0";
        framework.style.border = "0";
        other.style.border = "0";
    }
})

frontend.addEventListener('click', function () {
    for (var i = 0; i < all_btn.length; i++) {
        document.querySelector(all_btn[i]).style.display = "none";
    }
    for (var i = 0; i < front_btn.length; i++) {
        document.querySelector(front_btn[i]).style.display = "inline";
        document.querySelector(front_btn[i]).style.display = "flex";
        all.style.border = "0";
        frontend.style.borderBottom = "1px solid #4B4453";
        

        backend.style.border = "0";
        database.style.border = "0";
        framework.style.border = "0";
        other.style.border = "0";
    }
})

backend.addEventListener('click', function () {
    for (var i = 0; i < all_btn.length; i++) {
        document.querySelector(all_btn[i]).style.display = "none";
    }
    for (var i = 0; i < back_btn.length; i++) {
        document.querySelector(back_btn[i]).style.display = "inline";
        document.querySelector(back_btn[i]).style.display = "flex";
        all.style.border = "0";
        frontend.style.border = "0";
        backend.style.borderBottom = "1px solid #4B4453";
        database.style.border = "0";
        framework.style.border = "0";
        other.style.border = "0";
    }
})

database.addEventListener('click', function () {
    for (var i = 0; i < all_btn.length; i++) {
        document.querySelector(all_btn[i]).style.display = "none";
    }
    for (var i = 0; i < database_btn.length; i++) {
        document.querySelector(database_btn[i]).style.display = "inline";
        document.querySelector(database_btn[i]).style.display = "flex";
    }
    all.style.border = "0";
    frontend.style.border = "0";
    backend.style.border = "0";
    database.style.borderBottom = "1px solid #4B4453";
    framework.style.border = "0";
    other.style.border = "0";
})

framework.addEventListener('click', function () {
    for (var i = 0; i < all_btn.length; i++) {
        document.querySelector(all_btn[i]).style.display = "none";
    }
    for (var i = 0; i < framework_btn.length; i++) {
        document.querySelector(framework_btn[i]).style.display = "inline";
        document.querySelector(framework_btn[i]).style.display = "flex";
        all.style.border = "0";
        frontend.style.border = "0";
        backend.style.border = "0";
        database.style.border = "0";
        framework.style.borderBottom = "1px solid #4B4453";
        other.style.border = "0";
    }
})

other.addEventListener('click', function () {
    for (var i = 0; i < all_btn.length; i++) {
        document.querySelector(all_btn[i]).style.display = "none";
    }
    for (var i = 0; i < other_btn.length; i++) {
        document.querySelector(other_btn[i]).style.display = "inline";
        document.querySelector(other_btn[i]).style.display = "flex";
    }
    all.style.border = "0";
    frontend.style.border = "0";
    backend.style.border = "0";
    database.style.border = "0";
    framework.style.border = "0";
    other.style.borderBottom = "1px solid #4B4453";
})

