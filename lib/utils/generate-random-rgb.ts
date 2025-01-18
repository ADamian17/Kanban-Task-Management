export function generateRandomRGB() {
  // Generate random values for red, green, and blue components
  const red = Math.floor(Math.random() * 128) + 128; // 128 to 255
  const green = Math.floor(Math.random() * 128) + 128; // 128 to 255
  const blue = Math.floor(Math.random() * 128) + 128; // 128 to 255

  // Return the RGB values as an object
  return `rgb(${red}, ${green}, ${blue})`;
}
