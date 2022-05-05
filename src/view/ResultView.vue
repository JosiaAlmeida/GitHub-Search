<template>
  <layout-component>
    <div class="col-sm-12 col-md-3">
      <title-component />
    </div>
    <div class="col-2"></div>
    <div class="col-sm-12 col-md-5">
      <search-component />
    </div>
    <div class="col-sm-12 col-md-4 mt-5">
      <img src="" alt="avatar user result" />
      <h2>Josia Almeida</h2>
      <p class="text-muted">JosiaAlmeida</p>
    </div>
    <div class="col-sm-12 col-md-5 mt-5">
      <div v-for="i in 4" :key="i">
        <h3>Angular-AdminLTE</h3>
        <p class="text-muted">
          AngularjsApp implementation on top of renowned Admin-LTE theme
        </p>
        <p>start 500</p>
      </div>
    </div>
    <div class="col-md-3 mt-5">
      <div class="d-flex justify-content-end align-items-center">
        <p>Repositório Favoritado</p>
      </div>
      <div class="d-flex justify-content-end align-items-center">
        <p>Repositório Não Favoritado</p>
      </div>
    </div>
  </layout-component>
</template>


<script>
import LayoutComponent from "@/components/LayoutComponent.vue";
import TitleComponent from "@/components/TitleComponent.vue";
import SearchComponent from "@/components/SearchComponent.vue";
export default {
  components: {
    LayoutComponent,
    SearchComponent,
    TitleComponent,
  },
};
</script>
