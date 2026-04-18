import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ServicesView from "../views/ServicesView.vue";
import AboutView from "../views/AboutView.vue";
import ContactView from "../views/ContactView.vue";
import RegisterView from "../views/RegisterView.vue";
import LoginView from "../views/LoginView.vue";
import ProfileView from "../views/ProfileView.vue";
import AdminView from "../views/AdminView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/services",
      name: "services",
      component: ServicesView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
    },
    {
      path: "/admin",
      name: "admin",
      component: AdminView,
      meta: { requiresAdmin: true },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  const publicRoutes = ['login', 'register', 'home', 'services', 'about', 'contact'];
  
  if (!token && !publicRoutes.includes(to.name)) {
    next({ name: 'login' });
  } else if (token && (to.name === 'login' || to.name === 'register')) {
    next({ name: 'profile' });
  } else if (token && to.meta?.requiresAdmin) {
    const isAdmin = localStorage.getItem('user_is_admin') === 'true';
    if (!isAdmin) {
      next({ name: 'profile' });
      return;
    }
    next();
  } else {
    next();
  }
});

export default router;