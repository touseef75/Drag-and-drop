let but = document.getElementById("next");
let video = document.getElementById("video");

let start = document.getElementById("start");
let cont= document.getElementById("container");
let div = document.getElementById("div");
let num = 0;
start.addEventListener("click",function(){
    if(num == 0){
    video.play();
    num = 1;

    }else{
         video.pause();
    num = 0;
    }
})

// let arr = [
//     {
//         video:"./Assets/images/step1.mp4",
//         cont:"#4e4e4e",
//         log:"./Assets/images/logo1.png",
//     },
//     {
//         video:"./Assets/images/step2 (3).mp4",
//         cont:"#f0f6e7",
//         log:"./Assets/images/logo.png",


        

//     }
     
// ]
// let num = 0;
// but.addEventListener("click",function(){
//     num++;
//     if(num == 2){
//         document.getElementById("cont2").style.display = "none";
//         document.getElementById("content").style.display = "";
//         document.getElementById("next").style.display = "none";
//         document.getElementById("start").style.display = "none";
//         num = -1;
//     }else{
//         video.src = arr[num].video;
//     cont.style.background = arr[num].cont;
//     document.getElementById("logo").src = arr[num].log;
//     }
    
// });
// document.getElementById("back").addEventListener("click",function(){
//     document.getElementById("cont2").style.display = "";
//         document.getElementById("content").style.display = "none";
//         document.getElementById("next").style.display = "";
//         document.getElementById("start").style.display = "";
// })