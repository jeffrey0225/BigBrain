// slider_1
Element.prototype.addClass = function (className)
{
  if (!this.classList.contains(className)) {
    this.classList.add(className);
  }
};

Element.prototype.removeClass = function (className)
{
  if (this.classList.contains(className)) {
    this.classList.remove(className);
  }
};

Array.prototype.first = function ()
{
  return this[0];
};

Array.prototype.last = function ()
{
  return this[this.length - 1];
};

document.querySelectorAll('.inputslider').forEach(
inputslider => {
  let values = inputslider.dataset.values.split(','),
  value = parseFloat(inputslider.dataset.value),
  unit = '',
  min = parseFloat(values.first()),
  max = parseFloat(values.last()),
  input = inputslider.querySelector('input'),
  area = inputslider.querySelector('.area'),
  knob = inputslider.querySelector('.knob'),
  fill = inputslider.querySelector('.fill');

  if (inputslider.dataset.unit) {
    unit = inputslider.dataset.unit;
  }

  values.forEach(
  (value, i) => {
    values[i] = value = parseFloat(value);

    let span = document.createElement('span');
    span.innerText = value + unit;
    span.setAttribute('data-value', value);

    if (i == 0) {
      span.addClass('selected');
      input.value = value;
    }

    span.style.left = gsap.utils.mapRange(min, max, 0, 100, value) + '%';

    inputslider.querySelector('.values').appendChild(span);
  });


  Draggable.create(knob, {
    type: 'x',
    edgeResistance: 1,
    bounds: area,
    throwProps: false,
    onDrag: function ()
    {
      handleInputslider(this, false);
    },
    onDragEnd: function ()
    {
      handleInputslider(this, true);
    } });


});


function handleInputslider(instance, snap)
{
  let inputslider = instance.target.closest('.inputslider'),
  fill = inputslider.querySelector('.fill'),
  values = inputslider.dataset.values.split(','),
  min = parseFloat(values.first()),
  max = parseFloat(values.last()),
  xPercent = gsap.utils.mapRange(0, instance.maxX, 0, 100, instance.x),
  relativeValue = gsap.utils.mapRange(0, instance.maxX, min, max, instance.x),
  finalValue = gsap.utils.snap(values, relativeValue),
  snapX = gsap.utils.mapRange(min, max, 0, instance.maxX, finalValue),
  fillWidth = gsap.utils.mapRange(0, instance.maxX, 0, 100, snapX);

  if (snap) {
    gsap.to(instance.target, { duration: .2, x: snapX });
    gsap.to(fill, { duration: .2, width: fillWidth + '%' });
  } else {
    values.forEach(
    (value, i) => {
      values[i] = parseFloat(value);
    });


    fill.style.width = xPercent + '%';

    inputslider.querySelectorAll('.values span').forEach(
    span => {
      if (parseFloat(span.dataset.value) == finalValue) {
        span.addClass('selected');
      } else {
        span.removeClass('selected');
      }
    });


    inputslider.querySelector('input').value = finalValue;
  }
}

// slider_r
let rangeInput_r = document.querySelector(".red .range-input input");
let rangeValue_r = document.querySelector(".red .range-input .value div");

let start_r = parseFloat(rangeInput_r.min);
let end_r = parseFloat(rangeInput_r.max);
let step_r = parseFloat(rangeInput_r.step);

for(let i=start_r;i<=end_r;i+=step_r){
  rangeValue_r.innerHTML += '<div>'+i+'</div>';
}

rangeInput_r.addEventListener("input",function(){
  let top = parseFloat(rangeInput_r.value)/step_r * -40;
  rangeValue_r.style.marginTop = top+"px";
});

//slider_g
let rangeInput_g = document.querySelector(".green .range-input input");
let rangeValue_g = document.querySelector(".green .range-input .value div");

let start_g = parseFloat(rangeInput_g.min);
let end_g = parseFloat(rangeInput_g.max);
let step_g = parseFloat(rangeInput_g.step);

for(let i=start_g;i<=end_g;i+=step_g){
  rangeValue_g.innerHTML += '<div>'+i+'</div>';
}

rangeInput_g.addEventListener("input",function(){
  let top = parseFloat(rangeInput_g.value)/step_g * -40;
  rangeValue_g.style.marginTop = top+"px";
});

//slider_b
let rangeInput_b = document.querySelector(".blue .range-input input");
let rangeValue_b = document.querySelector(".blue .range-input .value div");

let start_b = parseFloat(rangeInput_b.min);
let end_b = parseFloat(rangeInput_b.max);
let step_b = parseFloat(rangeInput_b.step);

for(let i=start_b;i<=end_b;i+=step_b){
  rangeValue_b.innerHTML += '<div>'+i+'</div>';
}

rangeInput_b.addEventListener("input",function(){
  let top = parseFloat(rangeInput_b.value)/step_b * -40;
  rangeValue_b.style.marginTop = top+"px";
});