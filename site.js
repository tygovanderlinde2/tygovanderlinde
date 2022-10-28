// colouring the grades
const grades = document.getElementsByClassName("grades")
for (let i = 0; i < grades.length; i++) {
  let cell = grades[i];
  if (cell.textContent < 5.5) {
    cell.classList.remove('green')
  } else {
    cell.classList.add('green');
  };
};

// making the progressbar work
// getting the values of the grades
let grade1 = document.getElementById("grade1").innerHTML;
let grade2 = document.getElementById("grade2").innerHTML;
let grade3 = document.getElementById("grade3").innerHTML;
let grade4 = document.getElementById("grade4").innerHTML;
let grade5 = document.getElementById("grade5").innerHTML;
let grade6 = document.getElementById("grade6").innerHTML;
let grade7 = document.getElementById("grade7").innerHTML;
let grade8 = document.getElementById("grade8").innerHTML;
let grade9 = document.getElementById("grade9").innerHTML;
let grade10 = document.getElementById("grade10").innerHTML;
let grade11 = document.getElementById("grade11").innerHTML;
let grade12 = document.getElementById("grade12").innerHTML;
let grade13 = document.getElementById("grade13").innerHTML;
let grade14 = document.getElementById("grade14").innerHTML;
let grade15 = document.getElementById("grade15").innerHTML;
let grade16 = document.getElementById("grade16").innerHTML;
let grade17 = document.getElementById("grade17").innerHTML;
let grade18 = document.getElementById("grade18").innerHTML;
let ecs = 0;

// adjusting the ec
if (grade1 >= 5.5) {
  ecs += 2.5
};
if (grade2 >= 5.5) {
  ecs += 5
};
if ((grade3 >= 5.5) && (grade4 >= 5.5)) {
  ecs += 5
};
if ((grade5 >= 5.5) && (grade6 >= 5.5)) {
  ecs += 10
};
if (grade7 >= 5.5) {
  ecs += 5
};
if ((grade8 >= 5.5) && (grade9 >= 5.5) && (grade10 >= 5.5)) {
  ecs += 7.5
};
if ((grade11 >= 5.5) && (grade12 >= 5.5) && (grade13 >= 5.5)) {
  ecs += 10
};
if ((grade14 >= 5.5) && (grade15 >= 5.5)) {
  ecs += 12.5
};
if ((grade16 >= 5.5) && (grade17 >= 5.5) && (grade18 >= 5.5)) {
  ecs += 12.5
};

//styling the progressbar
let percentage = (ecs / 60) * 100;
document.getElementById("progressbar").style.width = percentage + "%";
document.getElementById("ecs").innerHTML = `${ecs} EC's`;