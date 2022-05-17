<template>
  <div :class="{ 'bg-white': !nightMode, 'bg-dark3': nightMode }" class="p-st">
    <div
      class="container"
      data-aos="fade"
      data-aos-once="true"
      data-aos-duration="1000"
    >
      <div class="row align-items-center">
        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12 m-auto">
          <div class="d-flex justify-content-center">
            <img :src="nightMode ? white : black" alt="logo cristine" />
          </div>
          <h1 class="home-title" :class="{ pgray: !nightMode, 'text-light': nightMode }">
            HI! MY NAME IS CRISTINE MARQUEZ.
          </h1>
          <div>
            <h4 class="d-flex justify-content-center">
              <span class="change_content" id="text-color"> </span>
            </h4>
          </div>
          <div class="mt-3 d-flex justify-content-center">
            <a
              class="btn btn-outline-primary btn-xl"
              href="/about"
              @click.prevent="$emit('scroll', 'about')"
              :class="{ 'text-light': nightMode }"
            >
              Learn more
              <!-- <i class="fa-solid fa-arrow-down"></i> -->
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import info from "../info";

export default {
  name: "Home",
  components: {},
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      picture: info.flat_picture,
      description: info.description,
      name: info.name,
      linkedin: info.links.linkedin,
      github: info.links.github,
      angellist: info.links.angellist,
      resume: info.links.resume,
      black: require("@/assets/images/black-logo-removebg.png"),
      white: require("@/assets/images/white-logo.png"),
    };
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
.bg-white {
  background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.1) 100%
    ),
    url("../assets/images/masthead.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.home-title {
  /* font-size: 5.5rem; */
  font-weight: 500;
  padding: 10px 0 10px 0;
  text-align: center;
  font-size: 2rem;
}

@media only screen and (max-width: 580px) {
  img {
    object-fit: cover;
    border-radius: 50%;
    height: 200px;
    width: 200px;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 2px solid rgb(205, 205, 205);
  }
}

.fa {
  font-size: 15px;
}

.btn {
  border-color: #669db3ff;
  color: #669db3ff;
}

.btn:hover {
  background-color: #669db3ff;
  border-color: #669db3ff;
  color: white;
}

.btn:focus {
  background-color: #669db3ff;
  border-color: #669db3ff;
  color: white;
}

.btn:focus {
  outline: none !important;
}

p {
  text-align: justify;
  font-weight: 400;
}

/* LEAVES */

@keyframes changetext {
  0% {
    content: "Welcome to my personal Portfolio";
  }
  20% {
    content: "Bienvenido a mi portafolio personal";
  }
  35% {
    content: "Bienvenue dans mon portfolio personnel";
  }
  50% {
    content: "내 개인 포트폴리오에 오신 것을 환영합니다";
  }
  65% {
    content: "私の個人的なポートフォリオへようこそ";
  }
  80% {
    content: "Välkommen till min personliga portfölj";
  }
  100% {
    content: "Welina i kaʻu Portrait pilikino";
  }
}

.change_content:after {
  content: "";
  animation: changetext 5s infinite linear;
  color: #be67ba;
}
</style>
