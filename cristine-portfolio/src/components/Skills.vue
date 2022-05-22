<template>
  <div :class="{ 'bg-white': !nightMode, 'bg-dark': nightMode }" class="p-st ">
    <div class="container py-4 ">
      <div
        class="text-center"
        data-aos="fade"
        data-aos-once="false"
        data-aos-duration="1000"
      >
        <h1 class="text-center"
          :class="{ 'text-light': !nightMode, 'text-light': nightMode }">
          Skills
        </h1>
      </div>
      <hr
        width="50%"
        :class="{ pgray: !nightMode, 'bg-secondary': nightMode }"
        data-aos="fade-right"
        data-aos-duration="1500"
        class="m-auto"
      />
      <br />
      <div class="row">
        <div
          class="col-xl-6 col-bg-6 col-md-6 col-sm-12 text-center pb-5 px-4"
          v-for="(skill, idx) in skills"
          :key="skill.title"
          data-aos="fade-up"
          data-aos-offset="10"
          data-aos-delay="30"
          :style="{ 'transition-delay': idx / 4.2 + 's' }"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <div class="bg-div"><i :class="skill.icon"></i></div>
          <div class="title2 pt-2">{{ skill.title }}</div>
          <hr
            width="50%"
            :class="{ pgray: !nightMode, 'bg-secondary': nightMode }"
            class="m-auto"
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="30"
            data-aos-mirror="true"
            data-aos-offset="10"
          />
          <span class="title3">{{ skill.info.join(", ") }}</span>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import info from "../info";

export default {
  name: "Skills",
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      skills: info.skills,
    };
  },
};
</script>

<style scoped>

.container {
  position: relative;
}

.title {
  font-size: 30px;
  font-weight: 500;
}
.title1 {
  font-size: 24px;
  font-weight: 400;
}

.title2 {
  font-size: 20px;
  font-weight: 500;
}

.title3 {
  font-size: 16px;
  font-weight: 400;
}

.fa {
  color: #febfcb;
  font-size: 40px;
  transition: all 0.5s;
}

.fas {
  color: #febfcb;
  font-size: 40px;
  /* font-weight: bold; */
  transition: all 0.5s;
}

.bg-star {
  background: pink url("../assets/images/star-pink.png") fixed;
  background-size: 40px;
}

hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: content-box;
  height: 0;
  overflow: visible;
  opacity: 0.25 !important;
}

/* @import url("https://fonts.googleapis.com/css?family=Playfair+Display:400,900");

.blobs {
  background: white;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  margin: 0 !important;
  padding: 0 !important;
}

.shape-blob {
  background: #f2d2d9;
  height: 200px;
  width: 200px;
  border-radius: 30% 50% 20% 40%;
  animation: transform 20s ease-in-out infinite both alternate,
    movement_one 40s ease-in-out infinite both;
  opacity: 0.7;
  position: absolute;
  left: 70%;
  top: 50%;
}
.shape-blob.one {
  height: 500px;
  width: 500px;
  left: -200px;
  top: -150px;
  transform: rotate(-180deg);
  animation: transform 30s ease-in-out infinite both alternate,
    movement_two 60s ease-in-out infinite both;
}

.shape-blob.two {
  height: 350px;
  width: 350px;
  left: 500px;
  top: -150px;
  transform: rotate(-180deg);
  animation: transform 30s ease-in-out infinite both alternate,
    movement_two 60s ease-in-out infinite both;
}

@keyframes transform {
  0%,
  100% {
    border-radius: 33% 67% 70% 30% / 30% 30% 70% 70%;
  }
  20% {
    border-radius: 37% 63% 51% 49% / 37% 65% 35% 63%;
  }
  40% {
    border-radius: 36% 64% 64% 36% / 64% 48% 52% 36%;
  }
  60% {
    border-radius: 37% 63% 51% 49% / 30% 30% 70% 70%;
  }
  80% {
    border-radius: 40% 60% 42% 58% / 41% 51% 49% 59%;
  }
}

@keyframes movement_one {
  0%,
  100% {
    transform: none;
  }
  50% {
    transform: translate(50%, 20%) rotateY(10deg) scale(1.2);
  }
}

@keyframes movement_two {
  0%,
  500% {
    transform: none;
  }
  50% {
    transform: translate(50%, 20%) rotate(-200deg) scale(1.2);
  }
}

h1 {
  font-family: "Playfair Display", serif;
  font-size: 5em;
  letter-spacing: 2px;
  font-weight: 900;
  color: white;
  line-height: 0.9em;
  position: relative;
  z-index: 4;
  text-shadow: 2px 3px 15px rgba(0, 0, 0, 0.15);
} */
</style>
