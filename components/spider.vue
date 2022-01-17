<template>
  <div class="d-flex root">
    <div class="links">
      <nuxt-link
        v-for="link in links"
        :key="link.label"
        :to="link.path"
        :target="link.target"
      >{{link.label}}</nuxt-link>
    </div>
    <v-avatar size="200" class="elevation-3" color="#FFB300">
      <img
        style="border: 5px solid #FFB300; height:200px; width:200px"
        :src="require('~/assets/images/profile-picture.jpg')"
      />
    </v-avatar>
  </div>
</template>
<script>
export default {
  data: () => ({
    links: [
      { label: "Work Exp.", path: "/work-experience" },
      { label: "Projects", path: "/personal-projects" },
      { label: "Education", path: "/education" },
      {
        label: "Resume",
        path: "/Tejash_Datta_Resume.pdf",
        target: "_blank"
      },
      { label: "Contact", path: "/contact-information" }
    ]
  })
};
</script>
<style scoped>
@media only screen and (max-width: 360px) {
  .root {
    zoom: 0.8;
  }
}
@media only screen and (max-width: 380px) {
  .root {
    zoom: 0.9;
  }
}
.links {
  font-family: "Orbitron", sans-serif;
  margin-left: 30px;
  width: 121px;
  position: relative;
  top: 5px;
  white-space: nowrap;
}
.links a {
  display: block;
  color: #bdbdbd;
  font-size: 1.2rem;
  transition: 0.3s;
}
.links a:hover {
  color: #ffc107;
}
.links :nth-child(1) {
  transform: translate(-18px, 21px) rotate(13deg);
}
.links :nth-child(2) {
  transform: translate(-10px, 26px) rotate(8deg);
}
.links :nth-child(3) {
  transform: translate(-28px, 29px);
}
.links :nth-child(4) {
  transform: translate(-8px, 33px) rotate(-8deg);
}
.links :nth-child(5) {
  transform: translate(1px, 35px) rotate(-14deg);
}
</style>
