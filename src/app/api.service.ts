import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Advice } from './advice';
import { ApiResponse } from './api-response';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUri = 'https://api.adviceslip.com/advice';
  public advice: Advice;
  
  public get = this.http.get<ApiResponse>(this.apiUri);

  constructor(private http: HttpClient) {}
}
