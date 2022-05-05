<template>
  <layout-component>
    <div
      class="
        d-flex
        flex-column
        custom-heigth
        justify-content-center
        align-items-center
      "
    >
      <title-component />
      <div class="w-50">
        <search-component />
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

<style scoped>
.custom-heigth {
  height: 100vh;
}
.non-bold {
  font-weight: 100;
}
</style>