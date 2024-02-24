import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonService } from '../../services/common.service';
import { UserInfo } from '../../models/user-info';


@Component({
  selector: 'app-home',
  standalone: true,
  imports:[RouterModule,HttpClientModule],
  providers:[CommonService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  userInfo : UserInfo={};
  constructor(private service : CommonService){

  }
  ngOnInit(): void {
    this.service.getUserInfo().subscribe((response)=>{
      this.userInfo = response
    })
  }
 
}
