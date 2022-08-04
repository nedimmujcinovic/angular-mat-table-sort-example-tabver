import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from '../model/employee';
import { EmpFilter, filterOption } from '../model/empfilter';
import { MatSelectChange } from '@angular/material/select';
import {MatSort,Sort} from '@angular/material/sort';


@Component({
  selector: 'app-mat-table-sort',
  templateUrl: './mat-table-sort.component.html',
  styleUrls: ['./mat-table-sort.component.scss']
})
export class MatTableSortComponent implements OnInit {

  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'email','gender','jobtitle','department'];

  displayedColumnsWithObject: string[] = ['id', 'firstname', 'lastname', 'email','gender','jobtitle','department','project.name'];

  EmpData : Employee[] =[{"id":1,"firstname":"Mellie","lastname":"Gabbott","email":"mgabbott0@indiatimes.com","gender":"Female","department":"Support","jobtitle":"Support Analyst","project":{name:"project1",id:1}},
  {"id":2,"firstname":"Yehudi","lastname":"Ainsby","email":"yainsby1@w3.org","gender":"Female","department":"Support","jobtitle":"Support Analyst","project":{name:"project2",id:2}},
  {"id":3,"firstname":"Noellyn","lastname":"Primett","email":"nprimett2@ning.com","gender":"Female","department":"Human Resources","jobtitle":"Project Manager","project":{name:"project3",id:3}},
  {"id":4,"firstname":"Stefanie","lastname":"Yurenin","email":"syurenin3@boston.com","gender":"Female","department":"Marketing","jobtitle":"Senior officer","project":{name:"project4",id:4}},
  {"id":5,"firstname":"Stormi","lastname":"O'Lunny","email":"solunny4@patch.com","gender":"Female","department":"Engineering","jobtitle":"Software Engineer","project":{name:"project5",id:5}},
  {"id":6,"firstname":"Keelia","lastname":"Giraudy","email":"kgiraudy5@nba.com","gender":"Male","department":"Marketing","jobtitle":"Senior officer","project":{name:"project6",id:6}}];
  
  dataSource = new MatTableDataSource(this.EmpData);
  dataSourceWithObjectColumn = new MatTableDataSource(this.EmpData);

  
  @ViewChild('empTbSort') empTbSort = new MatSort();
  @ViewChild('empTbSortWithObject') empTbSortWithObject = new MatSort();



  constructor() { 
  }

  ngAfterViewInit() {
    
    this.empTbSort.disableClear = true;
    this.dataSource.sort = this.empTbSort;

    this.empTbSortWithObject.disableClear = true;
    this.dataSourceWithObjectColumn.sort = this.empTbSortWithObject;
    this.dataSourceWithObjectColumn.sortingDataAccessor = (row:Employee,columnName:string) : string => {
      console.log(row,columnName);
      if(columnName=="project.name") return row.project.name;
      var columnValue = row[columnName as keyof Employee] as string;
      return columnValue;
    }
  }

  ngOnInit(): void {

    
  }



}
