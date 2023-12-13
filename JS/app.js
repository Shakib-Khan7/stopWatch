
let num = 0;
const startTime = () => {


    
    const intervalID = setInterval(() => {
        
        console.log(num++)
        const time = document.getElementById('time');
        time.innerText = `${num}`;

    }, 1000)
    const pause = document.getElementById('pause');
    pause.addEventListener('click',function(){
        clearInterval(intervalID);
    });
    const reset = document.getElementById('reset');
    reset.addEventListener('click',function(){
        
        num = 0;
        const time = document.getElementById('time');
        time.innerText = `${num}`;
        clearInterval(intervalID);

    })

}



// const timeoutID = setTimeout(()=>{
//     console.log('lazy')
// },3000);
// console.log(4)


// let num = 0;
// const intervalID = setInterval(()=>{
//     console.log(num++)
// },1000)