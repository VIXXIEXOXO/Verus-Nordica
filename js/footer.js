// Fetch footer content
fetch("footer.html")
  .then((response) => response.text())
  .then((data) => {
    // Insert footer content into the container
    document.getElementById("footer-container").innerHTML = data;
  });