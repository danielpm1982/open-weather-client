<template>
  <div class="centralTextVuejs">
    <div class="justifyAlign">
      Electron (formerly known as Atom Shell[4]) is an open-source software framework developed and maintained by GitHub.[5] It allows for the development of desktop GUI applications using web technologies: it combines the Chromium rendering engine and the Node.js runtime.[6] Electron is the main GUI framework behind several notable open-source projects including Atom,[7] GitHub Desktop,[8] Light Table,[9] Visual Studio Code,[10] and WordPress Desktop.[11]
      Electron applications are composed of multiple processes. There is the "main" process and several "renderer" processes. The main process runs the application logic, and can then launch multiple renderer processes, rendering the windows that appear on a user's screen rendering HTML and CSS.
      Both the main and renderer processes can run with Node.js integration if enabled.
      Most of Electron's APIs are written in C++ or Objective-C and then exposed directly to the application code through JavaScript bindings.[12] 
      Because Electron applications are web applications running in the Chromium engine, they may be vulnerable to web-related attacks such as cross-site scripting attacks, through the same attack vectors as a browser (e.g. Chromium) or other internal components (Node.js) if using certain versions of Electron.[13] Examples of such vulnerabilities have been fixed in the 1.7.13, 1.8.4, and 2.0.0-beta.5 Electron releases.[14]
      Electron applications have been criticized for containing very significant overhead due to their Chromium dependency, especially when their performance is compared to that of similar native applications.[15][16]
      <br><br>
      Source:<br>
      https://en.wikipedia.org/wiki/Electron_(software_framework)
    </div>
  </div>
  <!-- We are using node <script>document.write(process.versions.node)</script>,
  Chrome <script>document.write(process.versions.chrome)</script>,
  and Electron <script>document.write(process.versions.electron)</script>. -->
</template>
<style scoped>
    div.centralTextVuejs{
      width: 80%;
      margin: auto;
      text-align: left;
      font-size: 1em;
    }
    div.centralTextVuejs div.justifyAlign{
      text-align: justify;
      margin-bottom: 3em;
    }
  </style>
