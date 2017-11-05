import { Injectable } from '@angular/core';
import { Question } from '../Question';

@Injectable()
export class DataService {
  questions:Question[];

  constructor() {
   }

// Get Questions from LS
getQuestions(){
  if(localStorage.getItem('questions') === null){
    this.questions = [];
  } else{
    this.questions = JSON.parse(localStorage.getItem('questions'))
  }
  return this.questions
}

// Add Questions from LS
addQuestion(question:Question){
  this.questions.unshift(question)

  //init lacal var
    let questions;

  if(localStorage.getItem('questions') === null){
     questions = [];
     //Push new question
     questions.unshift(question)
     //set new array to LS
     localStorage.setItem('questions', JSON.stringify(questions))
  } else{
    questions = JSON.parse(localStorage.getItem('questions'))
    //Add new question
    questions.unshift(question)
    localStorage.setItem('question', JSON.stringify(questions))
  }
}

// Remove Questions from LS
removeQuestion(question){
  for(let i=0; i< this.questions.length; i++){

    if(question == this.questions[i]){
      this.questions.splice(i, 1);
      localStorage.setItem('question', JSON.stringify(this.questions))
    }

  }
}



}
