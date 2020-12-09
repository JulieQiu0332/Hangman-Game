var volca = ['apple', 'orange', 'grape', 'pear', 'grapefruit', 'pineapple', 'watermelon', 'dragon fruit', 'durian', 'cherry']
//let answer = 'aaabbbcccddd'
let selected_letter = '';
let chance = 6;
var guessNo = -1;
var imgNo = 0;
var guessWord = [];
var currentWord = [];
var good = 0;

const alphabet = document.getElementById('alphabet')
const miss = document.getElementById('miss')
const test = document.getElementById('ccc')
const test2 = document.getElementById('ddd')



const btn_test = document.getElementById('btn_test')
const img = document.getElementById('img')
const letters = document.getElementById('letters')


// miss.innerHTML = wrongGuess;


let AnimationHandler;
let timeHandler;


//alphabet.innerHTML += `<button>abcd</button>`


function setAnswer(){
    var random = Math.floor(Math.random()* volca.length)
    answer = volca[random]
}

function insertAlphabet(){
    var al = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

    al.forEach((letter)=>{

        var new_btn=`  <button class = "btn btn-outline-danger" id="btn_${letter}" onClick="guess('${letter}')">  ${letter}  </button>  `
        alphabet.innerHTML += new_btn
    
    })
}

function guess(string){
    test.innerHTML = string
    check(string)

    console.log(guessNo)
    imgNo +=1;
    if(imgNo <=6){
        img.src = `images/${imgNo}.png`
    }
    
    guessNo +=1;
    popUp()
    win()
    miss.innerHTML = ''+ guessNo;
}

function check(letter){
  
    for(i=0; i< answer.length; i++){
        if(currentWord[i] == '  _  '){
            if(letter == answer[i]){
                currentWord[i] = letter
                good ++;
            }else{
                currentWord[i] = '  _  '
            }
        }
        
    }
    console.log(currentWord)
    showWord()
    var btnId = 'btn_'+letter
    document.getElementById(btnId).setAttribute('disabled', 'true')

 
}

function checkGameOver(){
    if(wrongGuess == change){
        

    }
}

function popUp(){
    if(guessNo >= chance){
        $("#pop-up").css('display', 'block');
        $("#pop-up").css('opacity', '0');
        fadeIn();

    }
}

function win(){

    if(good == answer.length){
        $("#pop-up2").css('display', 'block');
        $("#pop-up2").css('opacity', '1');
        console.log("!!!!!!!")
    }
    console.log(good)
    console.log(answer.length)
    
}

$("#btn_test").click(function(){
    console.log("click")
    
    popUp();
    //fadeIn();
    imgNo +=1;
    img.src = `images/${imgNo}.png`
    
})

var opacityValue =0;

function fadeIn(){
    
    intervalPopUp  = setInterval(function(){
        opacityValue = opacityValue + 0.1;
        $("#pop-up").css('opacity', opacityValue);
        if(opacityValue >= 1){
            $("#pop-up").css('opacity', '1');
            clearInterval(intervalPopUp);
        }
    }, 100);
}
var i =0;



function initWord(){
    var i =0;
    for(i = 0; i< answer.length; i++){
        letters.innerHTML += '  _  '; 
        currentWord.push('  _  ');
    }
}

function showWord(){
    letters.innerHTML = ''
    for(i = 0; i< currentWord.length; i++){
        letters.innerHTML += currentWord[i]; 
    }
}

$("#btn-close").click(function(){
    location.reload();
    return false;
})
$("#btn-close1").click(function(){
    location.reload();
    return false;
})

$("#btn_reset").click(function(){
    location.reload();
    return false;
})



setAnswer();
insertAlphabet();
popUp();
initWord();
showWord();

test.innerHTML = answer

