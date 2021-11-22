let but = document.getElementById("next");
let video = document.getElementById("video");

let start = document.getElementById("start");
let cont= document.getElementById("container");
let div = document.getElementById("div");
let num1 = 0;
start.addEventListener("click",function(){
    if(num == 0){
    video.play();
    num = 1;

    }else{
         video.pause();
    num = 0;
    }
})

let arr = [
    {
        video:"./Assets/images/step 01.mp4",
        cont:"#92b7de",
        div:"#92b7de",
        next:"Next",
    },
    {
        video:"./Assets/images/step 2 (1).mp4",
        cont:"#252527",
        div:"#252527",
        next:"Next",   
    }, {
        video:"./Assets/images/step 3.mp4",
        cont:"#2e3f2b",
        div:"#2e3f2b",
        next:"Next",   
    },{
        video:"./Assets/images/step 4.mp4",
        cont:"#2e3f2b",
        div:"#2e3f2b",
        next:"Back",   
    },
    
]
let num = 0;
let num2 = 0;
but.addEventListener("click",function(){
    num++;
    num2++;
    if(num == 3){
        video.src = arr[num].video;
    cont.style.background = arr[num].cont;
    div.style.background = arr[num].div;
    but.innerHTML = arr[num].next;
    num = -1;
    }else{
        video.src = arr[num].video;
    cont.style.background = arr[num].cont;
    div.style.background = arr[num].div;
    but.innerHTML = arr[num].next;

    }if(num2 == 3){
        document.getElementById("logo").src = "./Assets/images/logo.png";
        num2 = 0;
    }else{
        
        document.getElementById("logo").src = "./Assets/images/logo1.png";

    }
    
});