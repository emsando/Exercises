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