console.log('Test script loaded')

runTests.onclick = () => console.log('This log added via <buttonId>.onclick');
runTests.addEventListener('click', () => {
  console.log('This log added via <buttonId>.addEventListener');
  runTests.onclick = null;
});

runTests.addEventListener('click', () => {
  console.log('this with () = {}: ', this);
})

runTests.addEventListener('click', function() {
  console.log('this with function() {}: ', this);
  console.log('================================='); // visual buffer for console logs
})

// 'parent' causes problems
parentdiv.addEventListener('click', function(e) {
  if (e.target !== runTests) return null; // keeps listeners from firing when you click inside the box
  console.log('parent received click: ', this);
  console.log('target: ', e.target);
  console.log('current target: ', e.currentTarget);
  console.log('================================='); 
});

grandparent.addEventListener('click', function(e) {
  if (e.target !== runTests) return null; // keeps listeners from firing when you click inside the box
  console.log('grandparent received click: ', this);
  console.log('target: ', e.target);
  console.log('current target: ', e.currentTarget);
  console.log('=================================');
});

// added after parent listeners
runTests.addEventListener('click', function(e) {
  console.log('child received click: ', this);
  console.log('target: ', e.target);
  console.log('current target: ', e.currentTarget);
  console.log('=================================');
})

grandparent.addEventListener('click', function(e) {
  if (e.target !== this) return null
  this.classList.add('testClass');
  console.log(this.classList);
  this.classList.remove('testClass');
  console.log(this.classList);
})

parentdiv.addEventListener('click', function(e) {
  if (e.target !== this) return null
  console.log(this.id);
  console.log(this.nodeName);
})