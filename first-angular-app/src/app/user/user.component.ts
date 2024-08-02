import { Component } from '@angular/core';

import { DUMMY_USER } from '../dummy-user';

const randomIndex = Math.floor(Math.random() * DUMMY_USER.length);

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = DUMMY_USER[randomIndex];
}
