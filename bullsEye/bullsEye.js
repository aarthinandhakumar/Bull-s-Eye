        var bullsEyeModule = (function() {
        window.onload = init;
        // canvas and context variables
        var canvas;
        var context;
        // center of the pattern
        var centerX, centerY;
        var delay = false;
        // Interval
        var timerId;
        function init() {
        canvas = document.getElementById("testCanvas");
        context = canvas.getContext("2d");
        centerX = canvas.width / 2;
        centerY = canvas.height / 2;
        // draw the initial pattern
        drawPattern();
        }
        // called whenever the slider value changes or the delay checkbox is clicked
        function drawPattern()
        {
        if (timerId) {
        clearInterval(timerId);
        timerId = undefined;
        }
        context.clearRect(0, 0, canvas.width, canvas.height);
        var bandWidth = document.getElementById("band").value;
        document.getElementById("widthDisplay").value = bandWidth;
        delay = document.getElementById("delay").checked;
        var radius = 200; // Start with full radius (half of canvas size)
        var colors = ['red', 'blue']; // Alternate between red and blue colors
        var i = 0; // Track color index
        if (delay) {
        // Draw with delay
        timerId = setInterval(function () {
        if (radius > 0) {
        drawCircle(radius, colors[i % 2]);
        radius -= bandWidth;
        i++;
        } else {
        clearInterval(timerId); // Stop when radius becomes zero
        }
        }, 1500); // Delay 1500ms
        } else {
        // To draw instantly without delay
        while (radius > 0) {
        drawCircle(radius, colors[i % 2]);
        radius -= bandWidth;
        i++;
        }
        }
        }
        // To draw a filled circle at the center of the canvas
        function drawCircle(radius, color) {
        context.beginPath();
        context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        context.fillStyle = color;
        context.fill();
        context.closePath();
        }
        return {
        drawPattern: drawPattern
        };

        })();