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

// let arr = [
//     {
//         video:"./images/part1.mp4",
//         cont:"#e0e0e0",
//         div:"#e0e0e0",
//     },
//     {
//         video:"./images/part3.mp4",
//         cont:"#e0e0e0",
//         div:"#e0e0e0",

//     },
   
  
// ]
// let num = 0;
// but.addEventListener("click",function(){
//     num++;
//     if(num == 1){
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

let ans1 = document.querySelectorAll("#ans1");
ans1.forEach(ans1 => {
         ans1.addEventListener("click",function(){
        if(ans1.textContent == "b) Viruses that attack bacteria."){
            ans1.innerHTML = "b) Viruses that attack bacteria.☑️";
        }else{
            alert("Wrong");
        }
    });
   
});




