class Point {
  x: number;
  y: number;
}

const pt = new Point();
pt.x = 1;
pt.y = 2;
pt.z = 3;   // Property 'z' does not exist on type 'Point'.
pt.x = "a"; // Type 'string' is not assignable to type 'number'.