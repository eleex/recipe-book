(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Yj9t:function(t,e,o){"use strict";o.r(e),o.d(e,"AuthModule",(function(){return J}));var n=o("3Pt+"),r=o("PCNd"),i=o("fXoL");let s=(()=>{class t{constructor(){this.closeMessage=new i.n}onClose(){this.closeMessage.emit()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Bb({type:t,selectors:[["app-alert"]],inputs:{message:"message"},outputs:{closeMessage:"closeMessage"},decls:7,vars:1,consts:[[1,"backdrop",3,"click"],[1,"alert-box"],[1,"alert-box-actions"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(t,e){1&t&&(i.Kb(0,"div",0),i.Rb("click",(function(){return e.onClose()})),i.Jb(),i.Kb(1,"div",1),i.Kb(2,"p"),i.dc(3),i.Jb(),i.Kb(4,"div",2),i.Kb(5,"button",3),i.Rb("click",(function(){return e.onClose()})),i.dc(6," Close "),i.Jb(),i.Jb(),i.Jb()),2&t&&(i.xb(3),i.ec(e.message))},styles:[".backdrop[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,.75);z-index:50}.alert-box[_ngcontent-%COMP%]{position:fixed;top:30vh;left:25vw;width:50vw;padding:16px;z-index:100;background:#fff;box-shadow:0 2px 8px rgba(0,0,0,.26)}.alert-box-actions[_ngcontent-%COMP%]{text-align:right}"]}),t})(),a=(()=>{class t{constructor(t){this.viewContainerRef=t}}return t.\u0275fac=function(e){return new(e||t)(i.Hb(i.O))},t.\u0275dir=i.Cb({type:t,selectors:[["","appPlaceholder",""]]}),t})();var c=o("qXBG"),b=o("tyNb"),u=o("ofXK");let d=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Bb({type:t,selectors:[["app-loading-spinner"]],decls:1,vars:0,consts:[[1,"lds-dual-ring"]],template:function(t,e){1&t&&i.Ib(0,"div",0)},styles:['.lds-dual-ring[_ngcontent-%COMP%]{display:block;margin:50px auto;width:80px;height:80px}.lds-dual-ring[_ngcontent-%COMP%]:after{content:" ";display:block;width:64px;height:64px;margin:8px;border-radius:50%;border-color:#3866ff transparent;border-style:solid;border-width:6px;animation:lds-dual-ring 1.2s linear infinite}@keyframes lds-dual-ring{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}']}),t})();function l(t,e){}function p(t,e){1&t&&(i.Kb(0,"div"),i.Ib(1,"app-loading-spinner"),i.Jb())}function g(t,e){1&t&&(i.Kb(0,"span"),i.dc(1,"Email is required!"),i.Jb())}function h(t,e){1&t&&(i.Kb(0,"span"),i.dc(1,"Incorrect email!"),i.Jb())}function m(t,e){if(1&t&&(i.Kb(0,"div",14),i.cc(1,g,2,0,"span",3),i.cc(2,h,2,0,"span",3),i.Jb()),2&t){const t=i.Tb(2);i.xb(1),i.Ub("ngIf",t.authForm.get("email").errors.required),i.xb(1),i.Ub("ngIf",t.authForm.get("email").errors.email)}}function f(t,e){1&t&&(i.Kb(0,"span"),i.dc(1,"Password is required!"),i.Jb())}function w(t,e){if(1&t&&(i.Kb(0,"span"),i.dc(1),i.Jb()),2&t){const t=i.Tb(3);i.xb(1),i.fc("Password should be minimum ",t.authForm.get("password").errors.minlength.requiredLength," characters!")}}function v(t,e){if(1&t&&(i.Kb(0,"div",14),i.cc(1,f,2,0,"span",3),i.cc(2,w,2,1,"span",3),i.Jb()),2&t){const t=i.Tb(2);i.xb(1),i.Ub("ngIf",t.authForm.get("password").errors.required),i.xb(1),i.Ub("ngIf",t.authForm.get("password").errors.minlength)}}function x(t,e){if(1&t){const t=i.Lb();i.Kb(0,"form",5),i.Rb("ngSubmit",(function(){return i.Zb(t),i.Tb().onSubmit()})),i.Kb(1,"div",6),i.Kb(2,"label",7),i.dc(3,"Email"),i.Jb(),i.Ib(4,"input",8),i.cc(5,m,3,2,"div",9),i.Jb(),i.Kb(6,"div",6),i.Kb(7,"label",10),i.dc(8,"Password"),i.Jb(),i.Ib(9,"input",11),i.cc(10,v,3,2,"div",9),i.Jb(),i.Kb(11,"div"),i.Kb(12,"button",12),i.dc(13),i.Jb(),i.dc(14," | "),i.Kb(15,"button",13),i.Rb("click",(function(){return i.Zb(t),i.Tb().onSwitchMode()})),i.dc(16),i.Jb(),i.Jb(),i.Jb()}if(2&t){const t=i.Tb();i.Ub("formGroup",t.authForm),i.xb(5),i.Ub("ngIf",t.authForm.get("email").errors&&t.authForm.get("email").touched),i.xb(5),i.Ub("ngIf",t.authForm.get("password").errors&&t.authForm.get("password").touched),i.xb(2),i.Ub("disabled",!t.authForm.valid),i.xb(1),i.fc(" ",t.isLoginMode?"Login":"Sign Up"," "),i.xb(3),i.fc(" Switch to ",t.isLoginMode?"Sign Up":"Login"," ")}}let y=(()=>{class t{constructor(t,e,o){this.authService=t,this.router=e,this.componentFactoryResolver=o,this.isLoginMode=!0,this.isLoading=!1,this.error=null}ngOnInit(){this.authForm=new n.f({email:new n.d(null,[n.r.required,n.r.email]),password:new n.d(null,[n.r.required,n.r.minLength(6)])})}ngOnDestroy(){this.closeSub&&this.closeSub.unsubscribe()}onSwitchMode(){this.isLoginMode=!this.isLoginMode}onSubmit(){if(!this.authForm.valid)return;let t;this.isLoading=!0,t=this.isLoginMode?this.authService.login(this.authForm.value):this.authService.signup(this.authForm.value),t.subscribe(t=>{this.isLoading=!1,this.router.navigate(["/recipes"])},t=>{this.error=t,this.showErrorAlert(t),this.isLoading=!1}),this.authForm.reset()}showErrorAlert(t){const e=this.componentFactoryResolver.resolveComponentFactory(s),o=this.alertHost.viewContainerRef;o.clear();const n=o.createComponent(e);n.instance.message=t,this.closeSub=n.instance.closeMessage.subscribe(()=>{this.closeSub.unsubscribe(),o.clear()})}}return t.\u0275fac=function(e){return new(e||t)(i.Hb(c.a),i.Hb(b.c),i.Hb(i.j))},t.\u0275cmp=i.Bb({type:t,selectors:[["app-auth"]],viewQuery:function(t,e){var o;1&t&&i.hc(a,!0),2&t&&i.Wb(o=i.Sb())&&(e.alertHost=o.first)},decls:5,vars:2,consts:[["appPlaceholder",""],[1,"row"],[1,"col-xs-12","col-md-6","col-md-offset-3"],[4,"ngIf"],[3,"formGroup","ngSubmit",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","email"],["type","email","id","email","formControlName","email",1,"form-control"],["class","text-danger auth-form--error",4,"ngIf"],["for","password"],["type","password","id","password","formControlName","password",1,"form-control"],["type","submit",1,"btn","btn-primary",3,"disabled"],["type","button",1,"btn","btn-primary",3,"click"],[1,"text-danger","auth-form--error"]],template:function(t,e){1&t&&(i.cc(0,l,0,0,"ng-template",0),i.Kb(1,"div",1),i.Kb(2,"div",2),i.cc(3,p,2,0,"div",3),i.cc(4,x,17,6,"form",4),i.Jb(),i.Jb()),2&t&&(i.xb(3),i.Ub("ngIf",e.isLoading),i.xb(1),i.Ub("ngIf",!e.isLoading))},directives:[a,u.i,d,n.s,n.k,n.g,n.a,n.j,n.e],styles:[".form-group[_ngcontent-%COMP%]{margin-bottom:25px}input.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid #a94442}.auth-form--error[_ngcontent-%COMP%]{position:absolute}"]}),t})(),J=(()=>{class t{}return t.\u0275mod=i.Fb({type:t}),t.\u0275inj=i.Eb({factory:function(e){return new(e||t)},imports:[[r.a,n.p,b.f.forChild([{path:"",component:y}])]]}),t})()}}]);