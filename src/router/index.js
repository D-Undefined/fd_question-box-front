import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

var routes = [
    {
      path: '/',
      name: 'home',
      component: ()=>
        import(/* webpackChunkName: "about" */"../pages/Home.vue")
    },
    {
      path: '/answer',
      name: 'answer',
      component: ()=>
        import(/* webpackChunkName: "about" */"../pages/Answer.vue")
    },
    {
      path: '/question',
      name: 'question',
      component: ()=>
        import(/* webpackChunkName: "about" */"../pages/Question.vue")
    }
  ];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
