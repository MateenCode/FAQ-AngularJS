import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
// import question from interface
import { Question } from '../../Question';



@Component({
  selector: 'app-questionlist',
  templateUrl: './questionlist.component.html',
  styleUrls: ['./questionlist.component.css']
})
export class QuestionlistComponent implements OnInit {
//  declare question to equal a array of questions
  questions:Question[];

// set the DataService
  constructor(public dataService:DataService) {

  }

  ngOnInit() {
    //grabbing values from the dataserve to be display
    this.questions = this.dataService.getQuestions();

  }

  addQuestion(question:Question){
    // adding values to the dataService
    this.dataService.addQuestion(question)
  }

}
