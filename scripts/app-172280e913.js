!function(){"use strict";angular.module("site",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ui.router","ui.bootstrap","toastr"])}(),function(){"use strict";function t(t,e){var n=this;n.message="Welcome"}t.$inject=["$timeout","toastr"],angular.module("site").controller("MainController",t)}(),function(){"use strict";function t(t){t.debug("runBlock end")}t.$inject=["$log"],angular.module("site").run(t)}(),function(){"use strict";function t(t,e){t.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),e.otherwise("/")}t.$inject=["$stateProvider","$urlRouterProvider"],angular.module("site").config(t)}(),function(){"use strict";angular.module("site").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function t(t,e){t.debugEnabled(!0),e.allowHtml=!0,e.timeOut=3e3,e.positionClass="toast-top-right",e.preventDuplicates=!0,e.progressBar=!0}t.$inject=["$logProvider","toastrConfig"],angular.module("site").config(t)}(),angular.module("site").run(["$templateCache",function(t){t.put("app/main/main.html",'<div class="container"><div class="jumbotron"><h2 class="text-primary"><i class="ion-flag"></i> Hari\'s Projects</h2><p></p><h4>Happy 2016, wishing you all a very prosperous and healthy year ahead!</h4><p>Coming soon, watch out for my projects here</p><<p></p></div><p class="text-muted">Site Generated by awsome <a href="https://github.com/Swiip/generator-gulp-angular">generator gulp angular</a> and powered by <strong>Github Pages <strong></strong></strong></p></div>')}]);
//# sourceMappingURL=../maps/scripts/app-172280e913.js.map
