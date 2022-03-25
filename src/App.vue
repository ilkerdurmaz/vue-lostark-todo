<template>
  <div>
    <header-comp></header-comp>
    <router-view></router-view>
  </div>
</template>

<script>
import headerComp from "@/components/shared/HeaderComp";


export default {
  components: {
    headerComp
  },
  beforeCreate() {

    if (localStorage.length === 0) {

      localStorage.setItem("charList", JSON.stringify([]));
      localStorage.setItem("accWideTasks", JSON.stringify([]));

    }
  }

};
</script>

<style>
@import "bootstrap";
</style>
