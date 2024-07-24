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
        { name: 'Neon J', code: 'NJ' },
        { name: 'Inna', code: 'IN' },
        { name: 'Paintbrush', code: 'PB' },
        { name: 'Maru', code: 'MA' },
        { name: 'Cube', code: 'CU' },
        { name: 'Sonic', code: 'SON' },
        { name: 'Punchy', code: 'PU' },
        { name: 'amogus', code: 'AMO' },
        { name: 'Stanley', code: 'STAN' },
        { name: 'Yuri', code: 'YU' },
        { name: 'SANSSS UNDERTALEEEEE', code: 'SAN' },
          
      ];
  }
  charaFuntion() {
    console.log(this.charaFuntion)
  }
}
