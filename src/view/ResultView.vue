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
      <div class="mt-5">
        <div>
          <small
            ><img src="@/assets/icons/bag.png" alt="start" class="icon" /> Lux
            One
          </small>
        </div>
        <div>
          <small
            ><img src="@/assets/icons/approval.png" alt="start" class="icon" />
            Fortaleza CR
          </small>
        </div>
        <div>
          <small>
            <img src="@/assets/icons/star.png" alt="start" class="icon" /> 0
          </small>
        </div>
        <div>
          <small>
            <img src="@/assets/icons/box.png" alt="start" class="icon" /> 0
          </small>
        </div>
        <div>
          <small>
            <img src="@/assets/icons/peoples.png" alt="start" class="icon" /> 0
          </small>
        </div>
      </div>
    </div>
    <div class="col-sm-12 col-md-5 mt-5">
      <div v-for="i in 4" :key="i">
        <repository-component />
      </div>
    </div>
    <div class="col-1"></div>
    <div class="col-md-2 mt-5">
      <router-link to="/favourit">
        <div class="d-flex justify-content-end align-items-center">
          <img src="@/assets/icons/star.png" alt="start" class="icon-large" />
          <p class="mt-3">Repositório Favoritado</p>
        </div>
      </router-link>
      <img
        src="@/assets/icons/star.png"
        alt="start"
        class="icon-large mt-4"
      /><br />
      <img src="@/assets/icons/star.png" alt="start" class="icon-large" />
      <div class="d-flex justify-content-end align-items-center mt-4">
        <p class="mt-3">Repositório Não Favoritado</p>
      </div>
    </div>
  </layout-component>
</template>

<script>
import LayoutComponent from "@/components/LayoutComponent.vue";
import TitleComponent from "@/components/TitleComponent.vue";
import SearchComponent from "@/components/SearchComponent.vue";
import RepositoryComponent from "@/components/RepositoryComponent.vue";
export default {
  components: {
    LayoutComponent,
    SearchComponent,
    TitleComponent,
    RepositoryComponent,
  },
};
</script>
