//1: start by creating functions for the following items, 1. add 2. subtract 3. multiply 4. divide 
add = (a, b) =>{return ((a*10) + (b*10))/10}
subtract = (a, b) =>{return ((a*10) - (b*10))/10}
multiply = (a, b) =>{return a * b}
divide = (a, b) => {return a/b}
divideZero = function(){
    a = ''; 
    b= ''; 
    operand = ''; 
    display.innerHTML = '0'; 
}

a = ''; 
b = ''; 
operand = ''; 

operate = function(a, operand, b){
    if(operand === '+'){
        return add(a, b)
    } 
    else if(operand === '-'){
        return subtract(a, b) 
    } 
    if(operand === '*'){
        return multiply(a, b) 
    } 
    if(operand === '/'){
        if(b === 0){
            alert('Je kunt niet delen door 0'); 
            a = ''; 
            b= ''; 
            operand = ''; 
            return '0' 
        } else{
            return divide(a, b)
        }
    }
}

let display = document.getElementById("display");
const btn1 = document.querySelector('.btnone'); 
const btn2 = document.querySelector('.btntwo'); 
const btn3 = document.querySelector('.btnthree'); 
const btn4 = document.querySelector('.btnfour'); 
const btn5 = document.querySelector('.btnfive'); 
const btn6 = document.querySelector('.btnsix'); 
const btn7 = document.querySelector('.btnseven'); 
const btn8 = document.querySelector('.btneight'); 
const btn9 = document.querySelector('.btnnine'); 
const btn0 = document.querySelector('.btnzero');
const btnbackspace = document.querySelector('.btndelete'); 
const btnclear = document.querySelector('.btnclear'); 
const btndecimal = document.querySelector('.btnadddecimal'); 
const btnplus = document.querySelector('.btnplus'); 
const btnminus = document.querySelector('.btnminus'); 
const btndelendoor = document.querySelector('.btndelendoor'); 
const btnmultiply = document.querySelector('.btnmultiply'); 
const btnanswer = document.querySelector('.btnanswer');

const functieNummer = function(number){
    if(display.innerHTML === '0' && operand !== '+' &&operand !== '-' &&operand !=='/' &&operand !=='*'){
        a = a+number; 
        display.innerHTML = number.toString();  
    } else if(display.innerHTML !== '0' && operand ===''){
        a = a+number; 
        display.innerHTML = display.innerHTML + number.toString(); 
    } else if(display.innerHTML !== '0' && operand === '+' || operand ==='-' ||operand==='/' ||operand ==='*'){
        b = b+number; 
        display.innerHTML = display.innerHTML + number.toString(); 
    }
}

const functieEen = () => {functieNummer(1)}  
btn1.addEventListener('click', functieEen); 
const functieTwee = () => {functieNummer(2)}  
btn2.addEventListener('click', functieTwee); 
const functieDrie = () => {functieNummer(3)}  
btn3.addEventListener('click', functieDrie); 
const functieVier = () => {functieNummer(4)}  
btn4.addEventListener('click', functieVier);
const functieVijf = () => {functieNummer(5)}  
btn5.addEventListener('click', functieVijf);
const functieZes = () => {functieNummer(6)}  
btn6.addEventListener('click', functieZes);
const functieZeven = () => {functieNummer(7)}  
btn7.addEventListener('click', functieZeven);
const functieAcht = () => {functieNummer(8)}  
btn8.addEventListener('click', functieAcht);
const functieNegen = () => {functieNummer(9)}  
btn9.addEventListener('click', functieNegen);
const functieNul = () => {functieNummer(0)}  
btn0.addEventListener('click', functieNul);

