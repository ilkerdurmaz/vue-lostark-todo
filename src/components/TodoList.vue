<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-5 card m-2 border-5 p-2">
        <div class="card-header">Character List</div>
        <nav>
          <div class="nav nav-tabs" id="nav-tab" ref="myTab">
            <button
              v-for="(char, index) in charList"
              :key="char.charName"
              class="nav-link"
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
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                  >
                    Daily Tasks
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <div class="list-group">
                      <button
                        type="button"
                        class="list-group-item list-group-item-action"
                        v-for="(task, index) in char.dailyTasks"
                        :key="task"
                        @click="
                          task.isDone = !task.isDone;
                          updateCharTasks(char, index);
                        "
                      >
                        <span
                          class="badge bg-primary"
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

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed"
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
                  <div class="accordion-body">
                    <div class="list-group">
                      <button
                        type="button"
                        class="list-group-item list-group-item-action"
                        v-for="(task, index) in char.weeklyTasks"
                        :key="task"
                        @click="
                          task.isDone = !task.isDone;
                          updateCharTasks(char, index);
                        "
                      >
                        <span
                          class="badge bg-primary"
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
            <button class="btn btn-danger w-100 mt-5" @click="deleteChar(char)">
              DELETE CHARACTER
            </button>
          </div>
        </div>
      </div>
      <div class="col-5 card m-2 border-5 p-2">
        <div class="card-header">Account-Wide Tasks</div>
        <div class="list-group">
          <button
            type="button"
            class="list-group-item list-group-item-action"
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
    this.$refs.myTab.children[0].click();

    let date = new Date();
    if (localStorage.getItem("isToday") === null) {
      localStorage.setItem("isToday", JSON.stringify(date));
    } else {
      let storedDay = new Date(JSON.parse(localStorage.getItem("isToday")));
      let storedResetTime = localStorage.getItem("resetTime");
      let resetTime = new Date();
      resetTime.setHours(storedResetTime.split(":")[0]);
      resetTime.setMinutes(storedResetTime.split(":")[1]);

      if (date.getDay() !== storedDay.getDay() && date >= resetTime) {
        console.log("resetlendi");
        localStorage.setItem("isToday", JSON.stringify(date));
        this.charList.forEach((char) => {
          char.dailyTasks.forEach((task) => {
            task.isDone = false;
          });
          this.updateCharList(this.charList);
        });
      }
    }
  },
};
</script>

<style scoped></style>
