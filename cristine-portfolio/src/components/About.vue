<template>
  <div
    :class="{ 'bg-light': !nightMode, 'bg-dark': nightMode }"
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
          <img class="portrait" :src="picture" alt="picture face" />
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
        <h3 class="text-center mb-4">What I do</h3>
        <div class=" col-lg-3
            col-md-6
            col-sm-12 d-flex justify-content-center align-items-center flex-column"
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
            col-lg-3
            col-md-6
            col-sm-12
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
            col-lg-3
            col-md-6
            col-sm-12
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
            col-lg-3
            col-md-6
            col-sm-12
            d-flex
            justify-content-center
            align-items-center
            flex-column
          "
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1000"
          data-aos-delay="700"
          data-aos-once="false"
        >
          <i class="w-icon fa-solid fa-display fa-6x"></i>
          <p class="py-2">Responsive Web Design</p>
        </div>
      </div>
      <div class="mt-5 d-flex justify-content-center">
        <button
          class="btn btn-outline-primary btn-lg"
          :class="{ 'text-light': nightMode }"
          data-bs-toggle="modal"
          data-bs-target="#resumeModal"
        >
          View my resume
        </button>
      </div>
    </div>

    <div
      class="modal fade"
      id="resumeModal"
      tabindex="-1"
      aria-labelledby="resumeModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5
              class="modal-title"
              :class="{ 'text-dark': !nightMode, 'text-dark': nightMode }"
              id="resumeModalLabel"
            >
              Resume Cristine Marquez
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <img
              class="img-fluid"
              src="../assets/pdf/Cristine_Marquez_CV_ENG_page-0001.jpeg"
              alt="resume cristine in english"
              srcset=""
            />
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary border-btn-cancel"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <a
              type="button"
              data-bs-dismiss="modal"
              class="btn btn-outline-primary border-btn"
              href="../assets/pdf/Cristine_Marquez_CV_ENG.pdf"
              download="Cristine_Marquez_CV_ENG.pdf"
              >Download</a
            >
          </div>
        </div>
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
.home-title {
  font-size: 28px;
  font-weight: 500;
}

@media only screen and (max-width: 580px) {
  .portrait {
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

.border-btn:focus {
  background-color: #e28194 !important;
  border-color: #e28194 !important;
  color: white;
}

.border-btn {
  border-color: #e28194;
}

.btn-outline-secondary {
  border-color: #7b7d7d;
  color: black;
}

.btn-outline-secondary:hover {
  color: #fff;
  background-color: #7b7d7d !important;
  border-color: #7b7d7d !important;
}

.border-btn-cancel:focus {
  background-color: #7b7d7d !important;
  border-color: #7b7d7d !important;
  color: white;
}

.border-btn-cancel {
  border-color: #7b7d7d;
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
