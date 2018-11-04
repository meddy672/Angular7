import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  userNameIsNotEmpty = true;
  serverCreationStatus = 'No server was created';
  serverName = 'TestServerName';
  userName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onUpdateUserName() {
    console.log("Hello World");
    if (this.userName.length > 0) {
      this.userNameIsNotEmpty = false;
    }
  }

  resetUserName() {
    this.userName = '';
    this.userNameIsNotEmpty = true;
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onCreateServer() {

    this.serverCreationStatus = 'Server was created';
  }

}
