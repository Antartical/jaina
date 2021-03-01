<template>
  <Password toggleMask></Password>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Password from "primevue/password";

@Options({
  components: {
    Password
  }
})
export default class Home extends Vue {}
</script>
