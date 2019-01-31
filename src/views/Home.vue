<template>
<div>
<HeaderComponent  msg="Welcome to Your Vue.js App"/>
<SidebarComponent  msg="Welcome to Your Vue.js App"/>
<router-view></router-view>
            <!-- <section class="content">
                <header class="content__title">
                    <h1>Dashboard</h1>
                    <small>Welcome to the unique SuperAdmin web app experience!</small>

                    <div class="actions">
                            <a href="" class="actions__item zmdi zmdi-trending-up"></a>
                            <a href="" class="actions__item zmdi zmdi-check-all"></a>

                            <div class="dropdown actions__item">
                                <i data-toggle="dropdown" class="zmdi zmdi-more-vert"></i>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <a href="" class="dropdown-item">Refresh</a>
                                    <a href="" class="dropdown-item">Manage Widgets</a>
                                    <a href="" class="dropdown-item">Settings</a>
                                </div>
                            </div>
                        </div>
                </header>

                <div class="row quick-stats">
                    <div class="col-sm-6 col-md-3">
                        <div class="quick-stats__item">
                            <div class="quick-stats__info">
                                <h2>987,459</h2>
                                <small>Total Leads Recieved</small>
                            </div>

                            <div class="quick-stats__chart peity-bar">6,4,8,6,5,6,7,8,3,5,9</div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-md-3">
                        <div class="quick-stats__item">
                            <div class="quick-stats__info">
                                <h2>356,785K</h2>
                                <small>Total Website Clicks</small>
                            </div>

                            <div class="quick-stats__chart peity-bar">4,7,6,2,5,3,8,6,6,4,8</div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-md-3">
                        <div class="quick-stats__item">
                            <div class="quick-stats__info">
                                <h2>$58,778</h2>
                                <small>Total Sales Orders</small>
                            </div>

                            <div class="quick-stats__chart peity-bar">9,4,6,5,6,4,5,7,9,3,6</div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-md-3">
                        <div class="quick-stats__item">
                            <div class="quick-stats__info">
                                <h2>214</h2>
                                <small>Total Support Tickets</small>
                            </div>

                            <div class="quick-stats__chart peity-bar">5,6,3,9,7,5,4,6,5,6,4</div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-6">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Sales Statistics</h4>
                                <h6 class="card-subtitle">Vestibulum purus quam scelerisque, mollis nonummy metus</h6>

                                <div class="flot-chart flot-curved-line"></div>
                                <div class="flot-chart-legends flot-chart-legends--curved"></div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Growth Rate</h4>
                                <h6 class="card-subtitle">Commodo luctus nisi erat porttitor ligula eget lacinia odio semnec</h6>

                                <div class="flot-chart flot-line"></div>
                                <div class="flot-chart-legends flot-chart-legends--line"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                  <div class="col-lg-6">
                    <div class="card widget-past-days ">
                        <div class="card-body">
                            <h4 class="card-title">For the past 30 days</h4>
                            <h6 class="card-subtitle">Pellentesque ornare sem lacinia quam</h6>
                        </div>

                        <div class="flot-chart flot-chart--sm flot-past-days"></div>

                        <div class="listview listview--bordered">
                            <div class="listview__item">
                                <div class="widget-past-days__info">
                                    <small>Page Views</small>
                                    <h3>47,896,536</h3>
                                </div>

                                <div class="widget-past-days__chart hidden-sm">
                                    <div class="peity-bar">6,9,5,6,3,7,5,4,6,5,6,4,2,5,8,2,6,9</div>
                                </div>
                            </div>

                            <div class="listview__item">
                                <div class="widget-past-days__info">
                                    <small>Site Visitors</small>
                                    <h3>24,456,799</h3>
                                </div>

                                <div class="widget-past-days__chart hidden-sm">
                                    <div class="peity-bar">5,7,2,5,2,8,6,7,6,5,3,1,9,3,5,8,2,4</div>
                                </div>
                            </div>

                            <div class="listview__item">
                                <div class="widget-past-days__info">
                                    <small>Total Clicks</small>
                                    <h3>13,965</h3>
                                </div>

                                <div class="widget-past-days__chart hidden-sm">
                                    <div class="peity-bar">5,7,2,5,2,8,6,7,6,5,3,1,9,3,5,8,2,4</div>
                                </div>
                            </div>

                            <div class="listview__item">
                                <div class="widget-past-days__info">
                                    <small>Total Returns</small>
                                    <h3>198</h3>
                                </div>

                                <div class="widget-past-days__chart hidden-sm">
                                    <div class="peity-bar">3,9,1,3,5,6,7,6,8,2,5,2,7,5,6,7,6,8</div>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="card widget-visitors">
                        <div class="card-body">
                            <h4 class="card-title">Realtime Visitors</h4>
                            <h6 class="card-subtitle">Nullam dolor isnibh ultricies vehicula adipiscing</h6>

                            <div class="widget-visitors__stats">
                                <div>
                                    <strong>23528</strong>
                                    <small>Visitor for last 24 hours</small>
                                </div>
                                <div>
                                    <strong>746</strong>
                                    <small>Visitors last 30 minutes</small>
                                </div>
                            </div>

                            <div class="widget-visitors__map map-visitors"></div>
                        </div>

                        <div class="listview listview--bordered">
                            <div class="listview__item">
                                <div class="listview__content">
                                    <div class="listview__heading">Sunday, September 4, 21:44:02 (2 Mins 56 Seconds)</div>

                                    <div class="listview__attrs">
                                        <span>United States</span>
                                        <span>Firefox</span>
                                        <span>Mac OSX</span>
                                    </div>
                                </div>
                            </div>

                            <div class="listview__item">
                                <div class="listview__content">
                                    <div class="listview__heading">Sunday, September 4, 20:21:01 (5 Mins 12 Seconds)</div>

                                    <div class="listview__attrs">
                                        <span>Australia</span>
                                        <span>Chrome</span>
                                        <span>Android</span>
                                    </div>
                                </div>
                            </div>

                            <div class="listview__item">
                                <div class="listview__content">
                                    <div class="listview__heading">Sunday, September 4, 20:21:10 (10 Mins 43 Seconds)</div>

                                    <div class="listview__attrs">
                                        <span>Brazil</span>
                                        <span>Edge</span>
                                        <span>Windows</span>
                                    </div>
                                </div>
                            </div>

                            <div class="listview__item">
                                <div class="listview__content">
                                    <div class="listview__heading">Sunday, September 4, 20:59:04 (1 Min 02 Seconds)</div>

                                    <div class="listview__attrs">
                                        <span>South Korea</span>
                                        <span>Chrome</span>
                                        <span>Android</span>
                                    </div>
                                </div>
                            </div>

                            <div class="listview__item">
                                <div class="listview__content">
                                    <div class="listview__heading">Sunday, September 4, 20:58:12 (3 Min 44 Seconds)</div>

                                    <div class="listview__attrs">
                                        <span>Japan</span>
                                        <span>Chrome</span>
                                        <span>Windows</span>
                                    </div>
                                </div>
                            </div>

                            <div class="p-3"></div>
                        </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="card todo">
                        <div class="card-body">
                            <h4 class="card-title">Todo lists</h4>
                            <h6 class="card-subtitle">Venenatis portauam Inceptos ameteiam</h6>
                        </div>
                        <div class="listview">
                            <div class="listview__item">
                                <label class="custom-control custom-control--char todo__item">
                                    <input class="custom-control-input" type="checkbox" value="" checked>
                                    <span class="custom-control--char__helper"><i>F</i></span>
                                    <div class="todo__info">
                                        <span>Fivamus sagittis lacus vel augue laoreet rutrum faucibus dolor</span>
                                        <small>Today at 8.30 AM</small>
                                    </div>

                                    <div class="listview__attrs">
                                        <span>#Messages</span>
                                        <span>!!!</span>
                                    </div>
                                </label>

                                <div class="actions listview__actions">
                                    <div class="dropdown actions__item">
                                        <i class="zmdi zmdi-more-vert" data-toggle="dropdown"></i>
                                        <div class="dropdown-menu dropdown-menu-right">
                                            <a class="dropdown-item" href="">Mark as completed</a>
                                            <a class="dropdown-item" href="">Delete</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="listview__item">
                                <label class="custom-control custom-control--char todo__item">
                                    <input class="custom-control-input" type="checkbox" value="" checked>
                                    <span class="custom-control--char__helper"><i>N</i></span>
                                    <div class="todo__info">
                                        <span>Nullam id dolor id nibh ultricies vehicula ut id elit</span>
                                        <small>Today at 12.30 PM</small>
                                    </div>

                                    <div class="listview__attrs">
                                        <span>#Clients</span>
                                        <span>!!</span>
                                    </div>
                                </label>

                                <div class="actions listview__actions">
                                    <div class="dropdown actions__item">
                                        <i class="zmdi zmdi-more-vert" data-toggle="dropdown"></i>
                                        <div class="dropdown-menu dropdown-menu-right">
                                            <a class="dropdown-item" href="">Mark as completed</a>
                                            <a class="dropdown-item" href="">Delete</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="listview__item">
                                <label class="custom-control custom-control--char todo__item">
                                    <input class="custom-control-input" type="checkbox" value="">
                                    <span class="custom-control--char__helper"><i>C</i></span>
                                    <div class="todo__info">
                                        <span>Cras mattis consectetur purus sit amet fermentum</span>
                                        <small>Tomorrow at 10.30 AM</small>
                                    </div>

                                    <div class="listview__attrs">
                                        <span>#Clients</span>
                                        <span>!!</span>
                                    </div>
                                </label>

                                <div class="actions listview__actions">
                                    <div class="dropdown actions__item">
                                        <i class="zmdi zmdi-more-vert" data-toggle="dropdown"></i>
                                        <div class="dropdown-menu dropdown-menu-right">
                                            <a class="dropdown-item" href="">Mark as completed</a>
                                            <a class="dropdown-item" href="">Delete</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="listview__item">
                                <label class="custom-control custom-control--char todo__item">
                                    <input class="custom-control-input" type="checkbox" value="">
                                    <span class="custom-control--char__helper"><i>I</i></span>
                                    <div class="todo__info">
                                        <span>Integer posuere erat a ante venenatis dapibus posuere velit aliquet</span>
                                        <small>05/08/2017 at 08.00 AM</small>
                                    </div>

                                    <div class="listview__attrs">
                                        <span>#Server</span>
                                        <span>!</span>
                                    </div>
                                </label>

                                <div class="actions listview__actions">
                                    <div class="dropdown actions__item">
                                        <i class="zmdi zmdi-more-vert" data-toggle="dropdown"></i>
                                        <div class="dropdown-menu dropdown-menu-right">
                                            <a class="dropdown-item" href="">Mark as completed</a>
                                            <a class="dropdown-item" href="">Delete</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="listview__item">
                                <label class="custom-control custom-control--char todo__item">
                                    <input class="custom-control-input" type="checkbox" value="">
                                    <span class="custom-control--char__helper"><i>P</i></span>
                                    <div class="todo__info">
                                        <span>Praesent commodo cursus magnavel scelerisque nisl consectetur</span>
                                        <small>10/08/2016 at 04.00 AM</small>
                                    </div>

                                    <div class="listview__attrs">
                                        <span>#Server</span>
                                        <span>!!!</span>
                                    </div>
                                </label>

                                <div class="actions listview__actions">
                                    <div class="dropdown actions__item">
                                        <i class="zmdi zmdi-more-vert" data-toggle="dropdown"></i>
                                        <div class="dropdown-menu dropdown-menu-right">
                                            <a class="dropdown-item" href="">Mark as completed</a>
                                            <a class="dropdown-item" href="">Delete</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <a href="todos.html" class="view-more">View More</a>
                    </div>
                  </div>
                </div>

                

                <footer class="footer hidden-xs-down">
                    <p>© Super Admin Responsive. All rights reserved.</p>

                    <ul class="nav footer__nav">
                        <a class="nav-link" href="">Homepage</a>

                        <a class="nav-link" href="">Company</a>

                        <a class="nav-link" href="">Support</a>

                        <a class="nav-link" href="">News</a>

                        <a class="nav-link" href="">Contacts</a>
                    </ul>
                </footer>
            </section> -->
