import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Question } from '../../Question';
@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  // outputting input values
  @Output() questionAdded = new EventEmitter<Question>();

  text:string;
  answer:string;


  constructor() { }

  ngOnInit() {
  }

  addQuestion(){
    // grabbing inputted values from html
    this.questionAdded.emit({text:this.text, answer:this.answer,hide:true});
  }


}
