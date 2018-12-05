import { SheetService } from './sheet.service';

declare var global: any;

function update(){ 
  const size = 20;
  const oldState = SheetService.getState(size,size);
  Logger.log(oldState);
  const newState: boolean[][] = [];
  for(let y = 0; y < size; y++){
    const newRowState = []
    for(let x = 0; x < size; x++){
      let liveCount = 0;
      for(const i of [-1,0,1]){
        for(const j of [-1,0,1]){
          if(i==0 && j==0) continue;
          if(oldState[(y+i+size)%size][(x+j+size)%size]) liveCount++;
        }
      }
      newRowState[x] = oldState[y][x];
      if(oldState[y][x]){
        if(liveCount!=2 && liveCount!=3) newRowState[x] = false
      }else{
        if(liveCount==3) newRowState[x] = true
      }      
    }
    newState.push(newRowState);
  }
  Logger.log(newState);
  SheetService.setState(newState);
};

