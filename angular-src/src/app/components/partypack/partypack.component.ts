import { Component, OnInit } from '@angular/core';
import { ReveldataService } from '../../services/reveldata.service';
import {Subject} from 'rxjs/Subject';

class Entry {
  FranchiseID: String;
  Name: String;
  Quantity: Number;
}

class Ranks {
  name: String;
  value: Number;
  rank: Number;
}


@Component({
  selector: 'app-partypack',
  templateUrl: './partypack.component.html',
  styleUrls: ['./partypack.component.css']
})

export class PartypackComponent implements OnInit {
  // dtOptions: DataTables.Settings = {};
  entriesParty: Entry[] = [];
  rankings: Ranks[] = [];
  ChallengeWeek: Number;

  display: Ranks[] = [];
  // dtTrigger: Subject<Entry> = new Subject();
  constructor(
    private reveldataService: ReveldataService
  ) { }

  ngOnInit() {
  }

  onDateSubmit() {
    const week = {
      ChallengeWeek: this.ChallengeWeek
    };
    let entriesCount = [];
    this.reveldataService.getPartyData(week).subscribe(data => {
      this.entriesParty = data;
      entriesCount = this.entriesParty;
      this.countFunction(entriesCount);
    });

  }
  countFunction(entriesCount) {
    const quantityCount = {};
    for ( const c of entriesCount ){
      const key = c.FranchiseID;
      const value = c.Quantity;
      if (quantityCount[key]) {
        quantityCount[key] = quantityCount[key] + value;
      } else {
        quantityCount[key] = value;
      }
    }

    const sortable = [];
    for (const entry in quantityCount) {
      sortable.push([entry, quantityCount[entry]]);
    }

    sortable.sort(function(a, b) {
      return b[1] - a[1];
    });


    let r = 0;
    for (const i of sortable){
      this.rankings.push({name: sortable[r][0], value: sortable[r][1], rank: 1 + r});
      r++;
    }
    this.display = this.rankings;
  }

}

