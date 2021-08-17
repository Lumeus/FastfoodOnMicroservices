import { Component, OnInit } from '@angular/core';
import {AuthClientService} from "../service/auth-client.service";
import {User} from "../model/user";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = {
    id: 0,
    password: '',
    role: 'USER',
    username: '',
  }

  passwordCheck: string = ''

  message: string = ''

  constructor(
    private authClient: AuthClientService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  register(): void{
    if(this.user.username == '') {
      this.message = 'Username must be filled'
    } else if(this.user.password == '') {
      this.message = 'Password must be filled'
    } else if(this.user.password != this.passwordCheck) {
      this.message = 'Password mismatch'
    } else {
      this.message = 'Please wait'
      this.authClient.register(this.user).subscribe(
        _ => {
          this.router.navigate(['auth', 'login'])
        },
        _ => {
          this.message = 'Registration failed'
        }
      )
    }
  }
}
