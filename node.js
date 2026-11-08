document.addEventListener("DOMContentLoaded", () => {
  const colorBox = document.getElementById("color-box");
  const changeColorBtn = document.getElementById("change-color-btn");

  // Example colors for testing the click button
  const testColors = ["#e74c3c", "#2ecc71", "#f1c40f"]; // red, green, yellow
  let currentIndex = 0;

  // Generate a random hexadecimal color (e.g. "#A3F9C1")
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // When clicked, loop through the 3 test colors
  changeColorBtn.addEventListener("click", () => {
    const testColor = testColors[currentIndex];
    colorBox.style.backgroundColor = testColor;
    console.log(`Applying test color: ${testColor}`);

    // Move to the next color, wrapping back to 0 after the 3rd
    currentIndex = (currentIndex + 1) % testColors.length;
  });
});
