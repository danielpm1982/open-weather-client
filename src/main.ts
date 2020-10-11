import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

/*
This is the Vue instance creation, which adds the router and the store to this
particular Vue instance, as well as renders the App.vue content, along with 
all the view components and their subcomponents, to js, in order to later add
all these to the virtual DOM tree of the app.

The views and their subcomponents are injected at the App.vue through the router-view 
element, dynamically, according to the active route. When the route changes, the 
injected view also changes at the App.vue. When the view state (data) changes, the 
view is updated and re-rendered as well.

Therefore, every time some view content or route changes, this App.vue is updated at the 
virtual DOM and ultimately mounted at the actual DOM of the only HTML page of this 
Single Page Application - index.html, specifically at the div whose id is "app". All 
the updates on the active routes and components will be re-rendered and updated there 
automatically by Vue, without reloading the HTML page or needing multiple pages to show
different views.

Electron will then simply take that final and only HTML page and load as the URL for 
the only needed window of this application. And all Vue updates will automatically 
reflect on that Electron GUI component as well.
*/
