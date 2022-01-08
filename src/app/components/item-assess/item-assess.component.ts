import { Component } from '@angular/core';

import { ApiService } from 'src/app/services/api.service';

interface Item {
  id: number;
  name: string;
  image: string;
  stats: any[];
  quality?: string;
}

@Component({
  selector: 'app-item-assess',
  templateUrl: './item-assess.component.html',
  styleUrls: ['./item-assess.component.css']
})
export class ItemAssessComponent {
  itemSearchInput: string = '';
  items: Item[] = [];
  isSubmitted = false;
  selectedItem: Item|null = null;
  itemValues: any[] = [];
  itemLevel: number = 1;
  searchError: string|null = null;
  assessError: string|null = null;
  itemQuality: number|null = null;

  constructor(private api: ApiService) { }

  onSearchSubmit(): void {
    this.searchError = null;
    this.assessError = null;
    this.items = [];
    this.selectedItem = null;
    this.itemValues = [];
    this.itemQuality = null;
    this.itemLevel = 1;

    this.api.searchItems(this.itemSearchInput).subscribe((items: Item[]) => {
      if (items.length === 0) {
        this.searchError = 'No item found';
        return;
      }

      this.items = items;
    });
  }

  selectItem(item: Item): void {
    this.itemValues = [];

    this.selectedItem = item;
    this.setItemValues(item);
  }

  onAssessSubmit(): void {
    if (!this.selectedItem) return;

    const params = [
      ...this.itemValues,
      { name: 'level', value: +this.itemLevel }
    ];

    this.api.assessItem(this.selectedItem.id, params).subscribe((item: Item) => {
      if (item.quality === undefined) {
        return;
      }

      if (item.quality === '0') {
        this.assessError = 'Invalid item details';
        this.itemQuality = null;
        return;
      }

      this.assessError = null;
      this.itemQuality = parseFloat(item.quality) * 100;
    });
  }

  private setItemValues(item: Item): void {
    if (!item.hasOwnProperty('stats')) {
      this.searchError = 'Item cannot be assessed';
      return;
    }

    for (const [name, value] of Object.entries(item.stats)) {
      this.itemValues.push({ name, value: value.base });
    }
  }

  capitalizeString(str: string) {
    return str[0].toUpperCase() + str.substring(1);
  }
}
