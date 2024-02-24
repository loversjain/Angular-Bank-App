import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonService } from '../../services/common.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-transfer',
  standalone: true,
  imports: [RouterModule,FormsModule,HttpClientModule],
  providers:[CommonService],
  templateUrl: './transfer.component.html',
  styleUrl: './transfer.component.scss'
})

export class TransferComponent {
  transferResponse :any
  public transferAmt : number=0; email='';
  constructor(private service :CommonService){}
  onSave(){
   if(this.transferAmt && this.transferAmt > 0 ){
    this.service.transferAmount(this.transferAmt, this.email).subscribe((response)=>{
      this.transferResponse = response;
      if( response && response.message==="Transfer successful!"){
         this.transferAmt = 0;
      }
    })
   }
  }
  transferAmount(transferAmount: any) {
    throw new Error('Method not implemented.');
  }
}

