<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-secondary border-3 rounded">
      <div class="container-fluid">
        <router-link custom to="/" v-slot="{ navigate }">
          <a class="navbar-brand" @click="navigate">
            <img
              src="../../assets/1.png"
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            />
            Lost Ark
          </a>
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link
                custom
                to="/todo-list"
                v-slot="{ navigate, isActive }"
              >
                <a
                  :class="{ active: isActive, 'nav-link': true }"
                  @click="navigate"
                  role="button"
                >
                  To-Do List</a
                >
              </router-link>
            </li>
            <li class="nav-item">
              <router-link custom to="char-add" v-slot="{ navigate, isActive }">
                <a
                  :class="{ active: isActive, 'nav-link': true }"
                  @click="navigate"
                  role="button"
                  >Character Add</a
                >
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "HeaderComp",
};
</script>

<style scoped></style>
