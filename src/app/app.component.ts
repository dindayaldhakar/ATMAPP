import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'atmApp';
  amountList = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
  noteCounter = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  enterAmount: number;
  noteStatus=false;
  result:any=[];
  total:any=0;
  
  getValue(event) {
    // Get the value form text box
    this.enterAmount = parseInt(event.target.value);

  }
  getMoney() {
    for (var i = 0; i < this.amountList.length; i++) {
      if (this.enterAmount >= this.amountList[i]) {
		  // this.result.push(Math.floor(this.enterAmount /
          // this.amountList[i]))
		  // this.total = this.total % this.amountList[i];		  
        this.noteCounter[i] = Math.floor(this.enterAmount /
          this.amountList[i]);
        this.enterAmount = this.enterAmount -
          this.noteCounter[i] *
          this.amountList[i];
      }
    }
   
	this.noteStatus=true;
  }
}
