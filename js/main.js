let dropsDropped = [false, false]; // Track if each drop has been animated down

function drop_msg() {
  const dropElements1 = document.querySelectorAll(".drop1"); // Get all drop1 elements
  const dropElements2 = document.querySelectorAll(".drop2"); // Get all drop2 elements

  dropElements1.forEach((dropElement, index) => {
    if (!dropsDropped[index]) {
      dropElement.style.transform = "translateY(600%)"; // Move drop1 to its final position
      dropsDropped[index] = true; // Mark this drop as animated
    }
  });

  dropElements2.forEach((dropElement, index) => {
    if (!dropsDropped[index + dropElements1.length]) {
      // Adjust index for drop2
      dropElement.style.transform = "translateY(660%)"; // Move drop2 to its final position
      dropsDropped[index + dropElements1.length] = true; // Mark this drop as animated
    }
  });

  document.getElementsByClassName("chatarea_msg")[0].innerHTML =
    "Juniad ka kam ha ya sb";
}
