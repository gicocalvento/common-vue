<template>
    <div>
        <section class="content">
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

                <div data-columns="3">
                    <div class="column size-1of3">
                        <div class="card widget-past-days">
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
                        <div class="card widget-pie">
                            <div class="col-6 col-sm-4 col-md-6 col-lg-4 widget-pie__item">
                                <div class="easy-pie-chart" data-percent="50" data-size="80" data-track-color="rgba(0,0,0,0.5)" data-bar-color="#fff">
                                    <span class="easy-pie-chart__value">92</span>
                                </div>
                                <div class="widget-pie__title">Email<br> Scheduled</div>
                            </div>

                            <div class="col-6 col-sm-4 col-md-6 col-lg-4 widget-pie__item">
                                <div class="easy-pie-chart" data-percent="11" data-size="80" data-track-color="rgba(0,0,0,0.35)" data-bar-color="#fff">
                                    <span class="easy-pie-chart__value">11</span>
                                </div>
                                <div class="widget-pie__title">Email<br> Bounced</div>
                            </div>

                            <div class="col-6 col-sm-4 col-md-6 col-lg-4 widget-pie__item">
                                <div class="easy-pie-chart" data-percent="52" data-size="80" data-track-color="rgba(0,0,0,0.35)" data-bar-color="#fff">
                                    <span class="easy-pie-chart__value">52</span>
                                </div>
                                <div class="widget-pie__title">Email<br> Opened</div>
                            </div>

                            <div class="col-6 col-sm-4 col-md-6 col-lg-4 widget-pie__item">
                                <div class="easy-pie-chart" data-percent="44" data-size="80" data-track-color="rgba(0,0,0,0.35)" data-bar-color="#fff">
                                    <span class="easy-pie-chart__value">44</span>
                                </div>
                                <div class="widget-pie__title">Storage<br>Remaining</div>
                            </div>

                            <div class="col-6 col-sm-4 col-md-6 col-lg-4 widget-pie__item">
                                <div class="easy-pie-chart" data-percent="78" data-size="80" data-track-color="rgba(0,0,0,0.35)" data-bar-color="#fff">
                                    <span class="easy-pie-chart__value">78</span>
                                </div>
                                <div class="widget-pie__title">Web Page<br> Views</div>
                            </div>

                            <div class="col-6 col-sm-4 col-md-6 col-lg-4 widget-pie__item">
                                <div class="easy-pie-chart" data-percent="32" data-size="80" data-track-color="rgba(0,0,0,0.35)" data-bar-color="#fff">
                                    <span class="easy-pie-chart__value">32</span>
                                </div>
                                <div class="widget-pie__title">Server<br> Processing</div>
                            </div>
                        </div>
                    </div>
                    <div class="column size-1of3">
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
                    
                    <div class="column size-1of3">
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
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Server Process</h4>
                                <h6 class="card-subtitle">Maecenas faucibus mollis interdum porttitor</h6>

                                <div class="flot-chart flot-dynamic"></div>
                                <div class="flot-chart-legends flot-chart-legends--dynamic"></div>
                            </div>
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
            </section>
    </div>
</template>

