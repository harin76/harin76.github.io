!function(){"use strict";angular.module("site",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ui.router","ui.bootstrap","toastr"])}(),function(){"use strict";function t(t,n,o){var i=this;i.message="Welcome",i.contributions=o.all(),i.showToastr=function(){n.info("Watchout!"),i.classAnimation=""}}t.$inject=["$timeout","toastr","ContributionsService"],angular.module("site").controller("MainController",t)}(),function(){"use strict";function t(){function t(){return n}var n=[{name:"koa-mongo-api",url:"https://github.com/harin76/koa-mongo-api",description:"A boilerplate for writing restful API's in koajs and mongodb"}],o={all:t};return o}angular.module("site").factory("ContributionsService",t)}(),function(){"use strict";function t(t){t.debug("runBlock end")}t.$inject=["$log"],angular.module("site").run(t)}(),function(){"use strict";function t(t,n){t.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),n.otherwise("/")}t.$inject=["$stateProvider","$urlRouterProvider"],angular.module("site").config(t)}(),function(){"use strict";angular.module("site").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function t(t,n){t.debugEnabled(!0),n.allowHtml=!0,n.timeOut=3e3,n.positionClass="toast-top-right",n.preventDuplicates=!0,n.progressBar=!0}t.$inject=["$logProvider","toastrConfig"],angular.module("site").config(t)}(),angular.module("site").run(["$templateCache",function(t){t.put("app/main/main.html",'<div class="container"><div class="jumbotron" ng-repeat="contrib in main.contributions"><h2 class="text-primary"><i class="ion-flag"></i> {{contrib.name}}</h2><p></p><p>{{contrib.description}}</p><a href="{{contrib.url}}"><i class="ion-social-github"></i> {{contrib.url}}</a><p></p></div><p class="text-muted">Site Generated by awesome <a href="https://github.com/Swiip/generator-gulp-angular">generator gulp angular</a> and powered by <strong>Github Pages <strong></strong></strong></p></div>')}]);
//# sourceMappingURL=../maps/scripts/app-398fcf1ae7.js.map
