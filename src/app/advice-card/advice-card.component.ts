import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Advice } from '../advice';
import { ApiResponse } from '../api-response';

@Component({
  selector: 'app-advice-card',
  templateUrl: './advice-card.component.html',
  styleUrls: ['./advice-card.component.scss'],
})
export class AdviceCardComponent implements OnInit {
  advice: Advice = {
    id: 0,
    advice: '',
  };

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getAdvice();
  }

  getAdvice() {
    this.apiService.get.subscribe((res: ApiResponse) => {
      this.advice = res.slip;
    });

    const btn = <HTMLButtonElement>document.querySelector('#advice-btn');
    btn.disabled = true;
    setTimeout(() => btn.disabled = false, 2000);
  }
}
