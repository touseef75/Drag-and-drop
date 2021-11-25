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
        cont:"#2b80ae",
        div:"#2b80ae",
    },
    {
        video:"./images/part2.mp4",
        cont:"#2b80ae",
        div:"#2b80ae",

        

    },
    {
        video:"./images/part3.mp4",
        cont:"#15719c",
        div:"#15719c",

    },
    {
        video:"./images/part4.mp4",
        cont:"#15719c",
        div:"#15719c",

    },
    {
        video:"./images/part5.mp4",
        cont:"#15719c",
        div:"#15719c",

    },
     {
        video:"./images/part6.mp4",
        cont:"#15719c",
        div:"#15719c",

    },
]
let num = 0;
but.addEventListener("click",function(){
    num++;
    if(num == 5){
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