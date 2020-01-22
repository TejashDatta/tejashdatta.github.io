<template>
  <div>
    <h1 class="mb-5">Education</h1>
    <div class="d-flex align-center">
      <div class="headline primary--text text-right">
        2016 - 2019
        <span class="transparent--text">-</span>
      </div>
      <v-timeline dense>
        <v-timeline-item fill-dot icon="mdi-school">
          <div class="flex-grow-1">
            <h2 class="headline">St. Xavier's College, Kolkata</h2>
            <h3 class="title secondary--text">BSc. Computer Science (Honours)</h3>
            <strong class="mr-1">CGPA:</strong>8.26
          </div>
        </v-timeline-item>
      </v-timeline>
    </div>
  </div>
</template>

<script>
export default {
  head: () => ({
    title: "Education"
  })
};
</script>
