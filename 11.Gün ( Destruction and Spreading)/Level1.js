const constants = [2.72, 3.14, 9.81, 37, 100];
const countriess = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
};


/* Q1
todo: (Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.) */

let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;

/* Q2       
todo: (Destructure and assign the elements of countriess array to fin, est, sw, den, nor) */

let [fin, et, sw, den, nor] = countriess;
 
/* Q3
todo: (Destructure the rectangle object by its properties or keys.) */

let {width, height, area: alan, perimeter} = rectangle;