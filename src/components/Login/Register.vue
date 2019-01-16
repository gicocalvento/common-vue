<template>
  <div class="login__block" id="l-forget-password">
    <div class="login__block__header">
      <i class="zmdi zmdi-account-circle"></i>
      Forgot Password?
      <div class="actions actions--inverse login__block__actions">
        <div class="dropdown">
          <i data-toggle="dropdown" class="zmdi zmdi-more-vert actions__item"></i>

          <div class="dropdown-menu dropdown-menu-right">
            <a
              class="dropdown-item"
              data-sa-action="login-switch"
              data-sa-target="#l-login"
              href
            >Already have an account?</a>
            <a
              class="dropdown-item"
              data-sa-action="login-switch"
              data-sa-target="#l-register"
              href
            >Create an account</a>
          </div>
        </div>
      </div>
    </div>

    <div class="login__block__body">
      <p class="mb-5">Lorem ipsum dolor fringilla enim feugiat commodo sed ac lacus.</p>

      <div class="form-group">
        <input type="text" class="form-control text-center" placeholder="Email Address">
      </div>

      <a href="index.html" class="btn btn--icon login__block__btn">
        <i class="zmdi zmdi-check"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  props: {
    msg: String
  }
};
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
