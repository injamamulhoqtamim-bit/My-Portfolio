
const slider = document.getElementById("project-slider");
const cards = slider.children;

let index = 0;
const visibleCards = 3; // desktop
const total = cards.length;

function updateSlider() {
  const cardWidth = cards[0].offsetWidth + 24; // margin included
  slider.style.transform = `translateX(-${index * cardWidth}px)`;

  updateDots();
}

// NEXT
document.getElementById("nextBtn").addEventListener("click", () => {
  if (index < total - visibleCards) {
    index++;
    updateSlider();
  }
});

// PREV
document.getElementById("prevBtn").addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateSlider();
  }
});


// 🔵 Pagination Dots
const pagination = document.getElementById("pagination");

for (let i = 0; i < total - visibleCards + 1; i++) {
  const dot = document.createElement("button");
  dot.className = "w-3 h-3 rounded-full bg-gray-400";

  dot.addEventListener("click", () => {
    index = i;
    updateSlider();
  });

  pagination.appendChild(dot);
}

function updateDots() {
  [...pagination.children].forEach((dot, i) => {
    dot.classList.remove("bg-blue-500");
    dot.classList.add("bg-gray-400");

    if (i === index) {
      dot.classList.add("bg-blue-500");
    }
  });
}

updateSlider();
