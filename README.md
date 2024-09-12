# BullsEye Pattern Application

This is a simple HTML5 Canvas application that draws a bulls-eye pattern with alternating red and blue filled circles. The band width can be controlled via a slider, and an optional delay can be added between drawing each band.

## Features

- **Canvas Size**: 400 x 400
- **Pattern**: Alternating red and blue circles
- **Control**: A slider to adjust the band width (range: 5-50, step: 5)
- **Delay**: A checkbox to introduce a 1500ms delay between drawing successive bands

## How to Use

1. Open `bullsEye.html` in a browser.
2. Use the slider to change the band width between 5 and 50.
3. Optionally, check the "Delay" box to add a 1500ms delay between drawing each band.
4. The canvas will automatically update the pattern as you change the slider value or toggle the delay option.

## File Structure

- **bullsEye.html**: The HTML file containing the canvas, slider, and delay checkbox.
- **bullsEye.js**: The JavaScript file that draws the pattern and handles user inputs.git

## Installation

1. Download or clone the project to your local machine.
2. Open `bullsEye.html` in any modern web browser (Google Chrome, Firefox, etc.).
3. No additional dependencies are required.

## Example Output

The bulls-eye pattern will appear with alternating red and blue circles, with different band widths based on the slider value. Below are two example outputs:

### Bandwidth: 25
- Default bandwidth that fills the canvas with alternating colors.
  
### Bandwidth: 10
- Finer bands with more circles.

## License

This project is licensed under the MIT License - see the [LICENSE](License.txt) file for details.

