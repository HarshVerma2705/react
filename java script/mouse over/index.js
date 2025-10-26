// let abcde = document.querySelector("#abcde");

// abcde.addEventListener("mouseover",function(){
//     abcde.style.backgroundColor ="yellow";
// });
// abcde.addEventListener("mouseout",function(){
//     abcde.style.backgroundColor ="red";
// });
let abcde = document.querySelector("#abcde");
window.addEventListener("mousemove",function(dets){
    abcde.style.top= dets.clientY +"px";
    abcde.style.left= dets.clientX +"px";
});