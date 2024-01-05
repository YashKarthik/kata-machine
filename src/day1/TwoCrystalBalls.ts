export default function two_crystal_balls(breaks: boolean[]): number {
  let start = 0;
  let end = breaks.length;
  let m = Math.floor((start + end) / 2);
  let jump = Math.floor(Math.sqrt(breaks.length));

  if (breaks[m] == true) {
    end = m;
  } else {
    start = m + 1;
  }

  for (let i = start; i < end; i += jump) {
    if (breaks[i] == true) return i;
  }

  return -1;
}
