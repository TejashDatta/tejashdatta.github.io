<template>
  <div>
    <h1 class="mb-5">Work Experience</h1>
    <v-row>
      <v-col cols="12" sm="6" v-for="item in items" :key="item.title">
        <v-card height="100%" class="d-flex flex-column">
          <v-card-title>
            {{item.title}}:
            <span class="primary--text ml-1">{{item.role}}</span>
          </v-card-title>
          <div class="px-4 subtitle-1 secondary--text"><v-icon color="secondary">mdi-map-marker</v-icon> {{item.location}}</div>
          <div class="px-4 subtitle-1 grey--text text--lighten-1">{{item.time}}</div>
          <v-card-text class="pb-0 text-justify" v-html="item.desc" />
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
        time: "April 2021 - Present",
        link: "https://www.ga-tech.co.jp/en/",
        desc: `<ul>
                <li>
                  Trained in android development in Kotlin by creating practice apps that were reviewed by android and iOS developers with several years of experience in developing production grade apps.<br /> 
                  Learnt about MVVM & MVP architectures, state management, lifecycle, RxJava, unit testing, etc.
                </li>
                <li>
                  Received basic training as a full stack developer in the use of ruby, ruby on rails, css, javascript, docker & shell scripting.
                </li>
                <li>
                  Communicated about software development challenges in a foreign language, Japanese.
                </li>
                <li>
                  Learnt about the real estate industry in Japan.
                </li>
              </ul>`
      }
    ]
  })
};
</script>
