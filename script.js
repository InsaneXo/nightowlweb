let timer;
let ele = document.getElementById('timer');

(function (){
    let sec = 59;
    let last = "SEC";
    timer = setInterval(()=>{
        ele.innerHTML = '00 : '+sec;
        sec --;
    }, 1000)
})()

