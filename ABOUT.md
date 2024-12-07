Transferring a p5.js Sketch from Processing IDE to GitHub and Hosting on GitHub Pages
=====================================================================================

This document provides step-by-step instructions for transferring a p5.js sketch from the Processing IDE to GitHub and hosting it on GitHub Pages. It also covers differences between p5.js in Processing IDE and the browser and how to create responsive web sketches.

=====================================================================================

1. Key Differences Between p5.js in Processing IDE vs. Browser
--------------------------------------------------------------

**Processing IDE**
- Runs locally on your computer.
- Assumes fixed canvas dimensions.
- Local debugging with the Processing console.
- Limited to local environments.

**Browser**
- Accessed through HTML, CSS, and JavaScript files.
- Hosted online for global access.
- Canvas dimensions can respond to browser window resizing.
- Debugging via browser developer tools.

=====================================================================================

2. Preparing Your Sketch for the Web
------------------------------------

**A. Setting Up Your Project Folder**
1. Create a folder for your project.
2. Add the following files:
   - `index.html` (main webpage).
   - `sketch.js` (p5.js code).
   - Additional folders (e.g., `assets/`) for images, fonts, and sounds.

**B. Writing the `index.html` File**
The HTML file links your p5.js code to the browser. Use this template:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>My p5.js Sketch</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.6.0/p5.js"></script>
  <style>
    body {
      margin: 0;
      padding: 0;
    }
  </style>
</head>
<body>
  <script src="sketch.js"></script>
</body>
</html>

**C. Adjusting the Sketch**
1. Make the canvas responsive using `windowWidth` and `windowHeight`:

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  // Add your sketch code here
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

2. Use relative paths for assets (e.g., `assets/image.png`).
3. Avoid file I/O (e.g., `loadStrings()` or `save()`) unless using a backend.
4. Use browser developer tools (Ctrl+Shift+I or Cmd+Opt+I) for debugging.

=====================================================================================

3. Uploading Your Project to GitHub
-----------------------------------

**A. Creating a Repository**
1. Log in to GitHub and create a new repository.
2. Name it and ensure it is set to "Public."
3. Click "Create Repository."

**B. Uploading Files**
1. Clone the repository:
   git clone https://github.com/your-username/your-repository.git

2. Copy project files into the cloned folder.
3. Push files to GitHub:
   git add .
   git commit -m "Initial commit"
   git push origin main

=====================================================================================

4. Hosting Your Sketch with GitHub Pages
----------------------------------------

1. Go to your repository on GitHub.
2. Navigate to "Settings."
3. Scroll to the "Pages" section.
4. Set the source branch to `main` (or `master`) and save.
5. GitHub provides a URL like `https://your-username.github.io/your-repository/`.

=====================================================================================

5. Considerations for Hosting on the Web
----------------------------------------

**A. Performance**
- Optimize asset sizes (e.g., compress images).
- Minimize resource-heavy animations.

**B. Cross-Browser Compatibility**
- Test your sketch on different browsers (Chrome, Firefox, Safari).

**C. Responsiveness**
- Use dynamic canvas dimensions (`windowWidth` and `windowHeight`).
- Optionally, enhance visuals with CSS.

=====================================================================================

6. Bonus: Making the Canvas Responsive
--------------------------------------

Use this code to ensure the canvas resizes with the browser window:

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(100, 150, 200);
  ellipse(mouseX, mouseY, 50, 50);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

=====================================================================================

This guide equips you to transfer your p5.js sketch to the web with GitHub Pages and ensure it is responsive for an optimal user experience. Explore web-based features to enhance your creativity!
