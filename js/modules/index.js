require(['data'], function(foo){
  console.log(foo);
  var data = foo.foo();
  console.log(data);
  var pElem = document.createElement('p');
  pElem.classList.add('content');
  pElem.innerHTML = data;
  document.body.appendChild(pElem);
});
