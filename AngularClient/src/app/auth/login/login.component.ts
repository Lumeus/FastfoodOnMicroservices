import {Component, Input, OnInit} from '@angular/core';
import {AuthClientService} from "../../service/auth-client.service";
import {User} from "../../model/user"
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string = ''
  public password: string = ''
  show: boolean = false
  info: User | null = null

  constructor(
    private authClient: AuthClientService,
    private router: Router,
    private rout: ActivatedRoute
  ) {}

  ngOnInit(): void {
  }

  login(): void {
    this.authClient.login(this.username, this.password).subscribe(response => {
      console.log(response)
      localStorage.setItem('token', 'Bearer ' + response.token)
      localStorage.setItem('user', JSON.stringify(response.user))
      this.info = JSON.parse(<string>localStorage.getItem('user'))
      this.router.navigate([JSON.parse(<string>localStorage.getItem('user')).role.toLowerCase()])
    })
  }

}
