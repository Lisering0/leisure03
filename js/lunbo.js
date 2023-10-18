let currentSlide = 0;
const slides = document.querySelectorAll('.slides img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// 显示当前幻灯片
function showSlide() {
  // 隐藏所有幻灯片
  for (let slide of slides) {
    slide.style.display = 'none';
  }
  // 显示当前幻灯片
  slides[currentSlide].style.display = 'block';
}

// 显示下一张幻灯片
function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide();
}

// 显示上一张幻灯片
function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide();
}

// 添加事件监听器
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// 自动轮播
let timer = setInterval(nextSlide, 2000);

// 当鼠标移入时停止自动轮播
const slider = document.querySelector('.slider');
slider.addEventListener('mouseover', () => {
  clearInterval(timer);
});

// 当鼠标移出时继续自动轮播
slider.addEventListener('mouseout', () => {
  timer = setInterval(nextSlide, 2000);
});

// 显示第一张幻灯片
showSlide();
