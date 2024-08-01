let Hour = document.querySelector(".hour");
let Min = document.querySelector(".mins");
let Sec = document.querySelector(".secs");
let timer;
let count = 0;

const reset = () => {
    Min.innerHTML = "00";
    Sec.innerHTML = "00";
    Hour.innerHTML = "00";
    const lab = document.getElementById('labs');
    lab.remove()
};

const start = () =>{
    setInterval(()=>{
        Sec.innerHTML = Number(Sec.innerHTML)+1;
        if(Sec.innerHTML>59){
            Min.innerHTML = Number(Min.innerHTML)+1
            Sec.innerHTML = 0;
            if(Min.innerHTML >59){
                Hour.innerHTML = Number(Hour.innerHTML)+1
                Min.innerHTML = 0;
            }
        }
    }, 1000)
}

const stop = () => {
    clearInterval(timer);
}

const label = () => {
    count++;
    const ele = document.createElement('p')
    let Hour = document.querySelector(".hour");
    let Min = document.querySelector(".mins");
    let Sec = document.querySelector(".secs");
    ele.innerHTML = `lab${count} - ${Hour.innerHTML}:${Min.innerHTML}:${Sec.innerHTML}`
    const lab = document.getElementById('labs');
    lab.appendChild(ele)
}