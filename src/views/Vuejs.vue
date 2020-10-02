<template>
  <div class="centralTextVuejs">
    <div class="justifyAlign">
      Vue.js (commonly referred to as Vue; pronounced /vjuː/, like "view"[4]) is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications.[11] It was created by Evan You, and is maintained by him and the rest of the active core team members coming from various companies such as Netlify and Netguru.[12]
      Vue.js features an incrementally adaptable architecture that focuses on declarative rendering and component composition. The core library is focused on the view layer only.[13] Advanced features required for complex applications such as routing, state management and build tooling are offered via officially maintained supporting libraries and packages[14], with Nuxt.js as one of the most popular solutions[citation needed]
      Vue.js lets you extend HTML with HTML attributes called directives.[15] The directives offer functionality to HTML applications, and come as either built-in or user defined directives.
      Vue was created by Evan You after working for Google using AngularJS in a number of projects. He later summed up his thought process: "I figured, what if I could just extract the part that I really liked about Angular and build something really lightweight."[16] The first source code commit to the project was dated July 2013, and Vue was first released the following February, in 2014. 
      Vue components extend basic HTML elements to encapsulate reusable code. At a high level, components are custom elements to which the Vue’s compiler attaches behavior. In Vue, a component is essentially a Vue instance with pre-defined options.[33]
      ue uses an HTML-based template syntax that allows binding the rendered DOM to the underlying Vue instance's data. All Vue templates are valid HTML that can be parsed by specification-compliant browsers and HTML parsers. Vue compiles the templates into virtual DOM render functions. A virtual Document Object Model (or “DOM”) allows Vue to render components in its memory before updating the browser. Combined with the reactivity system, Vue is able to calculate the minimal number of components to re-render and apply the minimal amount of DOM manipulations when the app state changes.
      Vue users can use template syntax or choose to directly write render functions using JSX.[34] Render functions allow application to be built from software components.[35]
      Vue features a reactivity system that uses plain JavaScript objects and optimized re-rendering. Each component keeps track of its reactive dependencies during its render, so the system knows precisely when to re-render, and which components to re-render.[36]
      Vue provides a variety of ways to apply transition effects when items are inserted, updated, or removed from the DOM.
      A traditional disadvantage of single-page applications (SPAs) is the inability to share links to the exact "sub" page within a specific web page. Because SPAs serve their users only one URL-based response from the server (it typically serves index.html or index.vue), bookmarking certain screens or sharing links to specific sections is normally difficult if not impossible. To solve this problem, many client-side routers delimit their dynamic URLs with a "hashbang" (#!), e.g. page.com/#!/. However, with HTML5 most modern browsers support routing without hashbangs.
      Vue provides an interface to change what is displayed on the page based on the current URL path -- regardless of how it was changed (whether by emailed link, refresh, or in-page links). Additionally, using a front-end router allows for the intentional transition of the browser path when certain browser events (i.e. clicks) occur on buttons or links. Vue itself doesn’t come with front-end hashed routing. But the open source "vue-router" package provides an API to update the application's URL, supports the back button (navigating history), and email password resets or email verification links with authentication URL parameters. It supports mapping nested routes to nested components and offers fine-grained transition control. With Vue, developers are already composing applications with small building blocks building larger components. With vue-router added to the mix, components must merely be mapped to the routes they belong to, and parent/root routes must indicate where children should render.[39] 
      <br><br>
      Source:<br>
      https://en.wikipedia.org/wiki/Vue.js
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
