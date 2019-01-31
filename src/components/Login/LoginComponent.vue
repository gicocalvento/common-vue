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
        <form
          id="loginForm"
          @submit="loginUser"
        >
          <div class="form-group">
          <input type="text" v-model="email" class="form-control text-center" placeholder="Email Address">
        </div>

        <div class="form-group">
          <input type="password" v-model="password" class="form-control text-center" placeholder="Password">
        </div>

        <button class="btn btn--icon login__block__btn" type="submit"><i class="zmdi zmdi-long-arrow-right"></i></button>

        </form>
        
      </div>
    </div>
</template>

<script>

import store from '@/store';
import auth from '@/modules/auth';
import user from '@/api/user';

export default {
  name: 'LoginComponent',
  props: {
    msg: String
  },
  data() {
    return {
        users: [],
        errors: [],
        email: null,
        password: null
    };
  },
  methods: {
      loginUser(e) {
          let request = {
            email: this.email,
            password: this.password
          }
          console.log(request);
          this.$store.dispatch('loginUserByEmailPassword', request);
          e.preventDefault();
      }
  },
  created(){
    
    $(document).ready(function() {
        function a(a) {
            a.requestFullscreen ? a.requestFullscreen() : a.mozRequestFullScreen ? a.mozRequestFullScreen() : a.webkitRequestFullscreen ? a.webkitRequestFullscreen() : a.msRequestFullscreen && a.msRequestFullscreen()
        }
        $("body").on("click", "[data-sa-action]", function(b) {
            b.preventDefault();
            var c = $(this),
                d = c.data("sa-action"),
                e = "";
            switch (d) {
                case "search-open":
                    $(".search").addClass("search--toggled");
                    break;
                case "search-close":
                    $(".search").removeClass("search--toggled");
                    break;
                case "aside-open":
                    e = c.data("sa-target"), c.addClass("toggled"), $("body").addClass("aside-toggled"), $(e).addClass("toggled"), $(".content, .header").append('<div class="sa-backdrop" data-sa-action="aside-close" data-sa-target=' + e + " />");
                    break;
                case "aside-close":
                    e = c.data("sa-target"), $("body").removeClass("aside-toggled"), $('[data-sa-action="aside-open"], ' + e).removeClass("toggled"), $(".content, .header").find(".sa-backdrop").remove();
                    break;
                case "fullscreen":
                    a(document.documentElement);
                    break;
                case "print":
                    window.print();
                    break;
                case "login-switch":
                    e = c.data("sa-target"), $(".login__block").removeClass("active"), $(e).addClass("active");
                    break;
                case "notifications-clear":
                    b.stopPropagation();
                    var f = $(".top-nav__notifications .listview__item"),
                        g = f.length,
                        h = 0;
                    c.fadeOut(), f.each(function() {
                        var a = $(this);
                        setTimeout(function() {
                            a.addClass("animated fadeOutRight")
                        }, h += 150)
                    }), setTimeout(function() {
                        f.remove(), $(".top-nav__notifications").addClass("top-nav__notifications--cleared")
                    }, 180 * g);
                    break;
                case "toolbar-search-open":
                    $(this).closest(".toolbar").find(".toolbar__search").fadeIn(200), $(this).closest(".toolbar").find(".toolbar__search input").focus();
                    break;
                case "toolbar-search-close":
                    $(this).closest(".toolbar").find(".toolbar__search input").val(""), $(this).closest(".toolbar").find(".toolbar__search").fadeOut(200)
            }
        })
    });

  }
}
</script>