</div>

</template>


<script>  
import HeaderComponent from "@/components/Home/HeaderComponent.vue";
import SidebarComponent from "@/components/Home/SidebarComponent.vue";

export default {
  name: 'home',
  components: {
    HeaderComponent,
    SidebarComponent
  },
  created() {

    $(document).ready(function() {
      
            $(window).on("scroll", function() {
                $(window).scrollTop() >= 20 ? $(".header").addClass("header--scrolled") : $(".header").removeClass("header--scrolled")
            });
                var a = new Date;
                a.setDate(a.getDate()), setInterval(function() {
                    var a = (new Date).getSeconds();
                    $(".time__sec").html((a < 10 ? "0" : "") + a)
                }, 1e3), setInterval(function() {
                    var a = (new Date).getMinutes();
                    $(".time__min").html((a < 10 ? "0" : "") + a)
                }, 1e3), setInterval(function() {
                    var a = (new Date).getHours();
                    $(".time__hours").html((a < 10 ? "0" : "") + a)
                }, 1e3)
            
       });
    setTimeout(function() {
        $(".page-loader").fadeOut()
    }, 500);

    $(document).ready(function() {

          $("body").on("click", ".themes__item", function(a) {
              a.preventDefault(), $(".themes__item").removeClass("active"), $(this).addClass("active");
              var b = $(this).data("sa-value");
              $("body").attr("data-sa-theme", b)
          }), $("body").on("focus", ".search__text", function() {
              $(this).closest(".search").addClass("search--focus")
          }), $("body").on("blur", ".search__text", function() {
              $(this).val(""), $(this).closest(".search").removeClass("search--focus")
          }), $("body").on("click", ".navigation__sub > a", function(a) {
              a.preventDefault(), $(this).parent().toggleClass("navigation__sub--toggled"), $(this).next("ul").slideToggle(250)
          }), $(".form-group--float")[0] && ($(".form-group--float").each(function() {
              0 == !$(this).find(".form-control").val().length && $(this).find(".form-control").addClass("form-control--active")
          }), $("body").on("blur", ".form-group--float .form-control", function() {
              0 == $(this).val().length ? $(this).removeClass("form-control--active") : $(this).addClass("form-control--active")
          })), $("body").on("click", ".dropdown-menu--active", function(a) {
              a.stopPropagation()
          })
      }), $("#dropzone-upload")[0] && (Dropzone.autoDiscover = !1), $(document).ready(function() {
          if ($("#data-table")[0]) {
              $("#data-table").DataTable({
                  autoWidth: !1,
                  responsive: !0,
                  lengthMenu: [
                      [15, 30, 45, -1],
                      ["15 Rows", "30 Rows", "45 Rows", "Everything"]
                  ],
                  language: {
                      searchPlaceholder: "Search for records..."
                  },
                  dom: "Blfrtip",
                  buttons: [{
                      extend: "excelHtml5",
                      title: "Export Data"
                  }, {
                      extend: "csvHtml5",
                      title: "Export Data"
                  }, {
                      extend: "print",
                      title: "Material Admin"
                  }],
                  initComplete: function(a, b) {
                      $(this).closest(".dataTables_wrapper").prepend('<div class="dataTables_buttons hidden-sm-down actions"><span class="actions__item zmdi zmdi-print" data-table-action="print" /><span class="actions__item zmdi zmdi-fullscreen" data-table-action="fullscreen" /><div class="dropdown actions__item"><i data-toggle="dropdown" class="zmdi zmdi-download" /><ul class="dropdown-menu dropdown-menu-right"><a href="" class="dropdown-item" data-table-action="excel">Excel (.xlsx)</a><a href="" class="dropdown-item" data-table-action="csv">CSV (.csv)</a></ul></div></div>')
                  }
              }), $("body").on("click", "[data-table-action]", function(a) {
                  a.preventDefault();
                  var b = $(this).data("table-action");
                  if ("excel" === b && $(this).closest(".dataTables_wrapper").find(".buttons-excel").trigger("click"), "csv" === b && $(this).closest(".dataTables_wrapper").find(".buttons-csv").trigger("click"), "print" === b && $(this).closest(".dataTables_wrapper").find(".buttons-print").trigger("click"), "fullscreen" === b) {
                      var c = $(this).closest(".card");
                      c.hasClass("card--fullscreen") ? (c.removeClass("card--fullscreen"), $("body").removeClass("data-table-toggled")) : (c.addClass("card--fullscreen"), $("body").addClass("data-table-toggled"))
                  }
              })
          }
          if ($(".textarea-autosize")[0] && autosize($(".textarea-autosize")), $("input-mask")[0] && $(".input-mask").mask(), $("select.select2")[0]) {
              var a = $(".select2-parent")[0] ? $(".select2-parent") : $("body");
              $("select.select2").select2({
                  dropdownAutoWidth: !0,
                  width: "100%",
                  dropdownParent: a
              })
          }
          if ($("#dropzone-upload")[0] && $("#dropzone-upload").dropzone({
                  url: "/file/post",
                  addRemoveLinks: !0
              }), $(".datetime-picker")[0] && $(".datetime-picker").flatpickr({
                  enableTime: !0,
                  nextArrow: '<i class="zmdi zmdi-long-arrow-right" />',
                  prevArrow: '<i class="zmdi zmdi-long-arrow-left" />'
              }), $(".date-picker")[0] && $(".date-picker").flatpickr({
                  enableTime: !1,
                  nextArrow: '<i class="zmdi zmdi-long-arrow-right" />',
                  prevArrow: '<i class="zmdi zmdi-long-arrow-left" />'
              }), $(".time-picker")[0] && $(".time-picker").flatpickr({
                  noCalendar: !0,
                  enableTime: !0
              }), $("#input-slider")[0]) {
              var b = document.getElementById("input-slider");
              noUiSlider.create(b, {
                  start: [20],
                  connect: "lower",
                  range: {
                      min: 0,
                      max: 100
                  }
              }), b.noUiSlider.on("update", function(a, b) {
                  document.getElementById("input-slider-value").value = a[b]
              })
          }
          if ($("#input-slider-range")[0]) {
              var c = document.getElementById("input-slider-range"),
                  d = document.getElementById("input-slider-range-value-1"),
                  e = document.getElementById("input-slider-range-value-2"),
                  f = [d, e];
              noUiSlider.create(c, {
                  start: [20, 80],
                  connect: !0,
                  range: {
                      min: 0,
                      max: 100
                  }
              }), c.noUiSlider.on("update", function(a, b) {
                  f[b].value = a[b]
              })
          }
          if ($(".input-slider")[0])
              for (var g = document.getElementsByClassName("input-slider"), h = 0; h < g.length; h++) noUiSlider.create(g[h], {
                  start: [20],
                  connect: "lower",
                  range: {
                      min: 0,
                      max: 100
                  }
              });
          if ($(".color-picker")[0] && ($(".color-picker__value").colorpicker(), $("body").on("change", ".color-picker__value", function() {
                  $(this).closest(".color-picker").find(".color-picker__preview").css("backgroundColor", $(this).val())
              })), $(".wysiwyg-editor")[0] && $(".wysiwyg-editor").trumbowyg({
                  autogrow: !0
              }), $(".lightbox")[0] && $(".lightbox").lightGallery({
                  enableTouch: !0
              }), $('[data-toggle="popover"]')[0] && $('[data-toggle="popover"]').popover(), $('[data-toggle="tooltip"]')[0] && $('[data-toggle="tooltip"]').tooltip(), $(".widget-calendar__body")[0]) {
              $(".widget-calendar__body").fullCalendar({
                  contentHeight: "auto",
                  theme: !1,
                  buttonIcons: {
                      prev: " zmdi zmdi-long-arrow-left",
                      next: " zmdi zmdi-long-arrow-right"
                  },
                  header: {
                      right: "next",
                      center: "title, ",
                      left: "prev"
                  },
                  defaultDate: "2016-08-12",
                  editable: !0,
                  events: [{
                      title: "Dolor Pellentesque",
                      start: "2016-08-01"
                  }, {
                      title: "Purus Nibh",
                      start: "2016-08-07"
                  }, {
                      title: "Amet Condimentum",
                      start: "2016-08-09"
                  }, {
                      title: "Tellus",
                      start: "2016-08-12"
                  }, {
                      title: "Vestibulum",
                      start: "2016-08-18"
                  }, {
                      title: "Ipsum",
                      start: "2016-08-24"
                  }, {
                      title: "Fringilla Sit",
                      start: "2016-08-27"
                  }, {
                      title: "Amet Pharetra",
                      url: "http://google.com/",
                      start: "2016-08-30"
                  }]
              });
              var i = moment().format("YYYY"),
                  j = moment().format("dddd, MMM D");
              $(".widget-calendar__year").html(i), $(".widget-calendar__day").html(j)
          }
          if ($(".notes__body")[0]) {
              var k;
              $(".notes__body").each(function(a, b) {
                  k = $(this).prev().is(".notes__title") ? 4 : 6, $clamp(b, {
                      clamp: k
                  })
              })
          }
          $(".scrollbar-inner").scrollbar().scrollLock();
          var l = [{
                  name: "node1",
                  children: [{
                      name: "node1_1",
                      children: [{
                          name: "node1_1_1"
                      }, {
                          name: "node1_1_2"
                      }, {
                          name: "node1_1_3"
                      }]
                  }, {
                      name: "node1_2"
                  }, {
                      name: "node1_3"
                  }]
              }, {
                  name: "node2",
                  children: [{
                      name: "node2_1"
                  }, {
                      name: "node2_2"
                  }, {
                      name: "node2_3"
                  }]
              }, {
                  name: "node3",
                  children: [{
                      name: "node3_1"
                  }, {
                      name: "node3_2"
                  }, {
                      name: "node3_3"
                  }]
              }],
              m = [{
                  name: "node1",
                  children: [{
                      name: "node1_1"
                  }, {
                      name: "node1_2"
                  }, {
                      name: "node1_3"
                  }]
              }, {
                  name: "node2",
                  children: [{
                      name: "node2_1"
                  }, {
                      name: "node2_2"
                  }, {
                      name: "node2_3"
                  }]
              }],
              n = [{
                  label: "node1",
                  children: [{
                      name: '<a href="example1.html">node1_1</a>'
                  }, {
                      name: '<a href="example2.html">node1_2</a>'
                  }, '<a href="example3.html">Example </a>']
              }];
          $(".treeview")[0] && $(".treeview").tree({
              data: l,
              closedIcon: $('<i class="zmdi zmdi-plus"></i>'),
              openedIcon: $('<i class="zmdi zmdi-minus"></i>')
          }), $(".treeview-expanded")[0] && $(".treeview-expanded").tree({
              data: m,
              autoOpen: !0,
              closedIcon: $('<i class="zmdi zmdi-plus"></i>'),
              openedIcon: $('<i class="zmdi zmdi-minus"></i>')
          }), $(".treeview-drag")[0] && $(".treeview-drag").tree({
              data: m,
              dragAndDrop: !0,
              autoOpen: !0,
              closedIcon: $('<i class="zmdi zmdi-plus"></i>'),
              openedIcon: $('<i class="zmdi zmdi-minus"></i>')
          }), $(".treeview-drag")[0] && $(".treeview-drag").tree({
              data: m,
              dragAndDrop: !0,
              autoOpen: !0,
              closedIcon: $('<i class="zmdi zmdi-plus"></i>'),
              openedIcon: $('<i class="zmdi zmdi-minus"></i>')
          }), $(".treeview-escape")[0] && $(".treeview-escape").tree({
              data: n,
              autoEscape: !1,
              autoOpen: !0,
              closedIcon: $('<i class="zmdi zmdi-plus"></i>'),
              openedIcon: $('<i class="zmdi zmdi-minus"></i>')
          }), $(".rating")[0] && $(".rating").each(function() {
              var a = $(this).data("rating");
              $(this).rateYo({
                  rating: a,
                  normalFill: "rgba(255,255,255,0.3)",
                  ratedFill: "#ffc107"
              })
          }), $(".text-counter")[0] && $(".text-counter").each(function() {
              var a = $(this).data("min-length") || 0,
                  b = $(this).data("max-length");
              $(this).textcounter({
                  min: a,
                  max: b,
                  countDown: !0,
                  inputErrorClass: "is-invalid",
                  counterErrorClass: "text-orange"
              })
          })
      }), $(document).ready(function() {
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
