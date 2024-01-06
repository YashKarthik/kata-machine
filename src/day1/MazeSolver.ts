const dirs = [
  [-1, 0],
  [0, -1],
  [1, 0],
  [0, 1],
]

function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]): boolean {

  // base cases

  // curr not on map
  if (curr.x < 0 || curr.x > maze[0].length
    || curr.y < 0 || curr.y > maze.length) {
    return false;
  }

  // on a wall?
  if (maze[curr.y][curr.x] == wall) return false;

  // at end?
  if (curr.x == end.x && curr.y == end.y) {
    path.push(end);
    return true;
  }

  // false if visited point before?
  if (seen[curr.y][curr.x]) return false;

  // recursive cases
  // pre
  seen[curr.y][curr.x] = true;
  path.push(curr);

  // recurse
  for (let i = 0; i < dirs.length; i++) {
    const [ x, y ] = dirs[i];
    let new_curr: Point = { x: curr.x + x, y: curr.y + y };

    if (walk(maze, wall, new_curr, end, seen, path)) return true;
  }

  // post
  path.pop()
  return false;
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
  const seen: boolean[][] = [];
  const path: Point[] = [];

  for (let i = 0; i < maze.length; i++) {
    seen.push(new Array(maze[0].length).fill(false));
  }

  walk(maze, wall, start, end, seen, path);
  return path;
}
