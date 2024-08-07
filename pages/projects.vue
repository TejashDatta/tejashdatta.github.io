<template>
  <div>
    <h1 class="mb-5">Projects</h1>
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
          <v-card-text class="pb-1">
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
                <v-icon>mdi-github</v-icon>
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
        name: "OWNR by RENOSY",
        desc: `The real estate portfolio management app, with thousands of users in Japan and China, 
        that I developed features for and maintained at my previous role as an android developer at GA Technologies.`,
        tech: ["Android, Kotlin, RxJava, Dagger, MVP Architecture, clean architecture, Jetpack, Retrofit, Mockito"],
        site: "https://play.google.com/store/apps/details?id=jp.co.ga_tech.insight.renosy",
        github: null
      },
      {
        name: "German Noun Highlighter (iOS App)",
        desc: `An iOS app I made to highlight german nouns in a given text in different colors based on their genders.`,
        tech: ["iOS, Swift, SwiftUI"],
        site: null,
        github: "https://github.com/TejashDatta/German-Noun-Highlighter"
      },
      {
        name: "German Noun Highlighter (Chrome Extension)",
        desc: `A chrome extension I made to highlight german nouns on a webpage in different colors based on their genders.`,
        tech: ["JavaScript"],
        site: "https://chromewebstore.google.com/detail/german-nouns-highlighter/cdjngdjjemoflkeppmidedobhcahoebf",
        github: null
      },
      {
        name: "GA App Training",
        desc: `The training I received as an android developer at GA Technologies.
        Includes 2 calculator apps I made with MVVM and MVP architectures, and an RSS reader app.`,
        tech: ["Android, Kotlin, RxJava, Dagger, MVP, MVVM, LiveData, Retrofit, Mockito, GSON"],
        site: null,
        github: "https://github.com/TejashDatta/GA-App-Training"
      },
      {
        name: "GA Bootcamp App",
        desc: `A website I made using Ruby on Rails and PostgreSQL to demonstrate my ability to 
        complete web development tasks independently at GA Technologies.`,
        tech: ["Ruby, Ruby on Rails, RSpec, PostgreSQL, Docker"],
        site: null,
        github: "https://github.com/TejashDatta/bootcamp-app"
      },
      {
        name: "GA Bootcamp",
        desc: `The training I received to work at GA Technologies as a full stack developer.`,
        tech: ["Ruby, Ruby on Rails, RSpec, PostgreSQL, Docker, Shell Programming, HTML, CSS, JavaScript, Git, Github"],
        site: null,
        github: "https://github.com/TejashDatta/bootcamp"
      },
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
        site: "https://rental-easy.web.app/",
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
        site: null,
        github: "https://github.com/TejashDatta/poll-opinion"
      },

      {
        name: "Graph Studio",
        desc: `A website where users can upload CSV files and create graphs based on the fields of data they choose. 
      Back end powered by Django and front end styled with Foundation6 CSS framework. Graph creation functionality
      implemented through Plot.ly graphing library for Python.`,
        tech: ["Django", "Foundation6 CSS", "Plot.ly"],
        site: null,
        github: "https://github.com/TejashDatta/data_visualisation"
      },
      {
        name: "Shape Dodge",
        desc: `A fun game where players must dodge oncoming shapes by tilting their phone, 
        while the fall becomes faster and faster. It used to be published on the Google Play Store but had to be removed 
        because I lacked the time and motivation to maintain it.`,
        tech: ["Unity game engine, C#"],
        site: "https://youtu.be/6pYQxpdOLRc",
        github: null
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
