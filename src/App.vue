<template>
  <h1 class="center">Spinner Demo</h1>
  <h4 class="center">Status</h4>
  <div class="center">
    <PulseLoader :loading="loadingState" :color="color" :size="size" />
  </div>
  <div>
    <p class="center">
      <span>Status</span><span>{{ ` ` + loadingState }}</span>
    </p>
  </div>
  <div>
    <p class="center">
      <button @click="setLoadingState">
        {{ loadingState ? "Set to False" : "Set to True" }}
      </button>
    </p>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
export default {
  name: "App",
  data() {
    return {
      color: "#ff0000",
      size: "50px",
    };
  },
  computed: {
    ...mapState("spinner", ["loadingState"]),
  },
  methods: {
    ...mapActions("spinner", ["setLoadingStateTrue", "setLoadingStateFalse"]),
    setLoadingState() {
      if (this.loadingState) {
        this.setLoadingStateFalse();
      } else {
        this.setLoadingStateTrue();
      }
    },
  },
  components: {
    PulseLoader,
  },
};
</script>
<style>
.center {
  text-align: center;
}
</style>