<script>
export default {
    name: "BasicLayout",
    mounted(){
        var curvedLineChartData = [
        {
            label: '2016',
            color: 'rgba(255,255,255,0.08)',
            lines: {
                show: true,
                lineWidth: 0,
                fill: 1,
                fillColor: {
                    colors: ['rgba(255,255,255,0.0)', 'rgba(255,255,255,0.1)']
                }
            },
            data: [[10, 90], [20, 40], [30, 80], [40, 20], [50, 90], [60, 20], [70, 60]],

        },
        {
            label: '2017',
            color: 'rgba(255,255,255,0.8)',
            lines: {
                show: true,
                lineWidth: 0.1,
                fill: 1,
                fillColor: {
                    colors: ['rgba(255,255,255,0.01)', '#fff']
                }
            },
            data: [[10, 80], [20, 30], [30, 70], [40, 10], [50, 80], [60, 10], [70, 50]]
        }
    ];


    // Past Days
    var pastDaysChartData = [{
        label: 'Data',
        stack: true,
        lines: {
            show: true,
            lineWidth: 0,
            fill: 1,
            fillColor: {
                colors: ['rgba(255,255,255,0)', 'rgba(255,255,255,0.3)']
            }
        },
        data: [[10, 90], [20, 40], [30, 80], [40, 20], [50, 90], [60, 20], [70, 60]]
    }];


    // Stats Charts
    var stats1ChartData = [{
        label: 'Data',
        stack: true,
        color: '#fff',
        lines: {
            show: true,
            fill: 1,
            fillColor: {
                colors: ['rgba(255,255,255,0)', 'rgba(255,255,255,0.35)']
            }
        },
        data: [[10, 100], [20, 10], [30, 90], [40, 20], [50, 60], [60, 20], [70, 60]]
    }];

    var stats2ChartData = [{
        label: 'Data',
        stack: true,
        color: '#fff',
        lines: {
            show: true,
            fill: 1,
            fillColor: {
                colors: ['rgba(255,255,255,0)', 'rgba(255,255,255,0.35)']
            }
        },
        data: [[10, 0], [20, 30], [30, 30], [40, 90], [50, 0], [60, 20], [70, 60]]
    }];

    var stats3ChartData = [{
        label: 'Data',
        stack: true,
        color: '#fff',
        lines: {
            show: true,
            fill: 1,
            fillColor: {
                colors: ['rgba(255,255,255,0)', 'rgba(255,255,255,0.35)']
            }
        },
        data: [[10, 100], [20, 30], [30, 50], [40, 30], [50, 20], [60, 10], [70, 100]]
    }];

    var stats4ChartData = [{
        label: 'Data',
        stack: true,
        color: '#fff',
        lines: {
            show: true,
            fill: 1,
            fillColor: {
                colors: ['rgba(255,255,255,0)', 'rgba(255,255,255,0.35)']
            }
        },
        data: [[10, 45], [20, 10], [30, 32], [40, 12], [50, 5], [60, 6], [70, 15]]
    }];


    // Chart Options

    // Main
    var curvedLineChartOptions = {
        series: {
            shadowSize: 0,
            curvedLines: {
                apply: true,
                active: true,
                monotonicFit: true
            },
            points: {
                show: false
            }
        },
        grid: {
            borderWidth: 1,
            borderColor: 'rgba(255,255,255,0.1)',
            show: true,
            hoverable: true,
            clickable: true
        },
        xaxis: {
            tickColor: 'rgba(255,255,255,0.1)',
            tickDecimals: 0,
            font: {
                lineHeight: 13,
                style: 'normal',
                color: 'rgba(255,255,255,0.75)',
                size: 11
            }
        },
        yaxis: {
            tickColor: 'rgba(255,255,255,0.1)',
            font: {
                lineHeight: 13,
                style: 'normal',
                color: 'rgba(255,255,255,0.75)',
                size: 11
            },
            min: +5
        },
        legend:{
            container: '.flot-chart-legends--curved',
            backgroundOpacity: 0.5,
            noColumns: 0,
            lineWidth: 0,
            labelBoxBorderColor: 'rgba(255,255,255,0)'
        }
    };


    // Past days
    var pastDaysChartOptions = {
        series: {
            shadowSize: 0,
            curvedLines: {
                apply: true,
                active: true,
                monotonicFit: true
            },
            lines: {
                show: false,
                lineWidth: 0
            }
        },
        grid: {
            borderWidth: 0,
            labelMargin:10,
            hoverable: true,
            clickable: true,
            mouseActiveRadius:6

        },
        xaxis: {
            tickDecimals: 0,
            ticks: false
        },

        yaxis: {
            tickDecimals: 0,
            ticks: false
        },

        legend: {
            show: false
        }
    };

    // Chart Data
    var lineChartData = [
        {
            label: '2015',
            data: [[1,60], [2,30], [3,50], [4,100], [5,10], [6,90], [7,85]],
            color: '#fff'
        },
        {
            label: '2016',
            data: [[1,20], [2,90], [3,60], [4,40], [5,100], [6,25], [7,65]],
            color: 'rgba(255,255,255,0.5)'
        },
        {
            label: '2017',
            data: [[1,100], [2,20], [3,60], [4,90], [5,80], [6,10], [7,5]],
            color: 'rgba(255,255,255,0.15)'
        }
    ];

    // Chart Options
    var lineChartOptions = {
        series: {
            lines: {
                show: true,
                barWidth: 0.05,
                fill: 0
            }
        },
        shadowSize: 0.1,
        grid : {
            borderWidth: 1,
            borderColor: 'rgba(255,255,255,0.1)',
            show : true,
            hoverable : true,
            clickable : true
        },
        yaxis: {
            tickColor: 'rgba(255,255,255,0.1)',
            tickDecimals: 0,
            font: {
                lineHeight: 13,
                style: 'normal',
                color: 'rgba(255,255,255,0.75)',
                size: 11
            },
            shadowSize: 0
        },

        xaxis: {
            tickColor: 'rgba(255,255,255,0.1)',
            tickDecimals: 0,
            font: {
                lineHeight: 13,
                style: 'normal',
                color: 'rgba(255,255,255,0.75)',
                size: 11
            },
            shadowSize: 0
        },
        legend:{
            container: '.flot-chart-legends--line',
            backgroundOpacity: 0.5,
            noColumns: 0,
            lineWidth: 0,
            labelBoxBorderColor: 'rgba(255,255,255,0)'
        }
    };

    // Create chart
    if ($('.flot-line')[0]) {
        $.plot($('.flot-line'), lineChartData, lineChartOptions);
    }


    // Stats Charts
    var statsChartOptions = {
        series: {
            shadowSize: 0,
            curvedLines: {
                apply: true,
                active: true,
                monotonicFit: true
            },
            lines: {
                show: false,
                lineWidth: 0
            }
        },
        grid: {
            borderWidth: 0,
            labelMargin:10,
            hoverable: true,
            clickable: true,
            mouseActiveRadius:6

        },
        xaxis: {
            tickDecimals: 0,
            ticks: false
        },

        yaxis: {
            tickDecimals: 0,
            ticks: false
        },

        legend: {
            show: false
        }
    };

    // Tooltips for Flot Charts
    if ($('.flot-chart')[0]) {
        $('.flot-chart').bind('plothover', function (event, pos, item) {
            if (item) {
                var x = item.datapoint[0].toFixed(2),
                    y = item.datapoint[1].toFixed(2);
                $('.flot-tooltip').html(item.series.label + ' of ' + x + ' = ' + y).css({top: item.pageY+5, left: item.pageX+5}).show();
            }
            else {
                $('.flot-tooltip').hide();
            }
        });

        $('<div class="flot-tooltip"></div>').appendTo('body');
    }


    // Create charts

    /*---------------------------------------
        Easy Pie Charts
    ----------------------------------------*/
    if($('.easy-pie-chart')[0]) {
        $('.easy-pie-chart').each(function () {
            var value = $(this).data('value');
            var size = $(this).data('size');
            var trackColor = $(this).data('track-color');
            var barColor = $(this).data('bar-color');

            $(this).find('.easy-pie-chart__value').css({
                lineHeight: (size - 2)+'px',
                fontSize: (size/5)+'px',
                color: barColor
            });

            $(this).easyPieChart ({
                easing: 'easeOutBounce',
                barColor: barColor,
                trackColor: trackColor,
                scaleColor: 'rgba(255,255,255,0.15)',
                lineCap: 'round',
                lineWidth: 1,
                size: size,
                animate: 3000,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            })
        });
    }

    // Main
    if ($('.flot-curved-line')[0]) {
        $.plot($('.flot-curved-line'), curvedLineChartData, curvedLineChartOptions);
    }

    // Past Days
    if ($('.flot-past-days')[0]) {
        $.plot($('.flot-past-days'), pastDaysChartData, pastDaysChartOptions);
    }

    // Stats Charts
    if ($('.stats')[0]) {
        $.plot($('.stats-chart-1'), stats1ChartData, statsChartOptions);
        $.plot($('.stats-chart-2'), stats2ChartData, statsChartOptions);
        $.plot($('.stats-chart-3'), stats3ChartData, statsChartOptions);
        $.plot($('.stats-chart-4'), stats4ChartData, statsChartOptions);
    }


      if($('.peity-bar')[0]) {
        $('.peity-bar').each(function() {
            var peityWidth = ($(this).attr('data-width')) ? $(this).attr('data-width') : 65;

            $(this).peity('bar', {
                height: 36,
                fill: ['rgba(255,255,255,0.85)'],
                width: peityWidth,
                padding: 0.2
            });
        });
      }

      // Realtime visitors widget map
    if($('.map-visitors')[0]) {
        $('.map-visitors').vectorMap({
            map: 'world_en',
            backgroundColor: 'rgba(0,0,0,0)',
            color: 'rgba(255,255,255,0.2)',
            borderColor: 'rgba(255,255,255,0.2)',
            hoverOpacity: 1,
            selectedColor: 'rgba(255,255,255,0.9)',
            enableZoom: false,
            showTooltip: true,
            normalizeFunction: 'polynomial',
            selectedRegions: ['US', 'EN', 'NZ', 'CN', 'JP', 'SL', 'BR', 'AU', 'EG', 'BA'],
            onRegionClick: function (event) {
                event.preventDefault();
            }
        });
    }

    // Chart Data
    var data = [];
    var totalPoints = 300;

    function dynamicChartData() {
        if (data.length > 0)
            data = data.slice(1);

        while (data.length < totalPoints) {

            var prev = data.length > 0 ? data[data.length - 1] : 50,
                y = prev + Math.random() * 10 - 5;
            if (y < 0) {
                y = 0;
            } else if (y > 90) {
                y = 90;
            }

            data.push(y);
        }

        var res = [];
        for (var i = 0; i < data.length; ++i) {
            res.push([i, data[i]])
        }

        return res;
    }

    // Chart Options
    var dynamicChartOptions = {
        series: {
            label: "Server Process Data",
            lines: {
                show: true,
                lineWidth: 0.2,
                fill: 1,
                fillColor: {
                    colors: ['rgba(255,255,255,0.03)', '#fff']
                }
            },
            color: '#fff',
            shadowSize: 0
        },
        yaxis: {
            min: 0,
            max: 100,
            tickColor: 'rgba(255,255,255,0.1)',
            font: {
                lineHeight: 13,
                style: 'normal',
                color: 'rgba(255,255,255,0.75)',
                size: 11
            },
            shadowSize: 0

        },
        xaxis: {
            tickColor: 'rgba(255,255,255,0.1)',
            show: true,
            font: {
                lineHeight: 13,
                style: 'normal',
                color: 'rgba(255,255,255,0.75)',
                size: 11
            },
            shadowSize: 0,
            min: 0,
            max: 250
        },
        grid: {
            borderWidth: 1,
            borderColor: 'rgba(255,255,255,0.1)',
            labelMargin:10,
            hoverable: true,
            clickable: true,
            mouseActiveRadius:6
        },
        legend:{
            container: '.flot-chart-legends--dynamic',
            backgroundOpacity: 0.5,
            noColumns: 0,
            lineWidth: 0,
            labelBoxBorderColor: 'rgba(255,255,255,0)'
        }
    };

    // Create Chart
    if ($('.flot-dynamic')[0]) {
        var plot = $.plot('.flot-dynamic', [ dynamicChartData() ], dynamicChartOptions);
    }

    // Update function
    var updateInterval = 30;
    function chartUpdate() {
        plot.setData([dynamicChartData()]);
        // Since the axes don't change, we don't need to call plot.setupGrid()

        plot.draw();
        setTimeout(chartUpdate, updateInterval);
    }
    chartUpdate();
    
    }
}
</script>
