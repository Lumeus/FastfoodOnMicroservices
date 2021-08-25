import { Component, OnInit } from '@angular/core';
import {User} from "../../model/user";
import {Router} from "@angular/router";
import {AdminClientService} from "../../service/admin-client.service";

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.css']
})
export class RegisterAdminComponent implements OnInit {

  user: User = {
    id: 0,
    password: '',
    role: 'USER',
    username: '',
  }

  passwordCheck: string = ''

  message: string = ''

  constructor(
    private adminClient: AdminClientService,
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
      this.adminClient.register(this.user).subscribe(
        _ => {
          this.message = 'Registration successful'
        },
        _ => {
          this.message = 'Registration failed'
        }
      )
    }
  }
}
