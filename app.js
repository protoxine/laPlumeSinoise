let box1 = document.getElementById("div1");
let box2 = document.getElementById("div2");
let box3 = document.getElementById("div3");
let box4 = document.getElementById("div4");
let box5 = document.getElementById("div5");
let box6 = document.getElementById("div6");

const openNav = () =>{
    document.getElementById("myNav").style.width="100%"
    document.querySelector(".btn").style.visibility="hidden"
}
const openTxt = () =>{
    document.getElementById("text1").style.width="100%"
}
const openTxt2 = () =>{
    document.getElementById("text2").style.width="100%"
}
const closeNav = () =>{
    document.getElementById("myNav").style.width="0%"
    document.querySelector(".btn").style.visibility="visible"
}
const closeTxt = () =>{
    document.getElementById("text1").style.width="0%"
}
const closeTxt2 = () =>{
    document.getElementById("text2").style.width="0%"
}
let lienNav = document.querySelectorAll(".overlay-content a")
    for (let i = 0; i < lienNav.length; i++) {
        const element = lienNav[i];
        element.addEventListener("click", closeNav)
}

const showBox2 =()=>{
    box2.classList.toggle("hideBox")
    
}
const showBox4 =()=>{
    box4.classList.toggle("hideBox")
}
const showBox6 =()=>{
    box6.classList.toggle("hideBox")
}


box1.addEventListener("click", showBox2)
box3.addEventListener("click", showBox4)
box5.addEventListener("click", showBox6)

let controller = new ScrollMagic.Controller();
let tween = TweenMax.fromTo(".div1", 1,
                                        {scale: 0},
                                        {scale: 1})
let tween2 = TweenMax.fromTo(".div3", 1,
                                        {scale: 0},
                                        {scale: 1})
let tween3 = TweenMax.fromTo(".div5", 1,
                                        {scale: 0},
                                        {scale: 1})
let scene = new ScrollMagic.Scene({triggerElement: ".div1", offset: -250})
                                    .triggerHook(0.8)
                                    // .addIndicators({name: "premiere div", colorTrigger: "red", indent: 100})
                                    .setTween(tween)
                                    .reverse(false)
                                    .addTo(controller)
let scene2 = new ScrollMagic.Scene({triggerElement: ".div3", offset: -250})
                                    .triggerHook(0.8)
                                    // .addIndicators({name: "second div", colorTrigger: "blue", indent: 200})
                                    .setTween(tween2)
                                    .reverse(false)
                                    .addTo(controller)
let scene3 = new ScrollMagic.Scene({triggerElement: ".div5", offset: -250})
                                    .triggerHook(0.8)
                                    // .addIndicators({name: "derniere div", colorTrigger: "white", indent: 300})
                                    .setTween(tween3)
                                    .reverse(false)
                                    .addTo(controller)



const titre = document.querySelector("h2");
const animTitle = () =>{
    if(scrollY > 336){
            titre.classList.add("animTxt")
    }else {
        titre.classList.remove("animTxt")
    }
    // console.log("T'es dedans gros")
}
window.addEventListener("scroll", animTitle)