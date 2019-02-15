import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { User, UserJira } from './models.interface';
import { HttpHeaders, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class ApiService {

  public baseurl = 'https://localhost:5001';

  jwt: any;
  dataUser: any;

  //control del registro por el backend
  register(username, password, email) {
    const body = { username, password, email };
    return this.http.post('/api/users', body).toPromise();

  }
  //control del login por el back

  login(username, password) {
    const body = { username, password };
    return this.http.post('/api/auth', body)
      .toPromise();
  }
  //Cargar user de jira loggeado
  getUserJiraData() {
    return this.http.get('/api/jira/' + localStorage.getItem('id')).toPromise();
  }
  //obtener la id del user loggeado
  getIdLoggedUser() {
    return localStorage.getItem('id');
  }

  //obtiene la id del jira del usuario loggeado
  getJiraIDLoggedUser() {
    return localStorage.getItem('idJira');
  }
  //guardar user de jira en el back
//   editJiraUser(userJira: UserJira){
//     return this.http.put('/api/jira/'+localStorage.getItem('idJira'),userJira).toPromise();
//   }
  //



  constructor(private http: HttpClient) { }
}
