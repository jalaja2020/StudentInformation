import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
    styleObj: any = { backgroundColor : 'red' , color : 'white'};
    defaultStyleObj : any = { backgroundColor : '' , color : '' };

  @Input() student :any;
  @Output() selectedStudentData = new EventEmitter();
  constructor() { }


  onSelectStudent = (student) => {
    console.log(student);
    this.selectedStudentData.emit(student);
  }
  
}
