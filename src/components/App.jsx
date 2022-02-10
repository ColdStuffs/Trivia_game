import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function Question(props) {
  return <div>{props.question}</div>;
}

function App() {
  let currentQuestion = 0;
  console.log(data[0].question.text);

  return (
    <div className="App">
      <Question question={data[currentQuestion].question.text} />
    </div>
  );
}

export default App;
// I'm going to stop the session now so stop typing.
