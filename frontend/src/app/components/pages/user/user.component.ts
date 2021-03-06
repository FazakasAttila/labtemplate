import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/';
import { MenuItem } from 'primeng/components/common/menuitem';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {
  users: User[];
  selectedUser: User;
  items: MenuItem[];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.get('api/user/').subscribe(res => {
      this.users = res;
    });
    this.items = [
      { label: 'View', icon: 'fa-search', command: (event) => this.viewUsers(this.selectedUser) },
      { label: 'Delete', icon: 'fa-close', command: (event) => this.deleteUsers(this.selectedUser) }
    ];
  }
  viewUsers(select: User) {
    console.log(JSON.stringify(select));

  }
  deleteUsers(select: User) {
    this.apiService.delete('api/user/' + select.ID).subscribe(res => {
      console.log(res);
    });

  }
  }

  interface User {
  ID: number;
  username: string;
  password: string;
  street_adress: string;
  city : string
  }
