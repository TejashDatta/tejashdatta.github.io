<template>
  <div>
    <h1 class="mb-5">Overview</h1>
    <v-row>
      <v-col>
        <spider />
      </v-col>
      <v-col order-sm="first">
        <p class="subtitle-1 text-justify">
          Hi! I'm Tejash Datta. I graduated in BSc. Computer Science (honours) from St. Xavier's College, Kolkata, India in 2019.
          My interests lie in web and application development, computer science and learning languages.
          <br />You can check out my projects
          <nuxt-link to="/projects">here.</nuxt-link>
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
