import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { OauthService } from '../../services/oauth.service';
import { SignInModel } from '../../models/signIn.model';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-signin',
  standalone: true,
  imports:[RouterModule,FormsModule,HttpClientModule],
  providers:[OauthService],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
  model : SignInModel = {email :'',password:''};
constructor( private service :OauthService,  private router: Router){

}
onSignIn(){
  if(this.model.email && this.model.password){
    this.service.singIn(this.model).subscribe((response)=>{
      if(response && response.token){
        window.sessionStorage.setItem('token',response.token)
        this.router.navigate(['/home']);
      }
      
    })
  }

}
}
