let obj = {
  foo: 'bar',
  func: function() {
    var self = this;
    console.log('outer this.foo: ' + this.foo); // bar
    console.log('outer self.foo: ' + self.foo); // bar
    (function() {
      console.log('inner this.foo: ' + this.foo); // undefined
      console.log('inner self.foo: ' + self.foo); // bar
    }());
  }
}

obj.func();

const outsideArrowFunc = () => {
  console.log('Outside () => {} this.foo: ', this.foo);
}

const outsideFunc = function() {
  console.log('Outside func(){} this.foo: ', this.foo);
}

let obj2 = {
  foo: 'baz',
  test1: outsideArrowFunc,
  test2: outsideFunc,
  test3: () => {
    console.log('Inside () => {} this.foo: ', this.foo);
  },
  test4: function() {console.log('Inside function(){} this.foo: ', this.foo)},
  test5: function() {
    this.test3()
    this.test4.call(this)
  }
}

console.log('===============')
obj2.test1();
obj2.test2();
obj2.test3();
obj2.test4();
console.log('===============')
console.log('obj2.test3.call(obj):')
obj2.test3.call(obj);
console.log('obj2.test4.call(obj):')
obj2.test4.call(obj);
console.log('WRAPPED:')
obj2.test5();