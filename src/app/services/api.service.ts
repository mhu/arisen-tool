import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { Skill } from '../interfaces/skill.interface';
import { Monster } from '../interfaces/monster.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  skillCache: Skill[] = [];

  constructor(private http: HttpClient) {}

  API_URL = 'https://orna.guide/api/v1';

  searchMonster(criteria: any): Observable<Monster[]> {
    return this.http.post<Monster[]>(
      `${this.API_URL}/monster`,
      criteria
    );
  }

  searchSkill(id: number): Observable<Skill[]> {
    const found = this.skillCache.find((skill: Skill) => {
      return skill.id === id;
    });

    if (found) {
      return of([found]);
    }

    return this.http.post<Skill[]>(
      `${this.API_URL}/skill`,
      { id }
    ).pipe(
      tap((skills: Skill[]) => {
        for (const skill of skills) {
          this.skillCache.push(skill);
        }
      })
    );
  }

}
