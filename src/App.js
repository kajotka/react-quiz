import React, {useState} from "react";
import "./App.css";

function App() {

const [showFinalResult, setFinalResult] = useState(false);
const [score, setScore] = useState(0);
const [currentQuestion, setCurrentQuestion] = useState(0);

const questions = [{
  text: "Jaki jest mój ulubiony kolor?",
  options: [
   { id: 0, text: "aaaaaaaaa", isCorrect: false},
   { id: 1, text: "bbb", isCorrect: false},
   { id: 2, text: "ccc", isCorrect: false},
   { id: 3, text: "afdddda", isCorrect: true},
  ],
},
{
  text: "B",
  options: [
   { id: 0, text: "aaaaaaaaa", isCorrect: false},
   { id: 1, text: "aaaaaaaaa", isCorrect: false},
   { id: 2, text: "aaaaaaaaa", isCorrect: false},
   { id: 3, text: "aaaaaaaaa", isCorrect: true},
  ],
},
{
  text: "C",
  options: [
   { id: 0, text: "aaaaaaaaa", isCorrect: false},
   { id: 1, text: "aaaaaaaaa", isCorrect: false},
   { id: 2, text: "aaaaaaaaa", isCorrect: false},
   { id: 3, text: "aaaaaaaaa", isCorrect: true},
  ],
},
{
  text: "D",
  options: [
   { id: 0, text: "aaaaaaaaa", isCorrect: false},
   { id: 1, text: "aaaaaaaaa", isCorrect: false},
   { id: 2, text: "aaaaaaaaa", isCorrect: false},
   { id: 3, text: "aaaaaaaaa", isCorrect: true},
  ],
},
{
  text: "E",
  options: [
   { id: 0, text: "aaaaaaaaa", isCorrect: false},
   { id: 1, text: "aaaaaaaaa", isCorrect: false},
   { id: 2, text: "aaaaaaaaa", isCorrect: false},
   { id: 3, text: "aaaaaaaaa", isCorrect: true},
  ],
},

]

const optionClicked = (isCorrect) => {
  if (isCorrect) {
    setScore(score + 1);
  }
  if (currentQuestion + 1 < questions.length) {
  setCurrentQuestion(currentQuestion + 1);
  } else {
    setFinalResult(true);
  }
}

const restartGame = () => {
  setScore(0);
  setCurrentQuestion(0);
  setFinalResult(false);

}






  return (
    <div className="App">
      <h1>JavaScript Quiz</h1>
      <h2>Obecny wynik: {score}</h2>
      {showFinalResult ? (
         <div className="final-result">
         <h1>Ostateczny wynik</h1>
         <h2>{score} z {questions.length} poprawnie - ({(score/questions.length) * 100}%) </h2>
           <button onClick={() => restartGame()}>Graj od nowa!</button>
       </div>
      ) : (
      <div className="question-card">
        <h2>Pytanie {currentQuestion + 1} z {questions.length}</h2>
        <h3 className="question-text">Blablabla</h3>
        <ul>
         {questions[currentQuestion].options.map((option) => {
          return (
            <li onClick={() => optionClicked(option.isCorrect)}   key={option.id}>{option.text}</li>
          );
         })
         
         }
        </ul>  
    </div>
  )}
  </div>
  );
      }

export default App;
