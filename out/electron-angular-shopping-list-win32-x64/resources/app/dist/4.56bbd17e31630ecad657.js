(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Yj9t:function(t,n,e){"use strict";e.r(n),e.d(n,"AuthModule",(function(){return w}));var i=e("tyNb"),o=e("PCNd"),s=e("fXoL");let r=(()=>{class t{constructor(t){this.viewContainerRef=t}}return t.\u0275fac=function(n){return new(n||t)(s.Ib(s.P))},t.\u0275dir=s.Db({type:t,selectors:[["","appPlaceholder",""]]}),t})(),c=(()=>{class t{constructor(){this.closeEvent=new s.n}onClose(){this.closeEvent.emit()}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s.Cb({type:t,selectors:[["app-alert"]],inputs:{message:"message"},outputs:{closeEvent:"closeEvent"},decls:7,vars:1,consts:[[1,"backdrop"],[1,"alert-box"],[1,"alert-box-actions"],[1,"btn","btn-primary",3,"click"]],template:function(t,n){1&t&&(s.Jb(0,"div",0),s.Lb(1,"div",1),s.Lb(2,"p"),s.hc(3),s.Kb(),s.Lb(4,"div",2),s.Lb(5,"button",3),s.Sb("click",(function(){return n.onClose()})),s.hc(6,"Close"),s.Kb(),s.Kb(),s.Kb()),2&t&&(s.yb(3),s.ic(n.message))},styles:[".backdrop[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:100vw;background:rgba(0,0,0,.75);z-index:50}.alert-box[_ngcontent-%COMP%]{position:fixed;top:30vh;left:20vw;width:60vw;padding:16px;z-index:100;background:#fff;box-shadow:0 2px 8px rgba(0,0,0,.26)}.alert-box-actions[_ngcontent-%COMP%]{text-align:right}"]}),t})();var a=e("quSY"),b=e("/WaZ"),l=e("l7P3"),d=e("ofXK");let u=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s.Cb({type:t,selectors:[["app-loading-spinner"]],decls:2,vars:0,consts:[[1,"lds-circle"]],template:function(t,n){1&t&&(s.Lb(0,"div",0),s.Jb(1,"div"),s.Kb())},styles:[".lds-circle[_ngcontent-%COMP%]{display:inline-block;transform:translateZ(1px)}.lds-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;width:64px;height:64px;margin:8px;border-radius:50%;background:#c40c0c;animation:lds-circle 2.4s cubic-bezier(0,.2,.8,1) infinite}@keyframes lds-circle{0%,to{animation-timing-function:cubic-bezier(.5,0,1,.5)}0%{transform:rotateY(0deg)}50%{transform:rotateY(5turn);animation-timing-function:cubic-bezier(0,.5,.5,1)}to{transform:rotateY(10turn)}}"]}),t})();var p=e("3Pt+");function h(t,n){}function g(t,n){1&t&&(s.Lb(0,"div",5),s.Jb(1,"app-loading-spinner"),s.Kb())}function m(t,n){if(1&t){const t=s.Mb();s.Lb(0,"form",6,7),s.Sb("ngSubmit",(function(){s.dc(t);const n=s.bc(1);return s.Ub().onSubmit(n)})),s.Lb(2,"div",8),s.Lb(3,"label",9),s.hc(4,"E-Mail"),s.Kb(),s.Jb(5,"input",10),s.Kb(),s.Lb(6,"div",8),s.Lb(7,"label",11),s.hc(8,"Password"),s.Kb(),s.Jb(9,"input",12),s.Kb(),s.Lb(10,"div"),s.Lb(11,"button",13),s.hc(12),s.Kb(),s.hc(13," | "),s.Lb(14,"button",14),s.Sb("click",(function(){return s.dc(t),s.Ub().onSwitchMode()})),s.hc(15),s.Kb(),s.Kb(),s.Kb()}if(2&t){const t=s.bc(1),n=s.Ub();s.yb(11),s.Xb("disabled",!t.valid),s.yb(1),s.jc(" ",n.isLoginMode?"Login":"Sign Up"," "),s.yb(3),s.jc(" Swith to ",n.isLoginMode?"Sign Up":"Login"," ")}}let f=(()=>{class t{constructor(t,n){this.componentFactoryResolver=t,this.store=n,this.closeSub=new a.a,this.subscription=new a.a,this.isLoginMode=!0,this.isLoading=!1,this.error=null}ngOnInit(){this.subscription=this.store.select("auth").subscribe(t=>{this.isLoading=t.loading,this.error=t.authError,this.error&&this.showErrorAlert(this.error)})}ngOnDestroy(){this.closeSub&&this.closeSub.unsubscribe(),this.subscription&&this.subscription.unsubscribe()}onSwitchMode(){this.isLoginMode=!this.isLoginMode}onSubmit(t){if(!t.valid)return;const n=t.value.email,e=t.value.password;this.isLoading=!0,this.store.dispatch(this.isLoginMode?new b.k({email:n,password:e}):new b.n({email:n,password:e})),t.reset()}onHandlerError(){this.store.dispatch(new b.h)}showErrorAlert(t){const n=this.componentFactoryResolver.resolveComponentFactory(c),e=this.alertHost.viewContainerRef;e.clear();const i=e.createComponent(n);i.instance.message=t,this.closeSub=i.instance.closeEvent.subscribe(()=>{this.closeSub.unsubscribe(),e.clear()})}}return t.\u0275fac=function(n){return new(n||t)(s.Ib(s.j),s.Ib(l.h))},t.\u0275cmp=s.Cb({type:t,selectors:[["app-auth"]],viewQuery:function(t,n){var e;1&t&&s.lc(r,!0),2&t&&s.ac(e=s.Tb())&&(n.alertHost=e.first)},decls:5,vars:2,consts:[["appPlaceholder",""],[1,"row"],[1,"col-xs-12","col-md-6","col-md-offset-3"],["style","text-align: center",4,"ngIf"],[3,"ngSubmit",4,"ngIf"],[2,"text-align","center"],[3,"ngSubmit"],["authForm","ngForm"],[1,"form-group"],["for","email"],["type","email","id","emai","ngModel","","name","email","required","","email","",1,"form-control"],["for","password"],["type","password","id","password","ngModel","","name","password","required","","minlength","6",1,"form-control"],["type","submit",1,"btn","btn-primary",3,"disabled"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(t,n){1&t&&(s.gc(0,h,0,0,"ng-template",0),s.Lb(1,"div",1),s.Lb(2,"div",2),s.gc(3,g,2,0,"div",3),s.gc(4,m,16,3,"form",4),s.Kb(),s.Kb()),2&t&&(s.yb(3),s.Xb("ngIf",n.isLoading),s.yb(1),s.Xb("ngIf",!n.isLoading))},directives:[r,d.j,u,p.u,p.m,p.n,p.a,p.l,p.o,p.s,p.b,p.k],styles:[""]}),t})(),w=(()=>{class t{}return t.\u0275mod=s.Gb({type:t}),t.\u0275inj=s.Fb({factory:function(n){return new(n||t)},imports:[[p.j,o.a,i.i.forChild([{path:"",component:f}])]]}),t})()}}]);