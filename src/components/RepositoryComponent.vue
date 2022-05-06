<template>
  <div class="mb-3 cursor-pointer">
    <h3>{{ name }}</h3>
    <p class="text-muted">
      {{ description }}
    </p>
    <div class="d-flex align-items-center">
      <img src="@/assets/icons/star.png" alt="start" class="icon" />
      <small> {{ stargazers_count }} </small>
    </div>
  </div>
</template>

<script>
export default {
  name: "repository-component",
  props: {
    ["id"]: Number,
    ["name"]: String,
    ["description"]: String,
    ["stargazers_count"]: Number,
    // ['saveRepository']: Function
  },
};
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>