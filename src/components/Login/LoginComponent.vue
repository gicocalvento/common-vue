<template>
  <div class="login__block active" id="l-login">
      <div class="login__block__header">
        <i class="zmdi zmdi-account-circle"></i>
        Hi there! Please Sign in
        <div class="actions actions--inverse login__block__actions">
          <div class="dropdown">
            <i data-toggle="dropdown" class="zmdi zmdi-more-vert actions__item"></i>

            <div class="dropdown-menu dropdown-menu-right">
              <a
                class="dropdown-item"
                data-sa-action="login-switch"
                data-sa-target="#l-register"
                href
              >Create an account</a>
              <a
                class="dropdown-item"
                data-sa-action="login-switch"
                data-sa-target="#l-forget-password"
                href
              >Forgot password?</a>
            </div>
          </div>
        </div>
      </div>

      <div class="login__block__body">
        <form>
          <div class="form-group">
          <input type="text"  class="form-control text-center" placeholder="Email Address">
        </div>

        <div class="form-group">
          <input type="password" class="form-control text-center" placeholder="Password">
        </div>

        <button class="btn btn--icon login__block__btn" type="submit"><i class="zmdi zmdi-long-arrow-right"></i></button>

        </form>
        
      </div>
    </div>
</template>

<script>

import store from '@/store';
//import users from '@/modules/users';
import user from '@/api/user';

export default {
  name: 'LoginComponent',
  props: {
    msg: String
  },
  data() {
    return {
        users: []
    };
  },
  created() {
    user.fetchUsersAPI().then((response) => {
        console.log(response);
    });
  },
  computed:{
    fetchUsers(){
      return store.state.users;
    }
  },
  methods: {
      showRecipes() {
          alert("test");
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
