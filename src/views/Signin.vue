<template>
  <div>
    <h1>Hola</h1>
  </div>
  <Password className="password" toggleMask></Password>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Signin extends Vue {}
</script>
