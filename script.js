function ricominciaQuiz(){
    document.querySelector('#risultato').innerHTML="";
    
    for(let risposta of rispostePossibili){

        if(risposta.dataset.questionId === "one"){             
             risposta.addEventListener('click',selezioneDomanda1);
             console.log("Reimpostato l'handler a domanda 1");
        }
 
        if(risposta.dataset.questionId === "two"){ 
             risposta.addEventListener('click',selezioneDomanda2);
             console.log("Reimpostato l'handler a domanda 2");            
        }
    
        if(risposta.dataset.questionId === "three"){
             risposta.addEventListener('click',selezioneDomanda3);
             console.log("Reimpostato l'handler a domanda 3");    
        }
 
        if(risposta.className === 'selezionati'){
                risposta.querySelector('.checkbox').src="images/unchecked.png";
                risposta.classList.remove('selezionati');
               
        }
        if(risposta.className === 'nonSelezionati'){
            risposta.classList.remove('nonSelezionati');
        }

    }
}



function displayRisultato(personalita){
    const titolo = document.createElement('h1');
    const testo = document.createElement('p');
    const bottone = document.createElement('button');

    titolo.textContent = RESULTS_MAP[personalita].title;
    testo.textContent = RESULTS_MAP[personalita].contents;
    bottone.textContent = "Ricomincia il quiz";

    const ris = document.querySelector('#risultato');
    ris.appendChild(titolo);
    ris.appendChild(testo);
    ris.appendChild(bottone);
    

    document.querySelector('button').addEventListener('click',ricominciaQuiz);
}





function risultatoPersonalita(){

        console.log("risultato");
    for(let risposta of rispostePossibili){

        if(risposta.dataset.questionId === "one"){
            console.log("rimosso handler domanda1"); 
            risposta.removeEventListener('click',selezioneDomanda1);
        }
     
        if(risposta.dataset.questionId === "two"){
            console.log("rimosso handler domanda2");
            risposta.removeEventListener('click',selezioneDomanda2);
        }
        
        if(risposta.dataset.questionId === "three"){
            console.log("rimosso handler domanda3");
            risposta.removeEventListener('click',selezioneDomanda3);
      
        }
     
    }

    if(((scelte.one !== scelte.two)&&(scelte.one !== scelte.three)&&(scelte.two !== scelte.three)) ||
         (scelte.one === scelte.two)&&(scelte.one === scelte.three)&&(scelte.two === scelte.three)  ||
         ((scelte.one === scelte.two)||(scelte.one === scelte.three)))
    {
         console.log("La personalità vincente è: " + scelte.one);
         displayRisultato(scelte.one);
    }
    else if((scelte.two === scelte.three)){
        console.log("La personalità vincente è: " + scelte.two);
        displayRisultato(scelte.two);
    }

    for(let chiave in scelte){
        delete scelte[chiave];
    }
    

}

function controllaFineTest(event){
    let i=0;
        for(let chiave in scelte){
            ++i;
            if(i===3)
                risultatoPersonalita();               
        }
}



function selezioneDomanda1(event){
    console.log("Cliccato sulla risposta domanda 1");
    const sel = event.currentTarget;
    let personalita =  sel.dataset.choiceId
    scelte[sel.dataset.questionId] = personalita;
    console.log(scelte);


    sel.querySelector('.checkbox').src = "images/checked.png";
    
 
    if (sel.className === 'nonSelezionati'){
           sel.classList.remove('nonSelezionati');
    }



    for(let risposta of risposteDom1){
        
        if((risposta.dataset.choiceId !== personalita)&&(risposta.className === 'selezionati')){
            risposta.querySelector('.checkbox').src = "images/unchecked.png";
            risposta.classList.remove('selezionati');
            risposta.addEventListener('click',selezioneDomanda1);
        }
        if(risposta.dataset.choiceId !== personalita){
            risposta.classList.add('nonSelezionati');
        }
        else{
            risposta.classList.add('selezionati');
            risposta.removeEventListener('click',selezioneDomanda1);
        }
       
    }

    controllaFineTest();   
    
}








function selezioneDomanda2(event){
    console.log("Cliccato sulla risposta domanda 2");
    const sel = event.currentTarget;
    let personalita =  sel.dataset.choiceId
    scelte[sel.dataset.questionId] = personalita;
    console.log(scelte);


    sel.querySelector('.checkbox').src = "images/checked.png";
    
 
    if (sel.className === 'nonSelezionati'){
           sel.classList.remove('nonSelezionati');
    }



    for(let risposta of risposteDom2){
        
        if((risposta.dataset.choiceId !== personalita)&&(risposta.className === 'selezionati')){
            risposta.querySelector('.checkbox').src = "images/unchecked.png";
            risposta.classList.remove('selezionati');
            risposta.addEventListener('click',selezioneDomanda2);
        }
        if(risposta.dataset.choiceId !== personalita){
            risposta.classList.add('nonSelezionati');
        }
        else{
            risposta.classList.add('selezionati');
            risposta.removeEventListener('click',selezioneDomanda2);
        }
       
    }
    controllaFineTest();

}



function selezioneDomanda3(event){
    console.log("Cliccato sulla risposta domanda 3");
    const sel = event.currentTarget;
    let personalita =  sel.dataset.choiceId
    scelte[sel.dataset.questionId] = personalita;
    console.log(scelte);


    sel.querySelector('.checkbox').src = "images/checked.png";
    
 
    if (sel.className === 'nonSelezionati'){
           sel.classList.remove('nonSelezionati');
    }

    for(let risposta of risposteDom3){
        
        if((risposta.dataset.choiceId !== personalita)&&(risposta.className === 'selezionati')){
            risposta.querySelector('.checkbox').src = "images/unchecked.png";
            risposta.classList.remove('selezionati');
            risposta.addEventListener('click',selezioneDomanda3);
        }
        if(risposta.dataset.choiceId !== personalita){
            risposta.classList.add('nonSelezionati');
        }
        else{
            risposta.classList.add('selezionati');
            risposta.removeEventListener('click',selezioneDomanda3);
        }
       
       
    }

    controllaFineTest();
    
}





// Main


let scelte = {}; 


const risposteDom1 = [];
const risposteDom2 = [];
const risposteDom3 = [];

const rispostePossibili = document.querySelectorAll('.choice-grid div');

for(let risposta of rispostePossibili){

       if(risposta.dataset.questionId === "one"){
            console.log("Caricato elemento domanda 1");            
            risposta.addEventListener('click',selezioneDomanda1);
            risposteDom1.push(risposta);
       }

       if(risposta.dataset.questionId === "two"){
            console.log("Caricato elemento domanda 2");
            risposta.addEventListener('click',selezioneDomanda2);
            risposteDom2.push(risposta);
       }
   
       if(risposta.dataset.questionId === "three"){
            console.log("Caricato elemento domanda 3");
            risposta.addEventListener('click',selezioneDomanda3);
            risposteDom3.push(risposta);
       }

}