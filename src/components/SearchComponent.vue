<template>
  <div class="col-12 d-flex">
    <input type="text" class="form-control" placeholder="Pesquisar..." />
    <div class="search d-flex justify-content-center align-items-center">
      <img
        src="@/assets/icons/search.svg"
        alt="search icon"
        class="img-fluid mt-1 icon-large"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "search-component",
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