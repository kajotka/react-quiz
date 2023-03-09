import React, {useState} from "react";
import "./App.css";

function App() {

const [showFinalResult, setFinalResult] = useState(false);
const [score, setScore] = useState(0);
const [currentQuestion, setCurrentQuestion] = useState(0);

const questions = [{
  text: "Wewnątrz którego elementu HTML umieszczamy JavaScript?",
  options: [
   { id: 0, text: "<scripting>", isCorrect: false},
   { id: 1, text: "<javascript>", isCorrect: false},
   { id: 2, text: "<js>", isCorrect: false},
   { id: 3, text: "<script>", isCorrect: true},
  ],
},
{
  text: "Jak napisać instrukcję IF w JavaScript?",
  options: [
   { id: 0, text: "if i = 5", isCorrect: false},
   { id: 1, text: "if i == 5 then", isCorrect: false},
   { id: 2, text: "if i = 5 then", isCorrect: false},
   { id: 3, text: "if (i == 5)", isCorrect: true},
  ],
},
{
  text: "Jak zaczyna się pętla FOR?",
  options: [
   { id: 0, text: "for i = 1 to 5", isCorrect: false},
   { id: 1, text: "for (i = 0; i <=5, i++)", isCorrect: true},
   { id: 2, text: "for (i = 0; i <= 5)", isCorrect: false},
   { id: 3, text: "for (i <= 5, i++)", isCorrect: false},
  ],
},
{
  text: "Co zwróci nam 1 == '1'?",
  options: [
   { id: 0, text: "true", isCorrect: true},
   { id: 1, text: "false", isCorrect: false},
   { id: 2, text: "0", isCorrect: false},
   { id: 3, text: "1", isCorrect: false},
  ],
},
{
  text: "Które z poniższych są prymitywnymi typami danych w JavaScript?",
  options: [
   { id: 0, text: "string", isCorrect: false},
   { id: 1, text: "number", isCorrect: false},
   { id: 2, text: "boolean", isCorrect: false},
   { id: 3, text: "wszystkie z wyżej wymienionych", isCorrect: true},
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
        <h3 className="question-text">{questions[currentQuestion].text}</h3>
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
