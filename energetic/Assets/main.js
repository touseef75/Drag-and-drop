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
        video:"./images/part1.mp4",
        cont:"white",
        div:"white",
    },
    {
        video:"./images/step3 (3).mp4",
        cont:"white",
        div:"white",

        

    },
    {
        video:"./images/end.mp4",
        cont:"white",
        div:"white",

    },
    
    
]
let num = 0;
but.addEventListener("click",function(){
    num++;
    if(num == 2){
        video.src = arr[num].video;
    cont.style.background = arr[num].cont;
    div.style.background = arr[num].div;
    num = -1;
    }else{
        video.src = arr[num].video;
    cont.style.background = arr[num].cont;
    div.style.background = arr[num].div;
    }
    
});