# Netzsch Tech Task
Hi, it's Ivans implementation of technical task in form of "Netzsz" application. 
"Netzsz" is a data visualization application for representing some user data gained from existing posts sharing application called "{JSON} Placeholder".
# App content
This app have features like:
  - Visualization of users activity data provided by charts;
  - Two completly different solutions including: simple bar chart and doughnut chart for more detailed analysis;
  - Essential calculation of posts workload;
  - Page color toggler for users with Photophobia;
  - Full page responsiveness, accessible on any device;
# Instalation
To access "Netzsz" application no installation is required (https://dickhurtz.github.io/Netzsch)
However if You would like to create new app based on "Netzsz" you can access code via gitHub Clone or simply download .zip package.
Before running application make sure that all required packages have been installed by "npm install" command.
In some cases you may have dependecies conflict in that case add "--legacy-peer-deps" to install command also build is required (npm run build).
It may happen that application may not load properly, this could be caused by different patterns of reading file paths in different eviroments in that case check routing of essential files like: "./src/main.jsx".
Some additional WebAssmbly calculations exist in application structure and you may use them but some eviroments may not read path to them properly in that case you can solve it by moving WASM file you want to some public folder for easy access.
