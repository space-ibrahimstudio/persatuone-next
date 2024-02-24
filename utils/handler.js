export const scrollToElement = (offsetY = 0) => {
  const elements = document.querySelectorAll("[data-scroll-to]");

  elements.forEach((element) => {
    element.addEventListener("click", () => {
      const targetId = element.getAttribute("data-scroll-to");
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const yCoordinate =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset +
          offsetY;
        window.scrollTo({ top: yCoordinate, behavior: "smooth" });
      }
    });
  });
};
