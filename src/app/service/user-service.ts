import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { User } from '../models/user.models';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../core/config/api.config';

@Service()
export class UserService {
    private http = inject(HttpClient);
    private url = `${API_CONFIG.baseUrl}/users`;

    getUsers() : Observable<User[]> {
        return this.http.get<User[]>(this.url);
    }
}
