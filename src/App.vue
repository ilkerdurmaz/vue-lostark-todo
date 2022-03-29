<template>
  <div class="bg-dark min-vh-100" >
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
      console.log("No local storage");
      localStorage.setItem("charList", JSON.stringify([]));
      localStorage.setItem("accWideTasks", JSON.stringify([]));
      localStorage.setItem("resetDay", Date.now().toString());
      localStorage.setItem("resetTime", Date.now().toString());
    }
    else if (localStorage.getItem("resetTime")==="NaN"||localStorage.getItem("resetTime")===null) {
      localStorage.setItem("resetTime", Date.now().toString());
    }

  },
};
</script>

<style>
@import "bootstrap";
</style>
