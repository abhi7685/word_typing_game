const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'function',
    'cocktail',
    'runaway',
    'violate',
    'book',
    'inaugurate',
    'journey',
    'representative',
    'developer',
    'establishment',
    'hero',
    'display',
    'exchange',
    'javascript',
    'victorious',
    'revolver',
    'delicious',
    'echo',
    'optimize',
    'siblings',
    'investigate',
    'reponsible',
    'parallel',
    'horrendous',
    'symptom',
    'tiresome',
    'laughter',
    'magic',
    'innovate',
    'target',
    'honorable',
    'secret',
    'next',
    'previous',
    'space',
    'harsh',
    'synonymous',
    'definition',
    'submit',
    'simple',
    'repeat',
    'element',
    'manipulation',
    'style',
    'country',
    'congratulate',
    'existence',
    'bored',
    'error',
    'debug',
    'console',
    'skilful',
    'influence',
    'celebration',
    'malicious'
  ];
  let score = 0;
  let isPlaying;
  
const curr_word = document.querySelector('#word')
const input_word = document.querySelector('#inputterm')
const scoreDisplay = document.querySelector('#score')
const timeDisplay = document.querySelector('#timeleft');
const result = document.querySelector('#result');
const s = document.querySelector('select')
let within_sec = document.querySelector('#sec')
let currentLevel;
let time ;
const start = document.querySelector('#start')
s.addEventListener('change',() =>{
      if (s.value == ""){
          within_sec.innerHTML = s.value
          alert("Choose a level")
      }
      else{
      within_sec.innerHTML = s.value
      currentLevel = parseInt(s.value,10);
      time = currentLevel;
     
}
}) 
start.addEventListener('click',init)
function init(){
  if (sec.innerHTML== "")
  {
    alert("Choose a level")
  }
  else{
  result.innerHTML=""
  input_word.focus()
  input_word.value=""
  showWords(words)
  input_word.addEventListener('input',match)
  setInterval(countdown,1000)
  setInterval(checkStatus,50)
  }
}

function match(){
    if(matched()){
        isPlaying =true
        score++
        time= currentLevel+1
        showWords(words)
        input_word.value=""
        
    }
    if(score==-1){
        scoreDisplay.innerHTML =0
    }
    else{
        scoreDisplay.innerHTML =score
        }
}

function showWords(words){
    const randIndex = Math.floor(Math.random() * words.length);
        curr_word.innerHTML =words[randIndex]
}

function matched(){
    if (input_word.value===curr_word.innerHTML){
        result.innerHTML = "Correct !!!"
        result.classList.add("correct")
        result.classList.remove("over")
        return true
    }
    else{
        result.innerHTML= ""
        return false
    }
}
function countdown() {
    if (time > 0) {
      time--;
    } else if (time === 0) {
      isPlaying = false;
    }

    timeDisplay.innerHTML = time;
  }
  function checkStatus() {
    if (!isPlaying && time === 0) {
      result.innerHTML = 'Game Over!!!';
      result.classList.add("over")
      result.classList.remove("correct")
      score = -1;
    }
  }