//------------------------------------------------operands: 
const functiePlus= () =>{   /*plus*/ 
    if(operand === '+' &&b===''){
        display.innerHTML = display.innerHTML;
    }
    else if(operand ==='+' &&b!==''){
        a = Number(a); 
        b = Number(b); 
        let antwoord = operate(a, operand, b); 
        antwoord = Math.round(antwoord*1000)/1000; //ROND AF TOT 3 DECIMALEN!!!!!
        display.innerHTML = antwoord + '+'; 
        operand = '+'; 
        b = ''; 
        a = antwoord.toString(); 
        d= '0';  
    }
    else if(operand === ''){
        display.innerHTML = display.innerHTML + '+'; 
        operand = '+'; 
    }
    /*Code om een operator te vervangen met + als er al een andere operator staat*/
    else if(operand === '-' || operand === '*' || operand === '/'){
        if(b===''){
            if(operand ==='-'){display.innerHTML = display.innerHTML.replace('-', '+'); operand = '+'}
            else if(operand ==='*'){display.innerHTML = display.innerHTML.replace('*', '+'); operand = '+'}
            else if(operand ==='/'){display.innerHTML = display.innerHTML.replace('/', '+'); operand = '+'}
        } else if (b!==''){
            a = Number(a); 
            b = Number(b); 
            let antwoord = operate(a, operand, b); 
            antwoord = Math.round(antwoord*1000)/1000; //ROND AF TOT 3 DECIMALEN!!!!!
            display.innerHTML = antwoord + '+'; 
            operand = '+'; 
            b = ''; 
            a = antwoord.toString(); 
            d = '0'
        }
    }
}; 
btnplus.addEventListener('click', functiePlus); 

const functieMinus = () =>{ /*min*/
    if(operand === '-' &&b===''){
        display.innerHTML = display.innerHTML;
    }
    else if(operand ==='-' &&b!==''){
        a = Number(a); 
        b = Number(b); 
        let antwoord = operate(a, operand, b); 
        antwoord = Math.round(antwoord*1000)/1000; //ROND AF TOT 3 DECIMALEN!!!!!
        display.innerHTML = antwoord + '-'; 
        operand = '-'; 
        b = ''; 
        a = antwoord.toString(); 
        d= '0';  
    }
    else if(operand === ''){
        display.innerHTML = display.innerHTML + '-'; 
        operand = '-'; 
    }
    /*Code om een operator te vervangen met + als er al een andere operator staat*/
    else if(operand === '+' || operand === '*' || operand === '/'){
        if(b===''){ 
            if(operand ==='+'){display.innerHTML = display.innerHTML.replace('+', '-'); operand = '-'}
            else if(operand ==='*'){display.innerHTML = display.innerHTML.replace('*', '-'); operand = '-'}
            else if(operand ==='/'){display.innerHTML = display.innerHTML.replace('/', '-'); operand = '-'}
        } else if (b!==''){
            a = Number(a); 
            b = Number(b); 
            let antwoord = operate(a, operand, b); 
            antwoord = Math.round(antwoord*1000)/1000; //ROND AF TOT 3 DECIMALEN!!!!!
            display.innerHTML = antwoord + '-'; 
            operand = '-'; 
            b = ''; 
            a = antwoord.toString(); 
            d = '0'
        }
    }
}; 
btnminus.addEventListener('click', functieMinus); //waarom moet dit onder de functie?

const functieMultiply = () =>{ /*multiply*/
    if(operand === '*' &&b===''){
        display.innerHTML = display.innerHTML; 
    }
    else if(operand ==='*' &&b!==''){
        a = Number(a); 
        b = Number(b); 
        let antwoord = operate(a, operand, b); 
        antwoord = Math.round(antwoord*1000)/1000; //ROND AF TOT 3 DECIMALEN!!!!!
        display.innerHTML = antwoord + '*'; 
        operand = '*'; 
        b = ''; 
        a = antwoord.toString(); 
        d= '0';  
    }
    else if(operand === ''){
        display.innerHTML = display.innerHTML + '*'; 
        operand = '*'; 
    }
    /*Code om een operator te vervangen met + als er al een andere operator staat*/
    else if(operand === '+' || operand === '-' || operand === '/'){
        if(b===''){
            if(operand ==='+'){display.innerHTML = display.innerHTML.replace('+', '*'); operand = '*'}
            else if(operand ==='-'){display.innerHTML = display.innerHTML.replace('-', '*'); operand = '*'}
            else if(operand ==='/'){display.innerHTML = display.innerHTML.replace('/', '*'); operand = '*'}
        } else if (b!==''){
            a = Number(a); 
            b = Number(b); 
            let antwoord = operate(a, operand, b); 
            antwoord = Math.round(antwoord*1000)/1000; //ROND AF TOT 3 DECIMALEN!!!!!
            display.innerHTML = antwoord + '*'; 
            operand = '*'; 
            b = ''; 
            a = antwoord.toString(); 
            d = '0'
        }
    }
};
btnmultiply.addEventListener('click', functieMultiply); 

