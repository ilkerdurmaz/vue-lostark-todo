<template>
  <div class="container">
    <div class="row justify-content-center">
      <div
        class="col-12 col-md-5 card m-2 border-5 p-2 border-secondary bg-dark text-light"
      >
        <div class="card-header border-secondary mb-1">Character List</div>
        <div class="card-body" v-if="charList.length <= 0">
          <h5 class="text-warning">You don't have any character.</h5>
        </div>
        <nav>
          <div class="nav nav-tabs border-bottom-0" id="nav-tab" ref="myTab">
            <button
              v-for="(char, index) in charList"
              :key="char.charName"
              class="nav-link bg-dark text-light"
              id="nav-home-tab"
              data-bs-toggle="tab"
              :data-bs-target="'#tab' + index"
              type="button"
              role="tab"
            >
              {{ char.charName }}
            </button>
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div
            v-for="(char, index) in charList"
            :key="char.charName"
            class="tab-pane fade show"
            :id="'tab' + index"
          >
            <div class="accordion" id="accordionExample">
              <div class="accordion-item border-secondary">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button bg-dark text-light border-secondary"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                  >
                    Daily Tasks
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show bg-dark text-light"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <div class="list-group">
                      <button
                        type="button"
                        class="list-group-item list-group-item-action bg-dark text-light border-secondary"
                        v-for="(task, index) in char.dailyTasks"
                        :key="task"
                        @click="
                          task.isDone = !task.isDone;
                          updateCharTasks(char, index);
                        "
                      >
                        <span
                          class="badge bg-primary text-dark"
                          :class="{ 'bg-warning': !task.isDone }"
                          >{{ index + 1 }}
                        </span>
                        {{ task.task }}
                        <input
                          class="form-check-input float-end"
                          type="checkbox"
                          value=""
                          disabled
                          :checked="task.isDone"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="accordion-item border-secondary">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed bg-dark text-light border-secondary"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                  >
                    Weekly Tasks
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div
                    class="accordion-body bg-dark text-light border-secondary"
                  >
                    <div class="list-group">
                      <button
                        type="button"
                        class="list-group-item list-group-item-action bg-dark text-light border-secondary"
                        v-for="(task, index) in char.weeklyTasks"
                        :key="task"
                        @click="
                          task.isDone = !task.isDone;
                          updateCharTasks(char, index);
                        "
                      >
                        <span
                          class="badge bg-primary text-dark"
                          :class="{ 'bg-warning': !task.isDone }"
                          >{{ index + 1 }}
                        </span>
                        {{ task.task }}
                        <input
                          class="form-check-input float-end"
                          type="checkbox"
                          value=""
                          disabled
                          :checked="task.isDone"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              class="btn btn-outline-danger w-100 mt-5"
              @click="deleteChar(char)"
            >
              DELETE CHARACTER
            </button>
          </div>
        </div>
      </div>

      <div
        class="col-12 col-md-5 card m-2 border-5 border-secondary bg-dark text-light p-2"
      >
        <div class="card-header border-secondary">Account-Wide Tasks</div>
        <div class="card-body" v-if="getAccWideTasks.length <= 0">
          <h5 class="text-warning">You don't have any account-wide task.</h5>
        </div>
        <div class="list-group" v-else>
          <button
            type="button"
            class="list-group-item list-group-item-action bg-dark text-light border-secondary"
            v-for="(task, index) in getAccWideTasks"
            :key="task"
            @click="
              task.isDone = !task.isDone;
              updateAccWideTasks(task, index);
            "
          >
            <span
              class="badge bg-primary"
              :class="{ 'bg-warning': !task.isDone }"
              >{{ index + 1 }}</span
            >
            {{ task.task }}
            <input
              class="form-check-input float-end"
              type="checkbox"
              value=""
              disabled
              :checked="task.isDone"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
  name: "TodoList",
  data() {
    return {
      active: false,
      charList: [],
    };
  },
  computed: {
    ...mapGetters(["getCharList", "getAccWideTasks"]),
  },
  methods: {
    ...mapMutations([
      "loadData",
      "deleteChar",
      "updateCharTasks",
      "updateAccWideTasks",
      "updateCharList",
    ]),
  },
  created() {
    this.loadData();
    this.charList = this.getCharList;
  },
  mounted() {
    if (this.$refs.myTab.children.length > 0) {
      this.$refs.myTab.children[0].click();
    }

    let now = new Date();
    let resetTime = new Date(JSON.parse(localStorage.getItem("resetTime")));
    let resetDay = new Date(JSON.parse(localStorage.getItem("resetDay")));

    if (now > resetTime) {
      console.log("day reset");
      this.charList.forEach((char) => {
        char.dailyTasks.forEach((task) => {
          task.isDone = false;
        });
      });
      this.updateCharList(this.charList);
      localStorage.setItem(
        "resetTime",
        JSON.stringify(resetTime.getTime() + 86400000)
      );

      if (now > resetDay) {
        console.log("week reset");
        this.charList.forEach((char) => {
          char.weeklyTasks.forEach((task) => {
            task.isDone = false;
          });
        });
        this.updateCharList(this.charList);
        localStorage.setItem(
          "resetDay",
          JSON.stringify(resetDay.getTime() + 604800000)
        );
      }
    }
  },
};
</script>

<style scoped></style>
