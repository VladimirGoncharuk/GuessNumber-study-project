
const Go = document.querySelector('#Install');
const min =document.querySelector('#inputNumber1');
const max = document.querySelector('#inputNumber2');
const orderNumberField = document.querySelector('#orderNumberField');
const answerField = document.querySelector('#answerField');
let minValue =-999;
let maxValue = 999;
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1 ;
let answerNumber2;
let gameRun = false;
let a;
let b;
let c;
let d;
let m;
    

    
    Go.addEventListener('click',function () { 
      minValue =parseInt(min.value)==0?0:((parseInt(min.value))<-999)?-999:parseInt(min.value)||-999;
       maxValue =parseInt(max.value)==0?0:(parseInt(max.value)>999)?999:parseInt(max.value)|| 999 ; 
       document.querySelector('#minBorder').textContent = minValue ;
       document.querySelector('#maxBorder').textContent = maxValue ;  
        if(minValue>=maxValue||minValue===maxValue-1){
       answerField.innerText =`Дипазон введен не корректно \n ПРИМЕР : -10 ; 25 `;
       gameRun = false;
}else {                  
        answerNumber  = Math.floor((minValue + maxValue) / 2);
        answer(answerNumber);
        orderNumberField.innerText = orderNumber;
        answerField.innerText = `Вы загадали число  ${answerNumber2}?`;
        gameRun = true;
}
 })

document.querySelector('#btnOver').addEventListener('click', function () {
        if (gameRun){
            if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random() * 4);
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                (phraseRandom === 2) ? 
                'Следуйте условию игры \n\u{1F61B}' : 
                (phraseRandom === 3) ? 
                'Ты играешь не по правилам \n\u{1F928}' :
                (phraseRandom === 4) ?
                'Ты забыл свое число ? \n\u{1F978}':
                'Сомнительно, но ты выиграл';
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            answer(answerNumber);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            
            answerField.innerText = `Вы загадали число ${answerNumber2 }?`;
        }
    }  
})

document.querySelector('#btnLess').addEventListener('click', function () {
    if (gameRun){
        if ( maxValue === minValue){
            const phraseRandom = Math.round( Math.random() * 4);
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                (phraseRandom === 2) ? 
                'Следуйте условию игры \n\u{1F61B}' : 
                (phraseRandom === 3) ? 
                'Ты играешь не по правилам \n\u{1F928}' :
                (phraseRandom === 4) ?
                'Это число за твоими пределами \n\u{1F978}':
                'Сомнительно, но ты выиграл';
            answerField.innerText = answerPhrase;
            gameRun = false;
            } else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.ceil((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answer(answerNumber);
            answerField.innerText = `Вы загадали число ${answerNumber2 }?`;
        }
    }

})

document.querySelector('#btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phraseRandom2 = Math.round( Math.random() * 3);
        const answerTrue = (phraseRandom2 === 1) ?
            `Ты все правильно сделал и я угадал !\n\u{1F914}`:
            (phraseRandom2 === 2) ? 
            'Едим в Лас-Вегас?\n\u{1F914}' : 
            (phraseRandom2 === 3) ? 
            ' Мы хорошая команда\n\u{1F914}' :
            'Старая добрая теория вероятности\n\u{1F914}';    
        answerField.innerText = answerTrue;
        gameRun = false;
    }
})

document.querySelector('#btnRetry').addEventListener('click', function () {
    
    answerField.innerText = `Для игры  нажмите кнопку cверху!`;
     orderNumberField.innerText='';
     minValue;
     maxValue;
     document.querySelector('#minBorder').textContent = "" ;
       document.querySelector('#maxBorder').textContent = "" ;
     gameRun = false
 })

function answer(answerNumber){
if((answerNumber.toString().length)==1){ if (answerNumber==0){
  answerNumber2=0} else {
  one();
  minus();
    answerNumber2 = `${m}${a}`;}
}else if ((answerNumber.toString().length)==2){
  one();
  two();
  minus(); 
  answerNumber2 = `${m}${b}${a}`;
  if(answerNumber2.length < 20){answerNumber2 }
  else{answerNumber2=answerNumber}
  
} else if ((answerNumber.toString().length)>=3){
  one();
  two();
  three();
  minus(); 
  answerNumber2 = `${m}${c}${b}${a}`
  if(answerNumber2.length < 20){answerNumber2}
  else{answerNumber2=answerNumber}
  
  } 
  
}
  function one() { 
 switch (answerNumber.toString().substr(-1, 1)) {
    case '1':
        a ="один";
      break;
    case '2':
        a ="два";
      break;
    case '3':
        a ="три";
      break;
      case '4':
        a ="четыре";
      break;
    case '5':
        a ="пять";
      break;
    case '6':
        a ="шесть";
     break;
        case '7':
          a ="семь";
        break;
      case '8':
          a ="восемь";
        break;
      case '9':
          a ="девять";
          break;
                
    default:
        a="";
}

  }

  function three(){
    switch (answerNumber.toString().substr(-3, 1)) {
        case '1':
            c ="сто ";
          break;
        case '2':
            c ="двести ";
          break;
        case '3':
            c ="триста ";
          break;
          case '4':
            c ="четыреста ";
          break;
        case '5':
            c ="пятьсот ";
          break;
        case '6':
            c ="шестьсот ";
         break;
            case '7':
              c ="семьсот ";
            break;
          case '8':
              c ="восемьсот ";
            break;
          case '9':
              c ="девятьсот ";
              break;
          
        default:
            c="";
    }
  }

  function two(){

            switch (answerNumber.toString().substr(-2, 1)) {
                case '1':
                    
                 Row();
                 b = d;
                 a ="";
                  break;
                  
                case '2':
                    b ="двадцать ";
                  break;
                case '3':
                    b ="тридцать ";
                  break;
                  case '4':
                    b ="сорок ";
                  break;
                case '5':
                    b ="пятьдесят ";
                  break;
                case '6':
                    b ="шестьдесят ";
                 break;
                    case '7':
                      b ="семьдесят ";
                    break;
                  case '8':
                      b ="восемьдесят ";
                    break;
                  case '9':
                      b ="девяносто ";
                      break;
                  
                 default:
                        b="";

            }
          
                    function Row() {
                switch (answerNumber.toString().substr(-2, 2)) {
                    case '10':
                        d ="десять";
                      break;
                    case '11':
                        d ="одинадцать";
                      break;
                      
                    case '12':
                        d ="двенадцать";
                      break;
                    case '13':
                        d ="тринадцать";
                      break;
                      case '14':
                        d ="четырнадцать";
                      break;
                    case '15':
                        d ="пятнадцать";
                      break;
                    case '16':
                        d ="шестнадцать";
                     break;
                        case '17':
                          d ="семнадцать";
                        break;
                      case '18':
                          d ="восемьнадцать";
                        break;
                      case '19':
                          d ="девятнадцать";
                          break;
                      
                    default:
                        d ="";     
                }               

              }    
            }
            function minus(){
            switch (answerNumber.toString().substr(0, 1)) {
              case '-':
              m = "минус "
              break;
              default:
                      m ="";
          }
        }
          
          
           
          
                   







 







