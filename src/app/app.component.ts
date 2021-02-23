import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  

  testArray =[
    // ["1", "2", "3", "4", "5"],
    //   ["6", "7", "8", "9", "10"],
    //   ["11", "12", "13", "14", "15"],
    //   ["16", "17", "", "18", "19","20"],
    //   ["21", "22", "23", "24", "25"]

      ["*", "*", "*", "*", "*"],
      ["*", "*", "*", "*", "*"],
      ["*", "*", "*", "*", "*"],
      ["*", "*", "*", "*", "*"],
      ["*", "*", "*", "*", "*"],
  ]

  baris="";
  kolom="";

  turn : boolean = false;

  i = 0 ;
  j=0;
  playerA =0;
  playerB =0;
  errorText="this is for player turn error checking"
  winText="Fighting";

  updateItem(row,column)
  {
    if(this.turn == true)
      this.turn = false;
    else
      this.turn = true;

    if(this.turn == true){
      if(this.testArray[row][column] == "*"){
        this.testArray[row][column] = "1";
        this.errorText="this is for player turn error checking"
      }
      else{
        this.errorText ="Tidak bisa menumpuk oi , masukan lagi"
        this.turn = false;
      }
    }
    else{
      if(this.testArray[row][column] == "*"){
        this.testArray[row][column] = "0";
        this.errorText="this is for player turn error checking"
      }
      else{
        this.errorText ="Tidak bisa menumpuk oi , masukan lagi"
        this.turn = true;
      }
    }
    this.playerA=0;
    this.playerB=0;

    for(this.i=0;this.i < this.testArray.length ; this.i++){
      for(this.j=0;this.j < this.testArray.length ; this.j++){
        if(this.testArray[this.i][this.j] == "1"){
          this.playerA +=1;
        }
        else if(this.testArray[this.i][this.j] == "0"){
          this.playerB +=1;
        }
        if(this.playerA == 4){
          this.winText="Player A Win";
        }
        else if(this.playerB == 4){
          this.winText="Player B Win";
        }
      }
      this.playerA=0;
      this.playerB=0;
    }


    for(this.i=0;this.i < this.testArray.length ; this.i++){
      for(this.j=0;this.j < this.testArray.length ; this.j++){
        if(this.testArray[this.j][this.i] == "1"){
          this.playerA +=1;
        }
        else if(this.testArray[this.j][this.i] == "0"){
          this.playerB +=1;
        }
        if(this.playerA == 4){
          this.winText="Player A Win";
        }
        else if(this.playerB == 4){
          this.winText="Player B Win";
        }
      }
      this.playerA=0;
      this.playerB=0;
    }
    
  }

  
  checkWin(){
    
  }
}
