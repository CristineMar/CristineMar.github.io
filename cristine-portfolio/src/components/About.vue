<template>
  <div
    :class="{ 'bg-light': !nightMode, 'bg-dark3': nightMode }"
    class="pt-5 p-st pb-5"
  >
    <div
      class="container"
      data-aos="fade"
      data-aos-once="false"
      data-aos-duration="1000"
    >
      <!-- ABOUT ME -->
      <div class="row align-items-center">
        <h1 class="text-center">About me</h1>
        <div class="col d-flex justify-content-center">
          <img :src="picture" alt="picture face" srcset="" />
        </div>
        <div class="col d-flex justify-content-center">
          <p>
            {{ description }}
          </p>
        </div>
      </div>
      <hr
        class="dashed my-5"
        :class="{ 'bg-white': !nightMode, 'bg-dark': nightMode }"
      />
      <!-- WHAT I DO -->
      <div class="row align-items-center">
        <h2 class="text-center mb-4">What I do</h2>
        <div
          class="
            col
            d-flex
            justify-content-center
            align-items-center
            flex-column
          "
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1000"
          data-aos-once="false"
        >
          <i class="w-icon fa-solid fa-laptop-code fa-6x"></i>
          <p class="py-2">Development</p>
        </div>
        <div
          class="
            col
            d-flex
            justify-content-center
            align-items-center
            flex-column
          "
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="false"
        >
          <i class="w-icon fa-regular fa-star fa-6x"></i>
          <p class="py-2">Identity &amp; Branding</p>
        </div>
        <div
          class="
            col
            d-flex
            justify-content-center
            align-items-center
            flex-column
          "
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1000"
          data-aos-delay="600"
          data-aos-once="false"
        >
          <i class="w-icon fa-solid fa-mobile-screen-button fa-6x"></i>
          <p class="py-2">UI/UX Design</p>
        </div>
        <div
          class="
            col
            d-flex
            justify-content-center
            align-items-center
            flex-column
          "
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1000"
          data-aos-delay="900"
          data-aos-once="false"
        >
          <i class="w-icon fa-solid fa-display fa-6x"></i>
          <p class="py-2">Responsive Web Design</p>
        </div>
      </div>
      <div class="mt-5 d-flex justify-content-center">
        <a
          class="btn btn-outline-primary btn-lg"
          href="/about"
          @click.prevent="$emit('scroll', 'about')"
          :class="{ 'text-light': nightMode }"
        >
          View my resume
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import info from "../info";

export default {
  name: "About",
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
/* .bg-white {
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), url("../assets/images/masthead.jpg");
  background-repeat: no-repeat;
  background-size: cover;
} */
.home-title {
  font-size: 28px;
  font-weight: 500;
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

.btn-outline-primary {
  border-color: #e28194;
  color: black;
}

.btn-outline-primary:hover {
  color: #fff;
  background-color: #e28194 !important;
  border-color: #e28194 !important;
}

.btn:focus {
  background-color: #e28194 !important;
  border-color: #e28194 !important;
  color: white;
}

.btn {
  border-color: #e28194;
}

.w-icon {
  color: #febfcb;
}

.fa {
  font-size: 15px;
}

/* .btn {
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
} */

.btn:focus {
  outline: none !important;
}

p {
  text-align: justify;
  font-weight: 400;
}

/* LEAVES */
</style>
