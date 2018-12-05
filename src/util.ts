export function doubleMap<T>(datas:T[][], callback:(val:T)=>any):any[][]{
  return datas.map(row=>row.map(callback))
};