const functieDivide = () =>{ /*delendoor*/
    if(operand === '/' &&b===''){
        display.innerHTML = display.innerHTML;
    }
    else if(operand ==='/' &&b!==''){
        a = Number(a); 
        b = Number(b); 
        let antwoord = operate(a, operand, b); 
        antwoord = Math.round(antwoord*1000)/1000; //ROND AF TOT 3 DECIMALEN!!!!!
        display.innerHTML = antwoord + '/'; 
        operand = '/'; 
        b = ''; 
        a = antwoord.toString();
        d = '0';  
    }
    else if(operand === ''){
        display.innerHTML = display.innerHTML + '/'; 
        operand = '/'; 
    }
    /*Code om een operator te vervangen met + als er al een andere operator staat*/
    else if(operand === '+' || operand === '-' || operand === '*'){
        if(b===''){
            if(operand ==='+'){display.innerHTML = display.innerHTML.replace('+', '/'); operand = '/'}
            else if(operand ==='-'){display.innerHTML = display.innerHTML.replace('-', '/'); operand = '/'}
            else if(operand ==='*'){display.innerHTML = display.innerHTML.replace('*', '/'); operand = '/'}
        } else if (b!==''){
            a = Number(a); 
            b = Number(b); 
            let antwoord = operate(a, operand, b); 
            antwoord = Math.round(antwoord*1000)/1000; //ROND AF TOT 3 DECIMALEN!!!!!
            display.innerHTML = antwoord + '/'; 
            operand = '/'; 
            b = ''; 
            a = antwoord.toString(); 
            d = '0'
        }
    }

}; 
btndelendoor.addEventListener('click', functieDivide); 

//CLEAR CLEAR CLEAR 
const functieClear = () =>{ /*clear*/
    display.innerHTML = '0';  
    a = ''; 
    b = ''; 
    operand = ''; 
    c= '0'; 
    d= '0'; 
}
btnclear.addEventListener('click', functieClear); 

// PUNT ---------------------------------------------------------------------------------- 
c= '0'; 
d= '0'; 
const functieDot = () =>{
    //als er geen operand is en enkel a een waarde heeft: 
    if(operand === '' &&( a === 0 ||a!=='' || a!=0|| a !== '' && a!= 0)){
        if(c==='0'){
            display.innerHTML = display.innerHTML + '.'; 
            a += '.'; 
            c = '1'; 
        }
        //als er al een punt is (c==='1'), geen punt toevoegen
        else if(c==='1'){
            display.innerHTML = display.innerHTML; 
            a=a; 
        }
    } 
    //zorgt ervoor dat 0. + 0. geen NaN geeft
    else if(operand === '' && a === ''){
        display.innerHTML = display.innerHTML + '.'; 
        a+= '0.'
        c = '1'; 
    }
    //als er wel een operand is
    else if(operand === '+'|| operand === '*' || operand ==='/'|| operand === '-'){
        //en als b leeg is: 
        if(b === ''){
            if(d==='0'){
                display.innerHTML = display.innerHTML + '0.'; 
                b+= '0.';
                d = '1'; 
            }
        } 
        //en als b een waarde heeft: 
        else if(b !== ''||b===0 && a!=0){
            if(d==='0'){
                display.innerHTML = display.innerHTML + '.'; 
                b += '.'; 
                d = '1'; 
            }
        } 
    }    
}
btndecimal.addEventListener('click', functieDot); 

