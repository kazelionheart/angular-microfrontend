import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  public getSaints() {
    return this.httpClient.get(
      `https://saint-seiya-api.herokuapp.com/api/characters`
    );
  }
}
