document.addEventListener('DOMContentLoaded', function () {
    let nav = document.getElementById('navbar');
    
    if (nav) { 

  
      function updateProgressBar() {
        const scrollPosition = document.documentElement.scrollTop;
  
        if (scrollPosition <= 0) {
          nav.style.backgroundColor = '#141414';
          nav.style.width = '98%';
        } else {
          nav.style.backgroundColor = '#1e1e1e97';
          nav.style.width = '93%';
        }
      }
  
      window.addEventListener('scroll', updateProgressBar);
      updateProgressBar();
    } else {
      console.error('Navigation bar element not found');
    }
  });

//   Progress Bar

window.onscroll = function() {
    updateProgressBar();
};

const bar = document.querySelector('#progress-con div');
const nav = document.getElementById('nav');

function updateProgressBar() {
    const scrollPosition = document.documentElement.scrollTop;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollPosition / windowHeight) * 100;
    bar.style.width = scrolled + '%';
}

const fcb = document.getElementById('FCB');
const psg = document.getElementById('PSG');
const overlay1 = document.querySelector('.overlay1');
const overlay2 = document.querySelector('.overlay2');

fcb.addEventListener('mouseenter', () => {
  overlay1.classList.add('show');
});
fcb.addEventListener('mouseleave', () => {
  overlay1.classList.remove('show');
});

psg.addEventListener('mouseenter', () => {
  overlay2.classList.add('show');
});
psg.addEventListener('mouseleave', () => {
  overlay2.classList.remove('show');
});
