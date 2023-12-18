let card1 = document.querySelector(".card1");
let card2 = document.querySelector(".card2");
let page1 = document.querySelector("#page1");

page1.addEventListener("mousemove",function(dets){
    
    let mousex = dets.clientX;
    let ttlwidth = page1.offsetWidth;
    let rotationangle = (mousex / ttlwidth - 0.5)*100;

    card1.style.transform = `rotateX(${rotationangle}deg)`;
    card2.style.transform = `rotateX(${rotationangle}deg)`;
})
let imagesecond = document.querySelector(".images:nth-child(2)");
let img = document.querySelector(".images:nth-child(2) img:nth-child(2)")
let icon = document.querySelector(".icon")
imagesecond.addEventListener("mouseenter",function(){
    img.style.transform = "scale(0.8)";
    icon.style.position = 'absolute';
    icon.style.top = "0%";
    icon.style.right = "0%";

})
imagesecond.addEventListener("mouseleave",function(){
    img.style.transform = "scale(1)";
    icon.style.position = 'absolute';
    icon.style.top = "5%";
    icon.style.right = "5%";
})
