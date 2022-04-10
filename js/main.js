
document.querySelector('button').addEventListener('click', getFetch)
let score = 0
let scoreHere = document.querySelector('#score')
scoreHere.innerText = score
//setting up each answer with an event listener
const answersArray = document.querySelectorAll('li')
Array.from(answersArray).forEach(element => element.addEventListener('click', checkAnswer))
let correctAnswer

let answers
function getFetch(){
  document.getElementById('preventDoubleAnswer').style.display = 'none'
  Array.from(answersArray).forEach(x=>x.classList.remove('incorrect'))
  Array.from(answersArray).forEach(x=>x.classList.remove('correct'))
  const url = `https://opentdb.com/api.php?amount=1&difficulty=easy&type=multiple`
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        answers = data.results[0].incorrect_answers.concat(data.results[0].correct_answer)
        answers = shuffle(answers)
        correctAnswer = data.results[0].correct_answer

        document.querySelector('#invisible').innerHTML = correctAnswer
        console.log(data.results[0].correct_answer)
        console.log(data.results[0])


        document.querySelector('h2').innerHTML = data.results[0].question
        document.querySelector('.one').innerHTML = answers[0]
        document.querySelector('.two').innerHTML = answers[1]
        document.querySelector('.three').innerHTML = answers[2]
        document.querySelector('.four').innerHTML = answers[3]
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

//check answer and increment score
function checkAnswer(click){
  document.getElementById('preventDoubleAnswer').style.display = 'block'
  changeAnswerColor()
  console.log(click.target.innerHTML === document.querySelector('#invisible').innerHTML)
  if(click.target.innerHTML === document.querySelector('#invisible').innerHTML){
      score ++
      scoreHere.innerText = score
}else{
      score --
      scoreHere.innerText = score
}
}

//changes color of answers to show which one is the actual answer
function changeAnswerColor(){
  Array.from(answersArray).forEach(x=>x.innerHTML === document.querySelector('#invisible').innerHTML ? x.classList.add('correct') : x.classList.add('incorrect') )
}


//shuffles the answer choices so that they are in a different order when shown on the screen

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}
