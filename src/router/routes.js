const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/UnosKategorije.vue") },
      { path: "/grad", component: () => import("src/pages/UnosGrada.vue") },
      {
        path: "/lokacija",
        component: () => import("src/pages/UnosLokacije.vue"),
      },
      {
        path: "/sifrarnici",
        component: () => import("src/pages/SifrarniciPage.vue"),
      },
      {
        path: "/home",
        component: () => import("src/pages/HomePage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
