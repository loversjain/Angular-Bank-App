import { Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { DepositComponent } from './components/deposit/deposit.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { WithdrawlComponent } from './components/withdrawl/withdrawl.component';
import { HomeComponent } from './components/home/home.component';
import { StatementComponent } from './components/statement/statement.component';
import { HeaderComponent } from './components/header/header.component';


export const routes: Routes = [

    {path:"signin", component:SigninComponent},
    {path:"signup", component:SignupComponent},
   {path:'',component:HeaderComponent,children:[
    {path:"deposit", component:DepositComponent},
    {path:"transfer", component:TransferComponent},
    {path:"withdraw", component:WithdrawlComponent},
    {path:"home", component:HomeComponent},
    {path:"statement", component:StatementComponent}
   ]}
];
