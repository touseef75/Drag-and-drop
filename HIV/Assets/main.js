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
        video:"./images/structure.mp4",
        cont:"#42eaef",
    },
    {
        video:"./images/cycle.mp4",
        cont:"#42eaef",

        

    },
    
]
let num = 0;
but.addEventListener("click",function(){
    num++;
    if(num == 1){
        video.src = arr[num].video;
    cont.style.background = arr[num].cont;
    document.getElementById("next").style.display = "none";
    num = -1;
    }else{
        video.src = arr[num].video;
    cont.style.background = arr[num].cont;
    }
    
});