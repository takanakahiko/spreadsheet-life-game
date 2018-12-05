import Spreadsheet = GoogleAppsScript.Spreadsheet.Spreadsheet;
import { doubleMap } from './util';

const colorPattern = ['#ff0000','#ffffff']

export class SheetService {
  static getState(row:number,column:number): boolean[][]{
    const sheet = SpreadsheetApp.getActiveSheet();
    const backGrounds = sheet.getRange(1, 1, row,column).getBackgrounds();
    return doubleMap(backGrounds, (color) => color===colorPattern[0]);
  }
  static setState(datas: boolean[][]){
    const [row,column] =  [datas.length,datas[0].length]
    const sheet = SpreadsheetApp.getActiveSheet();
    const backGrounds = doubleMap(datas, (v) => v?colorPattern[0]:colorPattern[1])
    sheet.getRange(1, 1, row, column).setBackgrounds(backGrounds);
  }
}
