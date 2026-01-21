const links = document.querySelectorAll(".nav__link");

links.forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector(".nav__menu").classList.remove("show");
  });
});

window.addEventListener("scroll", () => {
  let current = "";
  document.querySelectorAll("section").forEach(section => {
    const sectionTop = section.offsetTop;
    if(scrollY >= sectionTop - 200){
      current = section.getAttribute("id");
    }
  });

  links.forEach(li => {
    li.classList.remove("active-link");
    if(li.getAttribute("href") == "#" + current){
      li.classList.add("active-link");
    }
  });
});
