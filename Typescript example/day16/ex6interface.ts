interface point {
    x : number;
    y : number;
}
interface point3D extends point{
    z: number;
}
let coord: point ={x:10 , y:20}
let axis3d: point3D={x:10, y:20, z:30};
function printCoord(pt : point){
    document.write(`<p>x =${pt.x}, y= ${pt.y}</p>`)
}
function print3DCoord(pt3: point3D) {
    document.write(`<p>x=${pt3.x}, y=${pt3.y}, z=${pt3.z}</p>`)
}
printCoord(coord);
print3DCoord(axis3d);