const fundo=document.querySelector('.fundo');
const dino = document.querySelector('.dino');
const cactus=document.querySelector('.cactus')
let position = 0;

let isJumping =false;   //saber se o dino esta pulando

function handleKeyUp(event){
    if (event.keyCode === 32){
        if(!isJumping){
        jump();
        }
    }
};

function jump(){
    
    isJumping=true;
    //pulo
    let upInterval = setInterval(() => {
        if (position >= 150){
            clearInterval(upInterval);
    //descer após o pulo        
            let downInterVal= setInterval(()=>{
                if(position <=0){
                    clearInterval(downInterVal)
                    isJumping=false;
                }else
                position -=20;
                dino.style.bottom=position + 'px';
            },20);
        
        }else{
        position +=20;
        dino.style.bottom = position + 'px';
        }  

    },20);
}
//criação dos cactos

function  createCactus(){
    
    const cactus=document.createElement('div');
    cactus.classList.add('cactus');
    cactus.style.left=1000 + 'px';
    
    fundo.appendChild(cactus);
    
    let cactusPosition=1000;
    let randomTime= Math.random()*6000;

   
    fundo.appendChild(cactus);
    
    
    
    let leftInterval = setInterval(()=>{
        if(cactusPosition <-60){
            clearInterval(leftInterval);
            fundo.removeChild(cactus);
        }else if(cactusPosition>0 && cactusPosition<60 && position <60){
            //Gamer Over

            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-Over">Fim de jogo</h1> ';
            
            
            

        }else{
        
        cactusPosition -= 10;
        cactus.style.left = cactusPosition + 'px';
        }

    },20)

   setTimeout(createCactus, randomTime);
    
}

createCactus()
document.addEventListener('keydown', handleKeyUp  );
