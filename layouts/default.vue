<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      mobile-break-point="960"
      width="260"
      floating
      app
      color="grey lighten-5"
    >
      <div style="height: 100%; width: 100%;" class="d-flex align-center">
        <div class="link-box">
          <nuxt-link
            v-for="link in links"
            :key="link.label"
            :to="link.path"
            :target="link.target"
            class="link py-3 pl-6 secondary--text"
          >
            {{link.label}}
            <div class="highlight" />
          </nuxt-link>
        </div>
      </div>
    </v-navigation-drawer>
    <v-content>
      <v-btn
        small
        depressed
        class="text-none black--text menu-btn"
        v-show="$vuetify.breakpoint.smAndDown"
        color="primary"
        @click="drawer = !drawer"
      >
        <span>
          Menu
          <v-icon right>mdi-chevron-down</v-icon>
        </span>
      </v-btn>
      <v-container class="px-7">
        <h1
          class
          id="typewriter"
          v-html="heading"
          :class="[{'blinking': animatingHeading}, $vuetify.breakpoint.xs ? 'display-3' : 'display-4' ]"
        />
        <h2
          class="headline ml-2 mb-5 secondary--text"
          :style="{'opacity': animatingHeading ?  0 : 1, 'transition': '0.5s'}"
        >Welcome to my site</h2>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      heading: "",
      animatingHeading: true,
      drawer: false,
      links: [
        { label: "Overview", path: "/" },
        { label: "Work Experience", path: "/work-experience" },
        { label: "Personal Projects", path: "/personal-projects" },
        { label: "Education", path: "/education" },
        { label: "Communication Skills", path: "/communication-skills" },
        { label: "Research Experience", path: "/research-experience" },
        { label: "Contact Information", path: "/contact-information" },
        {
          label: "Resume",
          path: "/Tejash_Datta_Resume.pdf",
          target: "_blank"
        }
      ]
    };
  },
  created() {
    this.drawer = this.$vuetify.breakpoint.mdAndUp;
  },
  mounted() {
    var finalHeading = "Hi, I'm ".split("");
    finalHeading.push('<span class="primary--text">');
    finalHeading = finalHeading.concat("Tejash".split(""));
    finalHeading.push("</span>");

    var cursorPosition = 0,
      typeSpeed = 150,
      currentTypeSpeed = typeSpeed;

    var type = () => {
      this.heading += finalHeading[cursorPosition];
      if (finalHeading[cursorPosition].length > 1) currentTypeSpeed = 0;
      else currentTypeSpeed = typeSpeed;

      cursorPosition += 1;
      if (cursorPosition < finalHeading.length)
        setTimeout(type, currentTypeSpeed);
      else this.animatingHeading = false;
    };

    type();
  }
};
</script>
<style scoped>
.link-box {
  width: 100%;
}
.link {
  display: block;
  position: relative;
  font-size: 1.3rem;
}
.link > .highlight {
  z-index: -1;
  top: 0;
  left: 0;
  position: absolute;
  width: 0%;
  height: 100%;
  transition: 0.2s ease-in;
}
.link.nuxt-link-exact-active > .highlight,
.link:hover > .highlight {
  border-left: 10px solid #3f51b5;
}

.link:hover > .highlight {
  width: 10px;
}
.link.nuxt-link-exact-active > .highlight {
  width: 100%;
  background: #c5cae9;
}

.blinking::after {
  content: "|";
  animation: 0.5s blink step-end infinite;
}
@keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: black;
  }
}

.menu-btn {
  z-index: 2;
  border-radius: 0;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  height: 100px !important;
  min-width: 0px !important;
  width: 0px !important;
}
.menu-btn span {
  transform: rotate(-90deg);
}
</style>
