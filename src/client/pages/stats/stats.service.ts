
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { ConfigService } from '../../services/config.service';

import { Observable } from 'rxjs';

@Injectable()
export class StatsService {
  constructor(private config: ConfigService, private http: Http) {}

  getStats(): Observable<any[]> {
    return this.http.get(`${this.config.url}/stats`)
      .map(res => res.json());
  }

  createStat(stat): Observable<any> {
    return this.http.post(`${this.config.url}/stats`, stat)
      .map(res => res.json());
  }

  updateStat(stat): Observable<any> {
    return this.createStat(stat);
  }

  removeStat(stat): Observable<any> {
    return this.http.delete(`${this.config.url}/stats/${stat.id}`, stat)
      .map(res => res.json());
  }

}
