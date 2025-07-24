// 1. Get sections and nav container
const sections = document.querySelectorAll("section");
const navList = document.getElementById("navbar__list");

// 2. Build nav items dynamically
sections.forEach(section => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = `#${section.id}`;
  a.textContent = section.getAttribute("data-nav");
  a.classList.add("menu__link");
  li.appendChild(a);
  navList.appendChild(li);
});

// 3. Add 'active' class to section in viewport
window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const navLink = document.querySelector(`a[href="#${section.id}"]`);

    if (rect.top >= -200 && rect.top <= 300) {
      section.classList.add("your-active-class");
      navLink.classList.add("active-link");
    } else {
      section.classList.remove("your-active-class");
      navLink.classList.remove("active-link");
    }
  });
});

// 4. Smooth scroll on nav link click
document.querySelectorAll("a.menu__link").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const sectionId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(sectionId);
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

// 5. Scroll to top button
const topButton = document.getElementById("myBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
};

function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
