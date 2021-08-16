import {Component, Input, OnInit} from '@angular/core';
import {AuthClientService} from "../service/auth-client.service";
import {DataService} from "../service/data.service";
import {User} from "../model/user"

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

  constructor(private authClient: AuthClientService, private data: DataService) {}

  ngOnInit(): void {}

  login(): void {
    this.authClient.login(this.username, this.password).subscribe(response => {
      console.log(response)
      this.data.set('token', response.token)
      this.data.set('user', <User>response.user)
      this.info = this.data.get('user')
    })
  }

}
