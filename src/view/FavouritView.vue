<template>
  <layout-component>
    <div class="d-flex justify-content-between">
      <h2>Repositórios Favoritos</h2>
      <div class="w-50">
        <search-component />
      </div>
    </div>
    <div class="col-12 mt-5">
      <div v-for="i in 4" :key="i">
        <repository-component />
      </div>
    </div>
  </layout-component>
</template>

<script>
import LayoutComponent from "@/components/LayoutComponent.vue";
import SearchComponent from "@/components/SearchComponent.vue";
import RepositoryComponent from "@/components/RepositoryComponent.vue";
export default {
  components: {
    LayoutComponent,
    SearchComponent,
    RepositoryComponent,
  },
};
</script>