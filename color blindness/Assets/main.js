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
        video:"./images/How we see color - Colm Kelleher (online-video-cutter.com).mp4",
        cont:"black",
        div:"black",
        logo:"./images/logo1.png",
    },
    {
        video:"./images/step 2.mp4",
        cont:"white",
        div:"white",
        logo:"./images/logo.png",


        

    },
]
  

let num = 0;
but.addEventListener("click",function(){
    num++;
    if(num == 1){
        video.src = arr[num].video;
    cont.style.background = arr[num].cont;
    document.getElementById("logo").src = arr[num].logo;
    num = -1;
    }else{
        video.src = arr[num].video;
    cont.style.background = arr[num].cont;
    document.getElementById("logo").src = arr[num].logo;

    }
    
});