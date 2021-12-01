let but = document.getElementById("next");
let video = document.getElementById("video");

let start = document.getElementById("start");
let cont= document.getElementById("container");
let div = document.getElementById("div");
let num1 = 0;
start.addEventListener("click",function(){
    if(num1 == 0){
    video.play();
    num1 = 1;

    }else{
         video.pause();
    num1 = 0;
    }
})

let arr = [
    {
        video:"./images/main.mp4",
        cont:"white",
    },
    {
        video:"./images/main3.mp4",
        cont:"#cba599",

        

    },
    {
        video:"./images/main4.mp4",
        cont:"white",

    },
]
let num = 0;
but.addEventListener("click",function(){
    num++;
    if(num == 2){
        video.src = arr[num].video;
    cont.style.background = arr[num].cont;
    num = -1;
    }else{
        video.src = arr[num].video;
    cont.style.background = arr[num].cont;
    }
    
});