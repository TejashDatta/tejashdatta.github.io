import colors from "vuetify/es5/util/colors";

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: "%s - " + "Tejash Datta",
    title: "Tejash Datta" || "",
    meta: [
      { charset: "utf-8" },
      { name: "theme-color", content: "#1A237E" },
      {
        name: "google-site-verification",
        content: "O-d0EZ2CE7-QPJaFNZFzIllWfSegld08pYtnHdCfCqM"
      },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: `Hi, I'm Tejash Datta. This website presents my projects,
         research and work experience, and specifies other relevant information about me.`
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Orbitron&display=swap"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Lato:300,400&display=swap"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#FFB300" },
  /*
   ** Global CSS
   */
  css: ["~/assets/global-styles.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/vuetify"],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    treeShake: true,
    customVariables: ["~/assets/variables.scss"],
    theme: {
      themes: {
        light: {
          secondary: colors.indigo.darken3,
          primary: colors.amber.darken1
          // accent: colors.grey.darken3,
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  generate: {
    dir: 'docs'
  }
};
