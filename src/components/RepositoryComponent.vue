<template>
  <div class="mb-3 cursor-pointer">
    <div class="d-flex justify-content-between">
      <h3>{{ name }}</h3>
      <font-awesome-icon
        v-if="favorited"
        :icon="['fas', 'star']"
        color="rgb(242, 180, 12)"
      />
    </div>
    <p class="text-muted">
      {{ description }}
    </p>
    <div class="d-flex align-items-center">
      <img src="@/assets/icons/star.png" alt="start" class="icon" />
      <small class="ajustIcon"> {{ stargazers_count }} </small>
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
  },
  computed: {
    favorited() {
      return this.$store.getters.getFavorite.find(
        (favorite) => this.id == favorite.id
      );
    },
  },
};
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}

.ajustIcon {
  margin-top: 2px;
}
</style>