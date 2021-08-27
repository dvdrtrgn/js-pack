import R from '../index.js';
// import R from '@dvdrtrgn/js-pack';
import { ARR, STATES } from './data.js';

let okay = true;

const compareTo = (arr, nom) => STATES[nom] === JSON.stringify(arr);

function describe(arr, kind) {
  let info = STATES.keys().filter((e) => compareTo(arr, e));
  let rez = info.includes(kind);

  console.log(rez, kind, info);

  if (!rez) okay = false;
  return rez;
}


describe(ARR, 'rot0'); //?
describe(R.rot1(ARR), 'rot1'); //?
describe(R.rot2(ARR), 'rot2'); //?
describe(R.rot3(ARR), 'rot3'); //?

describe(R.pivot(ARR), 'pivot'); //?
describe(R.flipV(ARR), 'flipV'); //?
describe(R.flipH(ARR), 'flipH'); //?

describe(R.pivot(R.flipV(ARR)), 'rot1'); //?

console.log(`\nPROBABLY ${okay ? 'OK' : 'not OK'}`);
