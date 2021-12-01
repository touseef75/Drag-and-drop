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
//         video:"./images/again1.mp4",
//         cont:"",
//         div:"#ffcdcd",
//     },
//     {
//         video:"./images/step2.mp4",
//         cont:"#5526b3",
//         div:"#5526b3",

        

//     },
//     {
//         video:"./images/step3.mp4",
//         cont:"#fcfddb",
//         div:"#fcfddb",

//     },
//     {
//         video:"./images/step4.mp4",
//         cont:"#53da9c",
//         div:"#53da9c",

//     },
//     {
//         video:"./images/step5.mp4",
//         cont:"#fec299",
//         div:"#fec299",

//     },
//      {
//         video:"./images/step6.mp4",
//         cont:"#fcfeb4",
//         div:"#fcfeb4",

//     },
// ]
// let num = 0;
// but.addEventListener("click",function(){
//     num++;
//     if(num == 5){
//         video.src = arr[num].video;
//     cont.style.background = arr[num].cont;
//     div.style.background = arr[num].div;
//     num = -1;
//     }else{
//         video.src = arr[num].video;
//     cont.style.background = arr[num].cont;
//     div.style.background = arr[num].div;
//     }
    
// });