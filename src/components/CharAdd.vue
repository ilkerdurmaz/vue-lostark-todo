<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-5 card m-2 border-5">
        <div class="card-body">
          <h5 class="card-title mb-3">Character Adding</h5>
          <div class="input-group">
            <span class="input-group-text">Character Name</span>
            <input
              type="text"
              class="form-control"
              placeholder="Enter Your Character Name"
              v-model="newChar.charName"
            />
          </div>
          <hr />
          <h5 class="card-title mb-3">Task Adding</h5>
          <div class="input-group mb-3">
            <span class="input-group-text">Task</span>
            <input type="text" class="form-control" v-model="taskName" />
            <select class="form-select" v-model="routine">
              <option disabled>Select Routine</option>
              <option>Daily</option>
              <option>Weekly</option>
              <option>Account-Wide</option>
            </select>
          </div>
          <button class="btn btn-dark w-100" @click="addTask">ADD TASK</button>
          <hr />
          <button class="btn btn-danger w-100" @click="charSave">SAVE</button>
          <hr />
          <h5 class="card-title mb-3">Reset Time Select</h5>
          <div class="input-group mb-3">
            <span class="input-group-text">Daily Tasks Reset Time</span>
            <input
              type="time"
              class="form-control"
              placeholder="8:00"
              v-model="resetTime"
              @change="updateResetTime"
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text">Weekly Tasks Reset Day</span>
            <select
              class="form-select"
              v-model="resetDay"
              @change="updateResetDay"
            >
              <option value="0" selected disabled>Select Day</option>
              <option value="1">Monday</option>
              <option value="2">Tuesday</option>
              <option value="3">Wednesday</option>
              <option value="4">Thursday</option>
              <option value="5">Friday</option>
              <option value="6">Saturday</option>
              <option value="7">Sunday</option>
            </select>
          </div>
        </div>
      </div>
      <div class="col-5 card m-2 border-5">
        <div class="card-body">
          <h5 class="card-title mb-3">Daily Tasks</h5>
          <hr />
          <ul
            class="list-group"
            v-for="(task, index) in newChar.dailyTasks"
            :key="task"
          >
            <li class="list-group-item">
              {{ task.task }}
              <button
                class="btn btn-danger float-end"
                @click="newChar.dailyTasks.splice(index, 1)"
              >
                DELETE
              </button>
            </li>
          </ul>
          <h5 class="card-title mb-3">Weekly Tasks</h5>
          <hr />
          <ul
            class="list-group"
            v-for="(task, index) in newChar.weeklyTasks"
            :key="task"
          >
            <li class="list-group-item">
              {{ task.task }}
              <button
                class="btn btn-danger float-end"
                @click="newChar.weeklyTasks.splice(index, 1)"
              >
                DELETE
              </button>
            </li>
          </ul>
          <h5 class="card-title mb-3">Account-Wide Tasks</h5>
          <hr />
          <ul class="list-group">
            <li
              class="list-group-item"
              v-for="(task, index) in getAccWideTasks"
              :key="task"
            >
              {{ task.task }}
              <button
                class="btn btn-danger float-end"
                @click="deleteAccWideTask(index)"
              >
                DELETE
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
  name: "CharAdd",
  data() {
    return {
      newChar: {
        charName: null,
        dailyTasks: [],
        weeklyTasks: [],
      },
      taskName: "",
      routine: "Select Routine",
      resetTime: "20:00",
      resetDay: 0,
    };
  },
  computed: {
    ...mapGetters(["getAccWideTasks"]),
  },
  methods: {
    ...mapMutations(["addCharList", "addAccWideTasks", "deleteAccWideTask"]),
    addTask() {
      if (this.routine === "Daily") {
        this.newChar.dailyTasks.push({ task: this.taskName, isDone: false });
      } else if (this.routine === "Weekly") {
        this.newChar.weeklyTasks.push({ task: this.taskName, isDone: false });
      } else if (this.routine === "Account-Wide") {
        this.addAccWideTasks({ task: this.taskName, isDone: false });
      }
    },
    charSave() {
      this.addCharList(this.newChar);
      this.newChar = {
        charName: null,
        dailyTasks: [],
        weeklyTasks: [],
      };
      this.taskName = "";
      this.routine = "Select Routine";
    },
    updateResetDay() {
      localStorage.setItem("resetDay", this.resetDay);
    },
    updateResetTime() {
      localStorage.setItem("resetTime", this.resetTime);
    },
  },
  created() {
    this.resetDay = localStorage.getItem("resetDay") || 0;
    this.resetTime = localStorage.getItem("resetTime") || "20:00";
  },
};
</script>

<style scoped></style>
