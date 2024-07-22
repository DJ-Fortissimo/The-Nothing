import { Component, OnInit } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';

interface Character {
  name: string;
  code: string;
}


@Component({
  selector: 'app-nothing',
  templateUrl: './nothing.component.html',
  styleUrl: './nothing.component.css'
})

export class NothingComponent implements OnInit {

  value!: number;
  date: Date | undefined | string;
  
  characters!: Character[];

  selectedCharacter!: Character;

  ngOnInit() {
      this.characters = [
          { name: 'Punchy', code: 'PU' },
          { name: 'Neon J', code: 'NJ' },
          { name: 'Maru', code: 'MA' },
          { name: 'SANSSS UNDERTALEEEEE', code: 'SAN' },
          { name: 'Inna', code: 'IN' },
          { name: 'Paintbrush', code: 'PB' },
      ];
  }
  charaFuntion() {
    console.log(this.charaFuntion)
  }
}
