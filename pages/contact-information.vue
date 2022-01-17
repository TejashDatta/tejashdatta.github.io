<template>
  <div>
    <h1 class="mb-5">Contact Me</h1>
    <transition-group name="fade" tag="div" class="row no-gutters">
      <v-col
        cols="6"
        sm="4"
        class="text-center d-flex justify-center"
        v-for="item in itemsSlice"
        :key="item.label"
      >
        <div class="py-3 py-sm-12">
          <a
            :href="item.link"
            :target="item.stay ? null : '_blank'"
            class="secondary--text tile-link"
            style="word-break: break-all"
          >
            <v-icon class="d-block" style="font-size: 90px">{{item.icon}}</v-icon>
            <h4 class="title">{{item.label}}</h4>
          </a>
        </div>
      </v-col>
    </transition-group>
  </div>
</template>

<script>
export default {
  head: () => ({
    title: "Contact Information"
  }),
  data: () => ({
    index: 0,
    items: [
      {
        icon: "mdi-email-outline",
        label: "tejashdatta@gmail.com",
        link: "mailto:tejashdatta@gmail.com",
        stay: true
      },
      {
        icon: "mdi-linkedin",
        label: "LinkedIn",
        link: "https://www.linkedin.com/in/tejash-datta"
      },
      {
        icon: "mdi-github",
        label: "Github",
        link: "https://github.com/TejashDatta"
      }
    ]
  }),
  computed: {
    itemsSlice() {
      return this.items.slice(0, this.index);
    }
  },
  mounted() {
    const loadNext = () => {
      if (this.index < this.items.length) {
        this.index++;
        setTimeout(loadNext, 200);
      }
    };
    loadNext();
  }
};
</script>
<style scoped>
.tile-link .v-icon {
  transition: 0.4s;
  color: #bdbdbd;
}
.tile-link:hover .v-icon {
  color: #283593 !important;
}
</style>
