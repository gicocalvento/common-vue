<template>
  <div class="login">
    <LoginComponent msg="Welcome to Your Vue.js App"/>
    <ForgotPassword msg="Welcome to Your Vue.js App"/>
    <Register msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginComponent from "@/components/Login/LoginComponent.vue";
import ForgotPassword from "@/components/Login/ForgotPassword.vue";
import Register from "@/components/Login/Register.vue";

export default {
  name: "login",
  components: {
    LoginComponent,
    ForgotPassword,
    Register
  }
};
</script>
