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
    headerComp,
  },
  beforeCreate() {
    if (localStorage.length === 0) {
      localStorage.setItem("charList", JSON.stringify([]));
      localStorage.setItem("accWideTasks", JSON.stringify([]));
      localStorage.setItem("resetDay", 100000000000);
      localStorage.setItem("resetTime", 100000000000);
    }
  },
};
</script>

<style>
@import "bootstrap";
</style>
