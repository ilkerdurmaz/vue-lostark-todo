import { createStore } from "vuex";

export default createStore({
  state: {
    charList: [],
    accWideTasks: [],
  },
  getters: {
    getCharList(state) {
      return state.charList;
    },
    getAccWideTasks(state) {
      return state.accWideTasks;
    },
  },
  mutations: {
    updateCharList(state, charList) {
      state.charList = charList;
      localStorage.setItem("charList", JSON.stringify(charList));
    },
    addCharList(state, newChar) {
      state.charList.push(newChar);
      localStorage.setItem("charList", JSON.stringify(state.charList));
    },
    addAccWideTasks(state, newTask) {
      state.accWideTasks.push(newTask);
      localStorage.setItem("accWideTasks", JSON.stringify(state.accWideTasks));
    },
    loadData(state) {
      state.charList = JSON.parse(localStorage.getItem("charList"));
      state.accWideTasks = JSON.parse(localStorage.getItem("accWideTasks"));
    },
    deleteChar(state, char) {
      if (confirm("CONFIRM DELETE CHARACTER")) {
        let index = state.charList.indexOf(char);
        if (index > -1) {
          state.charList.splice(index, 1);
          localStorage.setItem("charList", JSON.stringify(state.charList));
        }
      }
    },
    updateCharTasks(state, char, index) {
      state.charList[index] = char;
      localStorage.setItem("charList", JSON.stringify(state.charList));
    },
    deleteAccWideTask(state, index) {
      if (index > -1) {
        state.accWideTasks.splice(index, 1);
        localStorage.setItem(
          "accWideTasks",
          JSON.stringify(state.accWideTasks)
        );
      }
    },
    updateAccWideTasks(state, task, index) {
      state.charList[index] = task;
      localStorage.setItem("accWideTasks", JSON.stringify(state.accWideTasks));
    },
  },
  actions: {},
  modules: {},
});
