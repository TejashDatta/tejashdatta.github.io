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
          <div class="px-4 subtitle-1 grey--text text--lighten-1">{{item.time}}</div>
          <v-card-text class="pb-0 text-justify">{{item.desc}}</v-card-text>
          <v-spacer />
          <v-card-actions class="d-flex justify-end">
            <a
              class="secondary--text d-inline-block px-2 pb-1"
              :href="item.link"
              target="_blank"
            >{{item.link | sitename}}</a>
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
        title: "Kolkata Sanved",
        role: "Volunteer",
        time: "Jun. 2018",
        link: "http://www.kolkatasanved.org",
        desc: `Volunteered at an NGO which helps in the mental rehabilitation of
       survivors of trafficking and violence through dance movement therapy. Completed office responsibilities such as maintaining files, 
       data and document entry, writing reports and translating case studies.`
      },
      {
        title: "iWriter",
        role: "Content Writer",
        time: "Dec. 2016 - Mar. 2018",
        link: "http://www.iwriter.com",
        desc: `Wrote hundreds of articles of varying lengths on a wide array of topics
       as a freelance content writer. Most commonly wrote listicle blog posts, SEO posts and reports.`
      }
    ]
  }),
  filters: {
    sitename: v => v.slice(11)
  }
};
</script>