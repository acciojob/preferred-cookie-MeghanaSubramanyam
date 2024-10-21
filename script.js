//your JS code here. If required.
// Function to set the CSS variables based on the saved cookie preferences
function applyPreferences(fontSize, fontColor) {
  document.documentElement.style.setProperty("--fontsize", fontSize + "px");
  document.documentElement.style.setProperty("--fontcolor", fontColor);
}

// Function to save preferences to cookies
function savePreferences(fontSize, fontColor) {
  document.cookie = `fontsize=${fontSize}; path=/; max-age=31536000`; // Save for 1 year
  document.cookie = `fontcolor=${fontColor}; path=/; max-age=31536000`;
}

// Function to get cookie by name
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

// Load saved preferences when the page loads
window.addEventListener("DOMContentLoaded", () => {
  const savedFontSize = getCookie("fontsize") || 16;
  const savedFontColor = getCookie("fontcolor") || "#000000";

  // Apply the saved preferences
  applyPreferences(savedFontSize, savedFontColor);

  // Set the form inputs to the saved values
  document.getElementById("fontsize").value = savedFontSize;
  document.getElementById("fontcolor").value = savedFontColor;
});

// Handle form submission
document.getElementById("customForm").addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent the form from submitting

  const fontSize = document.getElementById("fontsize").value;
  const fontColor = document.getElementById("fontcolor").value;

  // Save preferences in cookies
  savePreferences(fontSize, fontColor);

  // Apply preferences immediately
  applyPreferences(fontSize, fontColor);
});
