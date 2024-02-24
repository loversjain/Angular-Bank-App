import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonService } from '../../services/common.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-withdrawl',
  standalone: true,
  imports: [RouterModule,FormsModule,HttpClientModule],
  providers:[CommonService],
  templateUrl: './withdrawl.component.html',
  styleUrl: './withdrawl.component.scss'
})
export class WithdrawlComponent {
  withdrawresponse :any
  public withdrawAmount : number=0;
  constructor(private service :CommonService){}
  onSave(){
   if(this.withdrawAmount && this.withdrawAmount > 0 ){
    this.service.withdrawAmount(this.withdrawAmount).subscribe((response)=>{
      this.withdrawresponse = response;
      if( response && response.message==="Deposit successful!"){
         this.withdrawAmount = 0;
      }
    })
   }
  }
}
