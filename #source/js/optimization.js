const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src;

      observer.unobserve(entry.target);
    }
  });
});

document.querySelectorAll("img").forEach((image) => imageObserver.observe(image));
