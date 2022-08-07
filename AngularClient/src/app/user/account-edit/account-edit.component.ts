import { Component, OnInit } from '@angular/core';
import {UserClientService} from "../../service/user-client.service";
import {User} from "../../model/user";
import {AuthClientService} from "../../service/auth-client.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.css']
})
export class AccountEditComponent implements OnInit {
  user!: User;

  passwordCheck: string = ''

  message: string = ''

  constructor(
    private userClient: UserClientService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(<string>localStorage.getItem('user'))
    this.user.password = ''
  }

  edit(): void{
    if(this.user.username == '') {
      this.message = 'Username must be filled'
    } else if(this.user.password == '') {
      this.message = 'Password must be filled'
    } else if(this.user.password != this.passwordCheck) {
      this.message = 'Password mismatch'
    } else {
      this.message = 'Please wait'
      console.log(this.user)
      this.userClient.putUser(this.user).subscribe(
        user => {
          this.user = user
          localStorage.setItem('user', JSON.stringify(user))
          this.router.navigateByUrl(this.router.url.slice(0, -5))
          // this.router.navigate(['user', 'account'])
        },
        _ => {
          this.message = 'Edition failed'
        }
      )
    }
  }

}
