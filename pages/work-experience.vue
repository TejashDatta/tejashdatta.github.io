<template>
  <div>
    <h1 class="mb-5">Work Experience</h1>
    <v-row>
      <v-col cols="12" sm="8" v-for="item in items" :key="item.title">
        <v-card height="100%" class="d-flex flex-column">
          <v-card-title>
            {{item.title}}:
            <span class="primary--text ml-1">{{item.role}}</span>
          </v-card-title>
          <div class="px-4 subtitle-1 secondary--text"><v-icon color="secondary">mdi-map-marker</v-icon> {{item.location}}</div>
          <div class="px-4 subtitle-1 grey--text text--lighten-1">{{item.time}}</div>
          <v-card-text class="pb-0" v-html="item.desc" />
          <v-spacer />
          <v-card-actions class="d-flex justify-end">
            <a
              class="secondary--text d-inline-block px-2 pb-1"
              :href="item.link"
              target="_blank"
            >Website</a>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  head: () => ({
    title: "Work Experience"
  }),
  data: () => ({
    items: [
      {
        title: "GA Technologies",
        role: "Android App Developer",
        location: "Tokyo, Japan",
        time: "October 2020 - October 2023",
        link: "https://www.ga-tech.co.jp/en/",
        desc: `<ul>
                <li>
                  Managed the maintenance and feature expansion of a real estate portfolio management app, OWNR by RENOSY, servicing a significant user base in Japan and China.
                </li>
                <li>
                  Collaborated with iOS developers, server developers, and project managers in Japanese.
                </li>
                <li>
                  Updated dependencies and libraries stagnant since 2018 to their latest versions as of 2023.
                </li>
                <li>
                  Removed deprecated code and warnings from the app's codebase comprising hundreds of files.
                </li>
                <li>
                  Received training as a full stack developer in the use of shell programming, JavaScript, CSS, Ruby, Ruby on Rails and PostGreSQL. (October 2020 - June 2021)
                </li>
                <br />
                <li>
                  Tech stack: <br />
                  Kotlin, RxJava, Dagger, Retrofit, Git, GitHub, CircleCI, MVP architecture and clean architecture. <br />
                  Conducted unit testing using JUnit and Mockito.
                </li>
              </ul>`
      }
    ]
  })
};
</script>
