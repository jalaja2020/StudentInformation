import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  selectedStudentData : any = null;
  
  constructor() { }

  ngOnInit(): void {
  }
  studentsInformation : Object = [
    {
      firstName :'Tulasi',
      lastName : 'maha lakshmi',
      studentId : '101',
      address : 'vza',
      mobileNo : '9160466866',
      email : 'tulasi.n@gmail.com',
      id : 1
    },
    {
      firstName :'jalaja',
      lastName : 'kumari',
      studentId : '102',
      address : 'vza',
      mobileNo : '9052063958',
      email : 'jalaja.n@gmail.com',
      id : 2
    },
    {
      firstName :'shiva',
      lastName : 'kumari',
      studentId : '103',
      address : 'hyd',
      mobileNo : '9052063969',
      email : 'shiva.n@gmail.com',
      id : 3
    }
  ]

  onSelectStudent =(student) =>{
    this.selectedStudentData=student;
    
    console.log("In Parent",student);   
  };
  
  trackBystudentId = (index : number , student : any) => {
    return student.id;
  }


  clearStudentData = () => {
    this.selectedStudentData = {};
    console.log('clearStudentData', this.selectedStudentData);
  }
}
