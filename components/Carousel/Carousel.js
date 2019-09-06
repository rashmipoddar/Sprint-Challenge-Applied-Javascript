/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/


function carouselCreator() {
  const carouselContainer = document.querySelector('.carousel-container');
  const images = ['./assets/carousel/mountains.jpeg', './assets/carousel/computer.jpeg', './assets/carousel/trees.jpeg', './assets/carousel/turntable.jpeg'];
  
  const carousel = document.createElement('div');
  carousel.classList.add('carousel');
  carouselContainer.appendChild(carousel);

  const buttonLeft = document.createElement('div');
  buttonLeft.classList.add('left-button');
  buttonLeft.textContent = '<';
  // carousel.appendChild(buttonLeft);

  const image1 = document.createElement('img');
  image1.src = './assets/carousel/mountains.jpeg';
  image1.style.display = 'block';
  carousel.append(image1);

  const image2 = document.createElement('img');
  image2.src = './assets/carousel/computer.jpeg';
  // image2.style.display = 'block';
  carousel.append(image2);

  const image3 = document.createElement('img');
  image3.src = './assets/carousel/trees.jpeg';
  // image3.style.display = 'block';
  carousel.append(image3);

  const image4 = document.createElement('img');
  image4.src = './assets/carousel/turntable.jpeg';
  // image4.style.display = 'block';
  carousel.append(image4);

  const buttonRight = document.createElement('div');
  buttonRight.classList.add('right-button');
  buttonRight.textContent = '>';
  carousel.append(buttonLeft, buttonRight);

  buttonRight.addEventListener('click', () => {
    const imgInView = document.querySelector('.carousel img');
    console.log(imgInView);
  })

  // return carousel;
  
}

carouselCreator();