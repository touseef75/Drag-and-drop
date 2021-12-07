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

// let arr = [
//     {
//         video:"./images/step1.mp4",
//         cont:"#414953",
//     },
//      {
//         video:"./images/step2 (3).mp4",
//         cont:"#96366b",
//     },
//     {
//         video:"./images/step3 (3).mp4",
//         cont:"#000221",

//     },
//     {
//         video:"./images/step4 (2).mp4",
//         cont:"#155234",

//     }
// ]
// let num = 0;
// but.addEventListener("click",function(){
//     num++;
//     if(num == 3){
//         video.src = arr[num].video;
//     cont.style.background = arr[num].cont;
//     num = -1;
//     }else{
//         video.src = arr[num].video;
//     cont.style.background = arr[num].cont;
//     }
    
// });