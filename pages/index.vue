<template>
  <div>
    <h1 class="mb-5">Overview</h1>
    <v-row>
      <v-col>
        <spider />
      </v-col>
      <v-col order-sm="first">
        <p class="subtitle-1 text-justify">
          Hi! I'm Tejash Datta. I'm a software engineer from Kolkata, India.
          I was previously <nuxt-link to="/work-experience">working as an android app developer</nuxt-link> at a product-based software company in Tokyo, Japan;
          before taking a break to focus on learning the German language full-time to accomplish my goal of moving to Germany. 
          I've also made several <nuxt-link to="/personal-projects">professional and training-related projects.</nuxt-link>
          <br /><br />
          I aspire to utilize my skills and interest in software engineering to contribute to the development of purposeful applications; 
          while simultaneously exploring my interest in foreign cultures and languages. 
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import spider from "~/components/spider";
export default {
  head: () => ({
    title: "Welcome"
  }),
  components: { spider }
};
</script>
