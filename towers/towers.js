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

  // towers contain n spaces for disks
  // for every space
  for (let i = n - 1; i >= 0; i--) {
    // for every tower
    for (let j = 0; j < 3; j++) {
      let tower = towers[j];
      let size = tower.size();

      if (size - 1 < i) {
        // paint spaces
        string += new Array(n).fill(' ').join('');
        string += '|';
        string += new Array(n).fill(' ').join('');
        string += tabs; 
      } else {
        // paint disk
        let width = n * 2 + 1;
        let diskSize = tower.disks[i].size;
        let disk = `=${diskSize}=`;
        while (diskSize > 1) {
          disk = '='.concat(disk);
          disk += '=';
          diskSize--;
        }
        width -= disk.length;
        width = width / 2;
        let spaces = '';
        while (width) {
          spaces += ' '
          width--;
        }
        string += spaces + disk + spaces;
        string += tabs;
      }
    }
    string += '\n';
  }

  // add names to bottom of towers
  for (let i = 0; i < 3; i++) {
    let width = n * 2 + 1;
    let diff = width - 7; // "tower X" is 7 chars
    let spaces = '';
    diff = diff / 2;
    while (diff) {
      spaces += ' ';
      diff--;
    }
    string += spaces + towers[i].name + spaces;
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

const driver = () => {
  if (process.argv.length > 3 || process.argv.length < 3) {
    console.error('Usage: node towers.js <n>\nWhere n is the number of disks!');
    return;
  }
  let n = Number(process.argv[2]);
  runPuzzle(n, paintGame);
}

driver();