//------------------------------------------------Answer: 
const functieAnswer = () =>{ /*answer*/
    a = Number(a); 
    if(b === ''){
        display.innerHTML = display.innerHTML 
        /*waarom moet dit statement eerst en kan niet het andere statement eerst? 
        als het andere statement altijd eerst gaat, dan */
        a = a.toString();
    }
    
    else if(operand === '+' || operand === '-' || operand === '*' || operand === '/' && b!=''||b===0){
        b = Number(b); //naar binnen verplaatst, anders converteert die naar 0 terwijl het in de 
        //het eerste if statement een lege waarde moet hebben
        let antwoord = operate(a, operand, b);  
        antwoord = Math.round(antwoord*1000)/1000; //ROND AF TOT 3 DECIMALEN!!!!!
        display.innerHTML = antwoord; 

        operand = ''; 
        b = ''; 
        a = antwoord.toString(); //to string omdat die anders als doorrekennumer verschijnt
        //is antwoord 44, doe je er 3 bij dan telt die het niet meer goed op zonder .toString
        if(antwoord % 1 !== 0){
            c = '1';
            d = '0'; 
        } else if(antwoord % 1 ===0){
            c = '0'; 
            d = '0'; 
        }; 
    }   
}
btnanswer.addEventListener('click', functieAnswer); 

///-------------------------Backspace
const functieBackspace=()=>{
    //1: haal waarde uit het display op en zet om naar array
    //2: haal het laatste item uit de array middels .pop(), sla op in removed
    //3: Bouw de array weer om tot een string en verwijder de komma's
    arrayDisplay = Array.from(display.innerHTML); 
    removed = arrayDisplay.pop();
    arrayDisplay = arrayDisplay.join(""); 
    display.innerHTML = arrayDisplay.toString();  
    
    //4: update de waarden in de variabelen om de berekening kloppend te maken: 
    //als de operand leeg is en de waarde een getal, 
    if(operand== '' ){
        if(removed === '1'||removed ==='2'||removed === '3'||removed ==='4' ||removed ==='5' /*
    */ ||removed ==='5'||removed ==='6'|| removed ==='7' ||removed ==='8'||removed==='9'||removed ==='0' ){
            //Slice één waarde weg uit a
            a = a.slice(0, -1); 
            //als a hierna leeg is, maak innerHTML van display 0
            if(a === ''){
                display.innerHTML = '0'; 
            }
        }
        else if(removed === '.'){
            a = a.slice(0, -1); 
            c = '0'; 
            if(a === ''){
                display.innerHTML = '0'; 
            }
        }
    }
    //als de operand een waarde heeft
    else if(operand== '+'||operand== '-'||operand== '*'||operand== '/'){
       //als een getal wordt verwijderd
    if(removed === '1'||removed ==='2'||removed === '3'||removed ==='4' ||removed ==='5' /*
    */ ||removed ==='5'||removed ==='6'|| removed ==='7' ||removed ==='8'||removed==='9'|| removed ==='0' ){
            //Slice één waarde weg uit b
            b = b.slice(0, -1); 
            //als a hierna leeg is, maak innerHTML van display 0
        }
        //als punt wordt verwijderd, d=0 zodat een punt weer kan worden toegevoegd
        else if(removed==='.'){
            b = b.slice(0, -1); 
            d = '0'; 
        }
        if(removed ==='+'|| removed ==='-'|| removed ==='*'|| removed ==='/'){ operand = ''; }
    }   
}
btnbackspace.addEventListener('click', functieBackspace); 

//Keyboard Support
window.addEventListener('keydown', function(e){ 
    if(e.keyCode === 191){functieDivide();}
    if(e.keyCode === 88){functieMultiply();}
    if(e.keyCode === 187 && e.shiftKey == false){functiePlus();}
    if(e.keyCode === 189){functieMinus();}
    if(e.keyCode === 8){functieBackspace();}
    if(e.keyCode === 13){functieAnswer(); event.preventDefault();} //haalt default gedrag enter weg 
    if(e.keyCode === 190){functieDot();}
    if(e.keyCode === 46){functieClear();}
    if(e.keyCode === 49){functieNummer(1);}
    if(e.keyCode === 50){functieNummer(2);}
    if(e.keyCode === 51){functieNummer(3);}
    if(e.keyCode === 52){functieNummer(4);}
    if(e.keyCode === 53){functieNummer(5);}
    if(e.keyCode === 54){functieNummer(6);}
    if(e.keyCode === 55){functieNummer(7);}
    if(e.keyCode === 56){functieNummer(8);}
    if(e.keyCode === 57){functieNummer(9);}
    if(e.keyCode === 48){functieNummer(0);}
    /*waarom wordt er het laatste nummer toegevoegd wat je in de rekenmachine hebt gezet 
    als je op enter drukt? Terwijl die code overal is verwijderd? --> gebruik event.preventDefault */
}); 
