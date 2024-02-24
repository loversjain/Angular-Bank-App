import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonService } from '../../services/common.service';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-deposit',
  standalone: true,
  imports: [RouterModule,FormsModule,HttpClientModule],
  providers:[CommonService],
  templateUrl: './deposit.component.html',
  styleUrl: './deposit.component.scss'
})
export class DepositComponent {
  depositresponse:any

 public depositAmount : number=0;
constructor(private service :CommonService){}
onSave(){
 if(this.depositAmount && this.depositAmount > 0 ){
  this.service.depositAmount(this.depositAmount).subscribe((response)=>{
    this.depositresponse = response;
    if( response && response.message==="Deposit successful!"){
       this.depositAmount = 0;
    }
  })
 }
}
}
