<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-5 card m-2 border-5 border-secondary bg-dark text-light">
        <div class="card-body">
          <h5 class="card-title mb-3">Character Adding</h5>
          <div class="input-group">
            <span class="input-group-text bg-secondary text-light">Character Name</span>
            <input
              type="text"
              class="form-control bg-dark text-light"
              placeholder="enter name"
              v-model="newChar.charName"
            />
          </div>
          <hr />
          <h5 class="card-title mb-3">Task Adding</h5>
          <div class="input-group mb-3">
            <span class="input-group-text bg-secondary text-light">Task</span>
            <input type="text" class="form-control bg-dark text-light" v-model="taskName" placeholder="enter task"/>
            <select class="form-select bg-secondary text-light" v-model="routine">
              <option disabled>Select Routine</option>
              <option>Daily</option>
              <option>Weekly</option>
              <option>Account-Wide</option>
            </select>
          </div>
          <button class="btn btn-outline-primary w-100" @click="addTask" :disabled="!(taskName.length>0&&routine!=='Select Routine')">ADD TASK</button>
          <hr />
          <button class="btn btn-outline-danger w-100" @click="charSave" :disabled="!saveEnabler">SAVE</button>
          <hr />
          <h5 class="card-title mb-3">Reset Time Select</h5>
          <div class="input-group mb-3">
            <span class="input-group-text bg-secondary text-light">Daily Tasks Reset Time</span>
            <input
              type="time"
              class="form-control bg-dark text-light"
              placeholder="8:00"
              v-model="resetTime"
              @change="updateResetTime"
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text bg-secondary text-light">Weekly Tasks Reset Day</span>
            <select
              class="form-select bg-dark text-light"
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
      <div class="col-12 col-md-5 card m-2 border-5 border-secondary bg-dark text-light">
        <div class="card-body">
          <h5 class="card-title mb-3">Daily Tasks</h5>
          <hr />
          <ul
            class="list-group"
            v-for="(task, index) in newChar.dailyTasks"
            :key="task"
          >
            <li class="list-group-item bg-secondary text-light">
              {{ task.task }}
              <button
                class="btn-close border border-2 border-danger float-end"
                @click="newChar.dailyTasks.splice(index, 1)"
              >
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
            <li class="list-group-item bg-secondary text-light">
              {{ task.task }}
              <button
                class="btn-close border border-2 border-danger float-end"
                @click="newChar.weeklyTasks.splice(index, 1)"
              >
              </button>
            </li>
          </ul>
          <h5 class="card-title mb-3">Account-Wide Tasks</h5>
          <hr />
          <ul class="list-group">
            <li
              class="list-group-item bg-secondary text-light"
              v-for="(task, index) in getAccWideTasks"
              :key="task"
            >
              {{ task.task }}
              <button
                class="btn-close border border-2 border-danger float-end"
                @click="deleteAccWideTask(index)"
              >
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
    saveEnabler(){
      return this.newChar.charName && (this.newChar.dailyTasks.length > 0 || this.newChar.weeklyTasks.length > 0);

    }
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
      let date = new Date();
      let dayDiff = 0;
      if (this.resetDay > date.getDay()) {
        dayDiff = Math.abs(this.resetDay - date.getDay());
      } else {
        dayDiff = 7 - Math.abs(this.resetDay - date.getDay());
      }
      let newDate = new Date(date.getTime() + dayDiff * 86400000);
      localStorage.setItem("resetDay", JSON.stringify(newDate.getTime()));
    },
    updateResetTime() {
      if(this.resetTime.length === 5){
        let date = new Date();
        let time = this.resetTime.split(":");
        let newDate = new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate(),
          time[0],
          time[1]
        );
        localStorage.setItem("resetTime", newDate.getTime().toString());
      }
    },
  },
  created() {
    this.resetDay = new Date(
      JSON.parse(localStorage.getItem("resetDay"))
    ).getDay();
    this.resetTime =
      new Date(JSON.parse(localStorage.getItem("resetTime")))
        .getHours()
        .toString()
        .padStart(2, "0") +
      ":" +
      new Date(JSON.parse(localStorage.getItem("resetTime")))
        .getMinutes()
        .toString()
        .padStart(2, "0");
  },
};
</script>

<style scoped></style>
