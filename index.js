const dupe = (e) => e.slice();
const reverse = (e) => dupe(e).reverse();

const col2row = (e, i, a) => a.map((e) => e[i]);
const isSquare = (e) => e.length === e[0].length;

// PUBLIC

const pivot = (e) => isSquare(e) && e.map(col2row);
const flipH = (e) => e.map(reverse);
const flipV = (e) => reverse(e);

const rot1 = (e) => flipH(pivot(e));
const rot2 = (e) => flipV(flipH(e));
const rot3 = (e) => flipV(pivot(e));

export default {
  flipH,
  flipV,
  pivot,
  reverse,
  rot1,
  rot2,
  rot3,
};
