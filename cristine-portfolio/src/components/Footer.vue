<template>
<div class="row spacingFoot" :class="{ 'bg-honeycomb-pink': !nightMode, 'bg-dark': nightMode }"> 
      <div id="follow-me" class="col-xs-12 col-sm-5 mb-3">
        <h3>Follow me!</h3>
        <a class="social" :href="linkedin" target="_blank" title="LinkedIn">
          <img src="../assets/icons/social/LinkedIn-black.svg" alt="LinkedIn Icon">
        </a>
        <a class="social" :href="github" target="_blank" title="Github">
          <img src="../assets/icons/social/Github-black.svg" alt="Github Icon">
        </a>
        <a class="social" :href="jsfiddle" target="_blank" title="JsFiddle">
          <img src="../assets/icons/social/Codepen-black.svg" alt="JsFiddle Icon">
        </a>
      </div>
      <div class="col-xs-12 text-center">
        <hr class="dashed mb-3">
        <h2>&ndash; Thanks for visiting! &ndash;</h2>
        <small class="gray">Copyright &copy; 
          2022
          Cristine Marquez &mdash; All Rights Reserved &mdash; Made with <i class="fa-solid fa-heart" style="color:red"></i></small>
      </div>
    </div>
</template>


<script>
import info from "../info";

export default {
  name: "Footer",
  data() {
    return {
      linkedin: info.links.linkedin,
      github: info.links.github,
      jsfiddle: info.links.jsfiddle,
    };
  },
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  methods: {
    open(link) {
      switch (link) {
        case "linkedin":
          window.open(this.linkedin, "_blank");
          break;
        case "github":
          window.open(this.github, "_blank");
          break;
        case "angellist":
          window.open(this.angellist, "_blank");
          break;
        case "resume":
          window.open(this.resume, "_blank");
          break;
      }
    },
  },
};
</script>

<style scoped>

.btn {
  border-color: white;
  color: white;
}

.btn:hover {
  background-color: white;
  border-color: white;
  color: gray;
}

.btn:focus {
  background-color: white;
  border-color: white;
  color: gray;
}

.bg-honeycomb-pink {
  background: pink url("../assets/images/honeycomb-pink.png") fixed;
  background-size: 40px;
}

.spacingFoot {
  padding: 10vh;
}

/* Social Icons */
.social {
  display: inline-block;
  transition: box-shadow 0.2s ease-in-out,
              transform 0.2s ease-in-out;
  height: 36px;
  margin-left: 3px;
  width: 36px;
}
.social:focus,
.social:hover {
  background-color: transparent;
}
.social + .social {
  margin-left: 9px;
}
.social img {
  max-width: 100%;
}
</style>
