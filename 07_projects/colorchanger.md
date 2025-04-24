
```javascript

const buttons = document.querySelectorAll('.button');

const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    // console.log(e);
    console.log(e.target);
    body.style.backgroundColor = e.target.id;
  });
});
```



##BMI
``` javascript
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please give a valid data';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please give a valid data';
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${BMI}</span>`;
  }
});
```

##Clock

```javascript
const clock = document.getElementById('clock');
//const clock = document.querySelector('#clock')

//console.log(date.toLocaleTimeString());
setInterval(function () {
  // let date = new Date();
  let date = new Date()
  //console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);




```


