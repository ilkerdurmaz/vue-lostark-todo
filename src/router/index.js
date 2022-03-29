import { createRouter, createWebHashHistory } from "vue-router";
import charAdd from "@/components/CharAdd";
import todoList from "@/components/TodoList";

const routes = [
  {
    path: "/char-add",
    component: charAdd,
  },
  {
    path: "/todo-list",
    component: todoList,
  },
  {
    path: "/:pathMatch(.*)*",
    component: todoList,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
