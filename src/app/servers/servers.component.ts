import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {



  clickCount = 0;
  displaySecretMessage = false;
  secretMessageIsAbove5 = false;
  secretMessage = '';
  secretMessageTimeStamps = [];

  constructor() {

  }

  ngOnInit() {
  }

  onDisplaySecret() {


    this.addTimeStamp();
    this.secretMessage = 'Money';
    this.displaySecretMessage = true;
    this.clickCount++;
  }

  addTimeStamp() {

    var date = new Date();
    var timestamp = 'timestamp: ' + date.getTime();
    this.secretMessageTimeStamps.push(timestamp);
  }




  onToggleSecretMessage() {

    if (this.secretMessage != '') {
      this.displaySecretMessage = !this.displaySecretMessage;
    }
  }



}
