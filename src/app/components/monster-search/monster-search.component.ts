import { Component, OnInit } from '@angular/core';

import { Monster } from 'src/app/interfaces/monster.interface';
import { Skill } from 'src/app/interfaces/skill.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-monster-search',
  templateUrl: './monster-search.component.html',
  styleUrls: ['./monster-search.component.css']
})
export class MonsterSearchComponent implements OnInit {
  monsterSearchInput: string = 'Apollyon';
  monsters: Monster[] = [];
  isSubmitted = false;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.onSubmit();
  }

  onSubmit() {
    this.api.searchMonster(this.getSearchCriteria()).subscribe((monsters: Monster[]) => {
      this.isSubmitted = true;
      monsters = this.setImageURLs(monsters);
      this.monsters = this.setSkillDetailsAndDebuffs(monsters);
    });
  }

  private setSkillDetailsAndDebuffs(monsters: Monster[]): Monster[] {
    for (const monster of monsters) {
      monster.skillDetails = [];
      monster.debuffs = [];

      if (!monster.hasOwnProperty('skills')) {
        continue;
      }

      for (const skill of monster.skills) {
        this.api.searchSkill(skill.id).subscribe((skill: Skill[]) => {
          monster.skillDetails?.push(skill[0]);
          if (skill[0].causes) {
            for (const debuff of skill[0].causes) {
              if (monster.debuffs?.indexOf(debuff) === -1) monster.debuffs?.push(debuff);
            }
          }
        });
      }
    }

    return monsters;
  }

  private getSearchCriteria(): any {
    return {
      icontains: [ // case-insensitive contains
        { name: this.monsterSearchInput }
      ]
    };
  }

  private setImageURLs(monsters: Monster[]) {
    for (const monster of monsters) {
      monster.image = `https://orna.guide/static/orna/img/${monster.image}`;
    }

    return monsters;
  }

}
