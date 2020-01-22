<template>
  <div>
    <h1 class="mb-5">Projects</h1>
    <strong class="mr-1">Note:</strong> Some sites may take a long time to
    initially load due to being hosted on a free Heroku server.
    <transition-group name="slide" tag="div" class="row">
      <v-col cols="12" sm="6" lg="4" v-for="project in projectsSlice" :key="project.name">
        <v-card height="100%" class="d-flex flex-column">
          <v-card-title>
            <component
              :is="project.site ? 'a' : 'span'"
              class="secondary--text"
              :href="project.site"
              target="_blank"
            >{{ project.name }}</component>
          </v-card-title>
          <v-card-text class="pb-1 text-justify">
            {{ project.desc }}
            <br />
            <br />
            <strong class="primary--text">Tech:</strong>
            {{ project.tech.join(", ") }}
          </v-card-text>
          <v-spacer />
          <v-divider />
          <v-card-actions class="py-1">
            <v-spacer />
            <div style="position: relative">
              <v-btn
                v-if="project.site"
                x-large
                color="secondary"
                icon
                :href="project.site"
                target="_blank"
              >
                <v-icon>mdi-web</v-icon>
              </v-btn>
              <v-btn
                v-if="project.github"
                x-large
                class="ml-0"
                color="black"
                icon
                :href="project.github"
                target="_blank"
              >
                <v-icon>mdi-github-circle</v-icon>
              </v-btn>
              <div style="position: absolute; top: 0; right: 0; opacity: 0">
                <v-tooltip top v-if="project.site">
                  <template v-slot:activator="{ on }">
                    <v-btn
                      v-on="on"
                      x-large
                      color="secondary"
                      icon
                      :href="project.site"
                      target="_blank"
                    >
                      <v-icon>mdi-web</v-icon>
                    </v-btn>
                  </template>
                  <span>View site</span>
                </v-tooltip>
                <v-tooltip top v-if="project.github">
                  <template v-slot:activator="{ on }">
                    <v-btn
                      v-on="on"
                      x-large
                      color="black"
                      icon
                      :href="project.github"
                      target="_blank"
                    >
                      <v-icon>mdi-github-circle</v-icon>
                    </v-btn>
                  </template>
                  <span>View source code</span>
                </v-tooltip>
              </div>
            </div>
          </v-card-actions>
        </v-card>
      </v-col>
    </transition-group>
  </div>
</template>

<script>
export default {
  head: () => ({
    title: "Projects"
  }),
  data: () => ({
    index: 0,
    projects: [
      {
        name: "This site",
        desc: `This personal website was designed using Vue with Vuetify UI framework and then generated into static webpages using Nuxt.`,
        tech: ["Vue.js", "Vuetify", "Nuxt"],
        site: null,
        github: "https://github.com/tejashdatta/tejashdatta.github.io"
      },
      {
        name: "Rental Easy",
        desc: `An e-commerce site where users in Kolkata can rent items such
        as books, appliances, equipment, etc. and put up their own
        unused items for rent. Users can also book experiences with other people such as cooking, gaming, dancing and more.`,
        tech: ["Vue.js", "Vuetify", "Firebase"],
        site: "https://rentaleasy.in",
        github: null
      },
      {
        name: "Banshee Vocab",
        desc: `A competitive online multiplayer quiz platform for language learners. 
        Uses firebase realtime database to implement multiplayer quiz functionality, including matchmaking.
        Also uses firestore, firebase authentication, and cloud storage.`,
        tech: ["Vue.js", "Vuetify", "Firebase"],
        site: "https://bansheevocab.web.app/",
        github: null
      },
      {
        name: "Would You Rather",
        desc: `A fun web app where users can post would-you-rather polls and vote on polls anonymously. 
      Front end created with Vue and Vuetify. Data storage and user authentication implemented through Firebase. 
      Implemented automatic anonymous account login to save site activity of unregistered users.`,
        tech: ["Vue.js", "Vuetify", "Firebase"],
        site: "https://would-you-rather-69ad5.web.app/",
        github: "https://github.com/TejashDatta/would-you-rather"
      },

      {
        name: "Poll Opinion",
        desc: `A web app where citizens can anonymously post their opinions regarding the parties that stood for the 2019 Indian National Elections.
      A full stack approach was followed where the back end runs on Node.js and stores data on a MongoDB database; 
      and the front end was made in React with Materialize CSS.`,
        tech: ["Node.js", "MongoDB", "ReactJS", "Materialize CSS"],
        site: "http://pollopinion.herokuapp.com/",
        github: "https://github.com/TejashDatta/poll-opinion"
      },

      {
        name: "Graph Studio",
        desc: `A website where users can upload CSV files and create graphs based on the fields of data they choose. 
      Back end powered by Django and front end styled with Foundation6 CSS framework. Graph creation functionality
      implemented through Plot.ly graphing library for Python.`,
        tech: ["Django", "Foundation6 CSS", "Plot.ly"],
        site: "http://graphstudio.herokuapp.com/",
        github: "https://github.com/TejashDatta/data_visualisation"
      },

      {
        name: "Carsnet",
        desc: `A static website that provides information about supercars and presents their HD pictures in galleries
       and slideshows created with WOWSlider. It also showcases the supercars of Kolkata.`,
        tech: ["jQuery", "CSS", "WOWSlider"],
        site: "http://carsnet.github.io/",
        github: "https://github.com/TejashDatta/carsnet.github.io"
      }
    ]
  }),
  computed: {
    projectsSlice() {
      return this.projects.slice(0, this.index);
    }
  },
  mounted() {
    const loadNext = () => {
      if (this.index < this.projects.length) {
        this.index++;
        setTimeout(loadNext, 200);
      }
    };
    loadNext();
  }
};
</script>
<style scoped>
.slide-enter-active {
  transition: 0.2s ease-in;
}
.slide-enter {
  transform: translateX(-50%);
  opacity: 0;
}
</style>
