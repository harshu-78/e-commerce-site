
const bar = document.getElementById("bar");
const nav = document.querySelector(".navbar");
const close = document.getElementById("close");

const a1 = document.getElementById("a-1");
const a2 = document.getElementById("a-2");
const product1 = document.getElementById("product1");
const product2 = document.getElementById("product2");



if (bar){
    bar.addEventListener("click",() => {
        nav.classList.add("active");
    })
}
if (close){
    close.addEventListener("click",() => {
        nav.classList.remove("active");
    })
}




if (a1) {
    a1.addEventListener("click", () => {
        product1.style.display = "none";
        product2.style.display = "block";
    });
}

if (a2) {
    a2.addEventListener("click", () => {
        product1.style.display = "block";
        product2.style.display = "none";
    });
}


document.querySelectorAll('.faq-item h3').forEach(item => {
    item.addEventListener('click', () => {
      const answer = item.nextElementSibling;
      answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
  });
  






  const slider = document.querySelector('.slider');
  const images = slider.querySelectorAll('img');
  const navIndicator = slider.querySelector('.nav-indicator');
  const dots = navIndicator.querySelectorAll('.dot');
  let currentImage = 0;
  
  function slide() {
    images[currentImage].style.transform = 'translateX(-100%)';
    currentImage = (currentImage + 1) % images.length;
    if (currentImage === 0) {
      images.forEach((image, index) => {
        image.style.transform = `translateX(${index * 100}%)`;
      });
    }
    images[currentImage].style.transform = 'translateX(0)';
    updateNavIndicator();
  }
  function updateNavIndicator() {
    dots.forEach((dot, index) => {
      if (index === currentImage) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentImage = index;
      updateNavIndicator();
      images.forEach((image, imageIndex) => {
        if (imageIndex === currentImage) {
          image.style.transform = 'translateX(0)';
        } else {
          image.style.transform = `translateX(${(imageIndex - currentImage) * 100}%)`;
        }
      });
    });
  });
  
  setInterval(slide, 4000);

slider.addEventListener('mouseover', () => {
  navIndicator.classList.add('show');
});



const toggleSearch = (search,button)=>{
  const searchBar = document.getElementById(search),
  searchButton = document.getElementById(button);

  searchButton.addEventListener('click',()=>{
    searchBar.classList.toggle('show-search');
  })
}
toggleSearch('search-bar','search-button');

