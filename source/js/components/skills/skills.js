// skills
// import $ from 'jquery';
import './Skills.scss';

console.log('mySkills init');

const mySkills = document.getElementById('mySkills');
const skillsButton = document.querySelectorAll('.button-skill');

mySkills.addEventListener('click', () => {
  for (var skillsButtons of skillsButton) if (skillsButtons.classList.contains('active')) {
    //remove class
    skillsButtons.classList.remove('active');
  }
  else {
    // add class
    skillsButtons.classList.add('active');
  }
});

// CTRL+S COMBO WAS PRESSED
const body = document.getElementsByTagName('body')[0];
body.addEventListener('keydown', (event) => {
  if (event.keyCode == 83) {
    for (var skillsButtons of skillsButton) if (skillsButtons.classList.contains('active')) {
      //remove class
      skillsButtons.classList.remove('active');
    }
    else {
      // add class
      skillsButtons.classList.add('active');
    }
  }
});

// $("body").keydown(function(ev) {
//   if (ev.which == 83) {
//     console.log('CTRL+S COMBO WAS PRESSED!');
//     $('#mySkills').addClass('active')
//   }
// });

