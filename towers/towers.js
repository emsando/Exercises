/* 
  You have 3 towers and N disks of different sizes which can slide onto any tower. 
  The puzzle starts with disks sorted in ascending order of size from top to bottom.
  IE, each disk sits on top of an even larger one.

  You have the following constraints: 
    (1) Only one disk can be moved at a time
    (2) A disk is slid off the top of one tower onto another tower
    (3) A disk cannot be placed on top of a smaller disk
  
  Write a program to move the disks from the first tower to the last using stacks.  
*/

class Tower {
  constructor(name) {
    this.disks = [];
    this.name = name;
  }

  size() {
    return this.disks.length;
  }

  add(disk) {
    if (this.size > 0 && disk.size > this.disks[this.size - 1].size) {
      return console.log(`ERROR placing Disk ${disk.size} on ${this.name}`);
    }
    this.disks.push(disk);
  }

  moveTopTo(tower) {
    let top = this.disks.pop();
    tower.add(top);
  }

  moveDisks(n, destination, buffer, cb, levels, orderedTowers) {
    if (n > 0) {
      this.moveDisks(n - 1, buffer, destination, cb, levels, orderedTowers);
      this.moveTopTo(destination);
      cb(levels, orderedTowers);
      buffer.moveDisks(n - 1, destination, this, cb, levels, orderedTowers);
    }
  }
}

class Disk {
  constructor(size) {
    this.size = size;
  }
}

const paintGame = (n, towers) => {
  let string = ''; 
  let tabs = '\t\t\t';
  
  // add tops of towers with spaces
  for (let i = 0; i < 3; i++) {
    string += new Array(n).fill(' ').join('');
    string += '|';
    string += new Array(n).fill(' ').join('');
    string += tabs;
  }
  string += '\n';

  // towers contain n spaces for blocks
  // for every space
  for (let i = 0; i < n; i++) {
    // for every tower
    for (let j = 0; j < 3; j++) {
      let tower = towers[j];
      // start with just filling spaces
      string += new Array(n).fill(' ').join('');
      string += '|';
      string += new Array(n).fill(' ').join('');
      string += tabs; 
    }
    string += '\n';
  }

  // add names to bottom of towers
  for (let i = 0; i < 3; i++) {
    string += towers[i].name;
    string += tabs;
  }
  string += '\n';

  console.log(string);
}

const runPuzzle = (n, cb) => {
  let towerA = new Tower('Tower A');
  let towerB = new Tower('Tower B');
  let towerC = new Tower('Tower C');
  let orderedTowers = [towerA, towerB, towerC]

  for (let i = n; i > 0; i--) {
    let disk = new Disk(i)
    towerA.add(disk);
  }

  cb(n, orderedTowers);
  towerA.moveDisks(n, towerC, towerB, cb, n, orderedTowers);
}


runPuzzle(3, paintGame);