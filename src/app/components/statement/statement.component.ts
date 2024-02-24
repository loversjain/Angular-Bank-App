import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonService } from '../../services/common.service';
import { StatementsResonse } from '../../models/statements';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-statement',
  standalone: true,
  imports: [RouterModule, HttpClientModule,FormsModule,CommonModule],
  providers:[CommonService],
  templateUrl: './statement.component.html',
  styleUrl: './statement.component.scss'
})

export class StatementComponent implements OnInit {
  statement! : StatementsResonse;
  constructor(private service : CommonService){

  }
  ngOnInit(): void {
    this.service.getStatement(null).subscribe((response)=>{
      this.statement = response
    })
  }
  changePage(page:any){
    this.service.getStatement(page).subscribe((response)=>{
      this.statement = response
    })
  }
}