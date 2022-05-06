<template>
  <div class="col-12 d-flex">
    <input
      type="text"
      v-model="search"
      class="form-control"
      :placeholder="$store.state.search ? $store.state.search : 'Pesquisar...'"
    />
    <button
      @click="catchUser()"
      class="search d-flex justify-content-center align-items-center"
    >
      <img
        src="@/assets/icons/search.svg"
        alt="search icon"
        class="img-fluid mt-1 icon-large"
      />
    </button>
  </div>
</template>

<script>
export default {
  name: "search-component",
  data() {
    return {
      search: "",
    };
  },
  methods: {
    catchUser() {
      this.$store.dispatch("Search", this.search);
      if (this.search) {
        this.$store.dispatch("User", this.search);
        this.$store.dispatch("repositoryUser", this.$store.getters.getSearch);
        this.$router.push("/result");
      } else {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style scoped>
.search {
  background-color: black;
  color: white;
  width: 70px;
  height: 35px;
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}
.form-control {
  height: 35px;
  border: 1px solid black;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}
.img-fluid {
  height: 25px;
  background-color: white;
  color: white;
}
</style>