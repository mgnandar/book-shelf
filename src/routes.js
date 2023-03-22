import { createRouter, createWebHistory } from "vue-router";
import HomeCompo from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
import LoginCompo from "./components/Login.vue";
import AddBook from "./components/AddBook.vue";
import UpdateBook from "./components/UpdateBook.vue";

const routes = [
  {
    name: "Home",
    path: "/",
    component: HomeCompo,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "SignUp",
    path: "/sign-up",
    component: SignUp,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "Login",
    path: "/login",
    component: LoginCompo,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "AddBook",
    path: "/add",
    component: AddBook,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "UpdateBook",
    path: "/update/:id",
    component: UpdateBook,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuth = to.matched.some((record) => record.meta.requiresAuth);
  const loggedIn = localStorage.getItem("user-info");
  if (isAuth) {
    if (loggedIn != null) {
      if (to.name === "SignUp" || to.name === "Login") {
        console.log("111111");

        next({ path: "/" });
      } else {
        console.log("222222");
        next();
      }
    } else {
      // next("/login");
      next();
    }
  } else {
    next();
  }
});

export default router;
