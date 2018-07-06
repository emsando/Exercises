class Disk {
  constructor(size) {
    this.size = size;
  }
}

class Tower {
  constructor(name, parent) {
    this.disks = [];
    this.name = name;
    this.parent = parent;
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
      this.parent.gameMove++;
      this.parent.paintPuzzle(levels, orderedTowers);
      buffer.moveDisks(n - 1, destination, this, cb, levels, orderedTowers);
    }
  }
}

class Puzzle {
  constructor(n) {
    this.diskNum = n;
    this.gameMove = 0;
    this.towers = [
      new Tower('Tower A', this),
      new Tower('Tower B', this),
      new Tower('Tower C', this)
    ]

    for (let i = n; i > 0; i--) {
      let disk = new Disk(i)
      this.towers[0].add(disk);
    }
  }

  paintPuzzle() {
    let string = ''; 
    let tabs = '\t\t\t';
    
    string += `  ** MOVES: ${this.gameMove} **\n`;
    // add tops of towers with spaces
    for (let i = 0; i < 3; i++) {
      string += new Array(this.diskNum).fill(' ').join('');
      string += '|';
      string += new Array(this.diskNum).fill(' ').join('');
      string += tabs;
    }
    string += '\n';

    // towers contain n spaces for disks
    // for every space
    for (let i = this.diskNum - 1; i >= 0; i--) {
      // for every tower
      for (let j = 0; j < 3; j++) {
        let tower = this.towers[j];
        let size = tower.size();

        if (size - 1 < i) {
          // paint spaces
          string += new Array(this.diskNum).fill(' ').join('');
          string += '|';
          string += new Array(this.diskNum).fill(' ').join('');
          string += tabs; 
        } else {
          // paint disk
          let width = this.diskNum * 2 + 1;
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
      let width = this.diskNum * 2 + 1;
      let diff = width - 7; // "tower X" is 7 chars
      let spaces = '';
      diff = diff / 2;
      while (diff) {
        spaces += ' ';
        diff--;
      }
      string += spaces + this.towers[i].name + spaces;
      string += tabs;
    }
    string += '\n';

    console.log(string);
  }

  runPuzzle() {
    this.paintPuzzle();
    this.towers[0].moveDisks(this.diskNum, this.towers[2], this.towers[1], this.towers)
  }
}

const driver = () => {
  if (process.argv.length > 3 || process.argv.length < 3) {
    console.error('Usage: node towers.js <n>\nWhere n is the number of disks!');
    return;
  }
  let n = Number(process.argv[2]);
  let p = new Puzzle(n);

  p.runPuzzle();
}

driver();