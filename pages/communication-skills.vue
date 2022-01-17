<template>
  <div>
    <h1>Communication Skills</h1>
    <h2 style="font-weight: normal;" class="primary--text mb-5">Languages Known</h2>
    <transition-group name="fade" tag="div" class="row no-gutters">
      <v-col
        cols="6"
        v-for="lang in langsSlice"
        :key="lang.name"
        class="text-center d-flex justify-center"
      >
        <div class="py-12">
          <h3
            class="grey--text text--lighten-1"
            :class="$vuetify.breakpoint.xs ? 'display-1' : 'display-2'"
          >{{ lang.label }}</h3>
          <h4 class="headline text-center">{{ lang.name }}</h4>
          <h5 class="subtitle-1 text-center primary--text" v-if="lang.level">{{ lang.level }}</h5>
        </div>
      </v-col>
    </transition-group>
  </div>
</template>

<script>
export default {
  head: () => ({
    title: "Communication Skills"
  }),
  data: () => ({
    index: 0,
    langs: [
      { name: "English", label: "ENG" },
      { name: "Japanese", label: "日本語", level: "JLPT N2" },
      { name: "Hindi", label: "हिंदी" },
      { name: "Bengali", label: "বাংলা" }
    ]
  }),
  computed: {
    langsSlice() {
      return this.langs.slice(0, this.index);
    }
  },
  mounted() {
    const loadNext = () => {
      if (this.index < this.langs.length) {
        this.index++;
        setTimeout(loadNext, 200);
      }
    };
    loadNext();
  }
};
</script>
