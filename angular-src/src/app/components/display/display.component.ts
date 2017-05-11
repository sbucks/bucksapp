import { Component, OnInit } from '@angular/core';
import { ReveldataService } from '../../services/reveldata.service';
import {Subject} from 'rxjs/Subject';

class Entry {
  Date: Date;
  Class: String;
  FranchiseID: String;
}

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  // dtOptions: DataTables.Settings = {};
  entriesRevel: Entry[] = [];
  // dtTrigger: Subject<Entry> = new Subject();
  fid: String;
  date: Date;

  constructor(
    private reveldataService: ReveldataService
  ) { }

  ngOnInit() {
  }

  onFidSubmit() {
    const fid = {
      Date: this.date,
      FranchiseID: this.fid
    };
    this.reveldataService.getRevelData(fid).subscribe(data => {
      this.entriesRevel = data;
      // this.dtTrigger.next();
    });
  }

}
