

// create bubble


let hit=Math.floor(Math.random()*10)
let score=0

document.querySelector('.hit').textContent=hit;


const bubble=()=>{

    let rand=Math.floor(Math.random()*10);
    

    for(let i=0;i<140;i++){
        rand=Math.floor(Math.random()*10);
            
        document.querySelector('.bubble_container').innerHTML+=`<div class="bubbles">${rand}</div>`;

    };


}



const settime=()=>{
    let second=60

   const timer=setInterval(() => {

        second--;

        document.querySelector('.time').textContent=second;

        if (second===0){
            clearInterval(timer)
            document.querySelector('.bubble_container').innerHTML=`<h4>  Game Over and final score  ${score} <h4> `         
        }

    }, 1000);



}

const main_logic=()=>{

    settime();
    bubble();


    document.querySelector('.bubble_container').addEventListener('click',(e)=>{
      
        let user_input=Number(e.target.textContent)
        console.log(user_input)
        console.log(hit)
        
        if (user_input===hit){
            score+=10

            hit=Math.floor(Math.random()*10)
            document.querySelector('.hit').textContent=hit
            document.querySelector('.score').textContent=score;

        }
    
    
    

    })


}




document.querySelector('#start_game').addEventListener('click',(e)=>{
    main_logic()
})

