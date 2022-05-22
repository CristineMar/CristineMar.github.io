<template>
  <!-- Contact Me Section -->
  <div
    class="row bg-shadow py-2"
    :class="{ 'bg-pink': !nightMode, 'bg-dark': nightMode }"
  >
    <div
      class="
        col-xs-12
        d-flex
        justify-content-center
        flex-column
        align-items-center
      "
    >
      <h1 class="mb-3">Like what you see?</h1>
      <button
        class="btn btn-outline-primary"
        data-toggle="modal"
        data-target="#contactModal"
      >
        Send me a message!
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  components: {},
  props: {
    nightMode: {
      type: Boolean,
    },
  },
};
</script>

<style scoped>
.bg-pink {
  background-color: #febfcb;
  height: 30vh;
}

.btn-outline-primary {
  border-color: white;
  color: black;
}

.btn-outline-primary:hover {
  color: black;
  background-color: white !important;
  border-color: white !important;
}

.btn:focus {
  background-color: white !important;
  border-color: white !important;
  color: black !important;
}

.btn {
  border-color: white;
}

.bg-shadow {
  box-shadow: 0 1px 3px rgba(8, 33, 30, 0.5);
}
</style>