import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    public analyticsService: AnalyticsService
  ) { }

  ngOnInit(): void {
  }

  openGmail() {

    const recipient = 'nithish.kr.ece@gmail.com'; 
    const mailtoURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}`;
    window.open(mailtoURL, '_blank');

  }

}
