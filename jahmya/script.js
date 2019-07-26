function changeColor(){
var r = Math.round(Math.random() * 255);
var g = Math.round(Math.random() * 255);
var b = Math.round(Math.random() * 255);
console.log(r,g,b);
document.body.style.background= 'rgb(' +r+ ',' +g+ ',' +b+')';
}

function randomfacts(){
  facts=('i was born in Washington D.C.','i was born on July 20th,2003','my favorite colors are pink & black','i attend Abraham Lincoln High School','i am the only child','my favorite store is victoria secret','my favorite fruit is cherries','my favorite genre of music is hip-hop','i also like classical music','my favorite show is lucifer','my favorite holiday is christmas ','my favorite movie is see you yesterday','my dream college is Oxford'  )
  var facts= Math.round(Math.random()*100);
}
