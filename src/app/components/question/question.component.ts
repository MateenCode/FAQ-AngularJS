import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../../Question';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() question:Question

  constructor(
    public dataService:DataService
  ) { }

  ngOnInit() {
  }

  removeQuestion(question){
    //remove data from the dataService
    this.dataService.removeQuestion(question)
  }

}
