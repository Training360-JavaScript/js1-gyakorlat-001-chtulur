const handleClick = () => {
  document.querySelectorAll(`.button`).forEach((button) =>
    button.addEventListener("click", () => {
      console.log(button.textContent);
    })
  );
};
