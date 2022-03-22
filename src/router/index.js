import { createRouter, createWebHistory } from "vue-router";
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
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
