import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonAffected } from '../domains/person-affected';

@Injectable({ providedIn: 'root' })
export class PersonAffectedService {
  constructor(private http: HttpClient) {}

  getPeopleAffected(params?: { lazyEvent?: string }) {
    // Copied this from the primeng lazy load example
    // to have a mock API to work with
    return this.http
      .get<{
        customers: PersonAffected[];
        totalRecords: number;
      }>('https://www.primefaces.org/data/customers', { params: params })
      .toPromise();
  }
}
