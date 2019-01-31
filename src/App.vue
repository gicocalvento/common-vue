<template>
<main class="main">
  <router-view/>
</main>
</template>
<script src="<%= BASE_URL %>vendors/bower_components/js/jquery.min.js"></script>
<script>
import router from '@/router';

export default {
  name: 'App',
  props: {
    msg: String
  },
  created(){
    $(".scrollbar-inner").scrollbar().scrollLock();
  }
}

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/register'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('token');

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
})

</script>





