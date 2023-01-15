import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ConfigService } from '../config.service';

interface Person {
  id: number;
  name: string;
  isAmazing?: boolean;
}

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent implements OnInit {
  // peopleUrl = 'http://localhost:3001';
  peopleUrl = '';
  people: Person[] = [];
  name = new FormControl('');
  errorMessage: string = '';

  constructor(private http: HttpClient, private config: ConfigService) {}

  ngOnInit(): void {
    this.peopleUrl = this.config.getConfig().backendUrl;
    console.log('people url: ' + this.peopleUrl);

    this.getPeople().subscribe((res) => {
      console.log(res);
      this.people = res;
    });
  }

  getPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(this.peopleUrl);
  }

  deleteAmazingPerson(amazingPersonName: string | null) {
    console.log('TO DELETE: ' + amazingPersonName);
    if (!amazingPersonName || amazingPersonName.length < 1) {
      return;
    }
    this.http.delete<any>(this.peopleUrl + `/${amazingPersonName}`).subscribe({
      next: (data) => {
        console.log('Sucessfully deleted amazing person! Res:');
        console.log(data);
        this.getPeople().subscribe((res) => {
          console.log(res);
          this.people = res;
        });
      },
      error: (error) => {
        this.errorMessage = error.error.message;
        setTimeout(() => {
          this.errorMessage = '';
        }, 5000);
        console.error('There was an error!', error);
      },
    });
  }

  addNewAmazingPerson(newAmazingPersonName: string | null) {
    if (!newAmazingPersonName || newAmazingPersonName.length < 1) {
      return;
    }

    this.http
      .post<any>(this.peopleUrl, { name: newAmazingPersonName })
      .subscribe({
        next: (data) => {
          console.log('Sucessfully added amazing person! Res:');
          console.log(data);
          this.getPeople().subscribe((res) => {
            console.log(res);
            this.people = res;
          });
          this.ngOnInit();
        },
        error: (error) => {
          this.errorMessage = error.error.message;
          setTimeout(() => {
            this.errorMessage = '';
          }, 5000);
          console.error('There was an error!', error);
        },
      });
  }
}
