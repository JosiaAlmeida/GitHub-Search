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
      <img
        :src="$store.getters.getUser.avatar_url"
        alt="avatar user result"
        class="img-fluid user-img"
      />
      <h2>{{ $store.getters.getUser.name }}</h2>
      <p class="text-muted">{{ $store.getters.getUser.login }}</p>
      <ul class="mt-5">
        <li class="d-flex algin-items-center mb-2">
          <img
            src="@/assets/icons/bag.png"
            alt="start"
            class="icon ajustIcon"
          />
          <small>
            {{ $store.getters.getUser.company }}
          </small>
        </li>
        <li class="d-flex algin-items-center mb-2">
          <img
            src="@/assets/icons/approval.png"
            alt="start"
            class="icon ajustIcon"
          />
          <small>
            {{ $store.getters.getUser.location }}
          </small>
        </li>
        <li class="d-flex algin-items-center mb-2">
          <img
            src="@/assets/icons/star.png"
            alt="start"
            class="icon ajustIcon"
          />
          <small>
            {{ $store.getters.getStars }}
          </small>
        </li>
        <li class="d-flex algin-items-center mb-2">
          <img
            src="@/assets/icons/box.png"
            alt="start"
            class="icon ajustIcon"
          />
          <small>
            {{ $store.getters.getUser.public_repos }}
          </small>
        </li>
        <li class="d-flex algin-items-center mb-3">
          <img
            src="@/assets/icons/peoples.png"
            alt="start"
            class="icon ajustIcon"
          />
          <small>
            {{ $store.getters.getUser.followers }}
          </small>
        </li>
      </ul>
    </div>
    <div class="col-sm-12 col-md-6 mt-5">
      <div v-for="(item, i) in $store.getters.getRepositoryUser" :key="i">
        <repository-component @click="saveRepository(item)" v-bind="item" />
      </div>
    </div>
    <div class="col-md-2 mt-5">
      <router-link to="/favourit">
        <div class="d-flex justify-content-end align-items-center">
          <font-awesome-icon
            :icon="['fas', 'star']"
            color="rgb(242, 180, 12)"
            size="2x"
          />
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
  created() {
    if (!this.$store.state.search) {
      this.$router.push("/");
    }
  },
  methods: {
    saveRepository(item) {
      this.$store.dispatch("Favorite", item);
    },
  },
};
</script>

<style scoped>
.user-img {
  height: 300px;
}
ul {
  list-style: none;
  padding-left: 0px;
}
.ajustIcon {
  margin-top: 2px;
  margin-right: 10px;
}
</style>