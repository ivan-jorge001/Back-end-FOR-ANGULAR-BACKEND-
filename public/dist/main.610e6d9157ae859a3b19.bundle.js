webpackJsonp([1],{"+h1B":function(n,l,u){"use strict";var t=u("/oeL"),e=u("aR8+"),o=u("wQAS"),r=u("bKTU"),i=u("DSaR"),c=u("q4dy"),a=u("qbdv"),s=u("fc+i"),f=u("bm2B"),d=u("CPp0"),_=u("BkNc"),p=u("P95+"),h=u("feZN"),v=u("1b5j");u.d(l,"a",function(){return m});var m=t.b(e.a,[o.a],function(n){return t.c([t.d(512,t.e,t.f,[[8,[r.a,i.a,c.a]],[3,t.e],t.g]),t.d(5120,t.h,t.i,[[3,t.h]]),t.d(4608,a.a,a.b,[t.h]),t.d(5120,t.j,t.k,[]),t.d(5120,t.l,t.m,[]),t.d(5120,t.n,t.o,[]),t.d(4608,s.b,s.c,[s.d]),t.d(6144,t.p,null,[s.b]),t.d(4608,s.e,s.f,[]),t.d(5120,s.g,function(n,l,u,t){return[new s.h(n),new s.i(l),new s.j(u,t)]},[s.d,s.d,s.d,s.e]),t.d(4608,s.k,s.k,[s.g,t.q]),t.d(135680,s.l,s.l,[s.d]),t.d(4608,s.m,s.m,[s.k,s.l]),t.d(6144,t.r,null,[s.m]),t.d(6144,s.n,null,[s.l]),t.d(4608,t.s,t.s,[t.q]),t.d(4608,s.o,s.o,[s.d]),t.d(4608,s.p,s.p,[s.d]),t.d(4608,f.a,f.a,[]),t.d(4608,d.a,d.a,[]),t.d(4608,d.b,d.c,[]),t.d(5120,d.d,d.e,[]),t.d(4608,d.f,d.f,[d.a,d.b,d.d]),t.d(4608,d.g,d.h,[]),t.d(5120,d.i,d.j,[d.f,d.g]),t.d(5120,_.a,_.b,[_.c]),t.d(4608,_.d,_.d,[]),t.d(6144,_.e,null,[_.d]),t.d(135680,_.f,_.f,[_.c,t.t,t.u,t.v,_.e]),t.d(4608,_.g,_.g,[]),t.d(5120,_.h,_.i,[_.j]),t.d(5120,t.w,function(n){return[n]},[_.h]),t.d(4608,p.a,p.a,[d.i]),t.d(512,a.c,a.c,[]),t.d(1024,t.x,s.q,[]),t.d(1024,t.y,function(){return[_.k()]},[]),t.d(512,_.j,_.j,[t.v]),t.d(1024,t.z,function(n,l,u){return[s.r(n,l),_.l(u)]},[[2,s.s],[2,t.y],_.j]),t.d(512,t.A,t.A,[[2,t.z]]),t.d(131584,t.B,t.B,[t.q,t.C,t.v,t.x,t.e,t.A]),t.d(2048,t.D,null,[t.B]),t.d(512,t.E,t.E,[t.D]),t.d(512,s.t,s.t,[[3,s.t]]),t.d(512,f.b,f.b,[]),t.d(512,f.c,f.c,[]),t.d(512,d.k,d.k,[]),t.d(1024,_.m,_.n,[[3,_.c]]),t.d(512,_.o,_.p,[]),t.d(512,_.q,_.q,[]),t.d(256,_.r,{},[]),t.d(1024,a.d,_.s,[a.e,[2,a.f],_.r]),t.d(512,a.g,a.g,[a.d]),t.d(512,t.u,t.u,[]),t.d(512,t.t,t.F,[t.u,[2,t.G]]),t.d(1024,_.t,function(){return[[{path:"",component:h.a},{path:"phone/:id",component:v.a},{path:"**",redirectTo:""}]]},[]),t.d(1024,_.c,_.u,[t.D,_.o,_.q,a.g,t.v,t.t,t.u,_.t,_.r,[2,_.v],[2,_.w]]),t.d(512,_.x,_.x,[[2,_.m],[2,_.c]]),t.d(512,e.a,e.a,[])])})},0:function(n,l,u){n.exports=u("cDNt")},"1b5j":function(n,l,u){"use strict";var t=u("BkNc"),e=u("P95+");u.d(l,"a",function(){return o});var o=function(){function n(n,l,u){this.route=n,this.phoneService=l,this.router=u}return n.prototype.ngOnInit=function(){var n=this;this.route.params.subscribe(function(l){console.log(l.id),n.getPhoneDetails(l.id)})},n.prototype.getPhoneDetails=function(n){var l=this;return this.phoneService.get(n).subscribe(function(n){l.phone=n,console.log(l.phone)})},n.prototype.deletePhone=function(){var n=this;window.confirm("are you sure")&&this.phoneService.remove(this.phone._id).subscribe(function(){n.router.navigate([""])})},n.ctorParameters=function(){return[{type:t.a},{type:e.a},{type:t.c}]},n}()},DSaR:function(n,l,u){"use strict";function t(n){return a._25(0,[(n()(),a._27(0,null,null,1,"li",[],null,null,null,null,null)),(n()(),a._26(null,[" "," "]))],null,function(n,l){n(l,1,0,l.context.$implicit)})}function e(n){return a._25(0,[(n()(),a._27(0,null,null,10,"div",[],null,null,null,null,null)),(n()(),a._26(null,["\n          "])),(n()(),a._27(0,null,null,1,"h4",[],null,null,null,null,null)),(n()(),a._26(null,[" Features "])),(n()(),a._26(null,["\n          "])),(n()(),a._27(0,null,null,4,"ul",[],null,null,null,null,null)),(n()(),a._26(null,["\n            "])),(n()(),a._30(16777216,null,null,1,null,t)),a._28(802816,null,0,s.l,[a.W,a._7,a.l],{ngForOf:[0,"ngForOf"]},null),(n()(),a._26(null,["\n          "])),(n()(),a._26(null,["\n        "]))],function(n,l){n(l,8,0,l.component.phone.specs)},null)}function o(n){return a._25(0,[(n()(),a._27(0,null,null,21,"div",[],null,null,null,null,null)),(n()(),a._26(null,["\n      "])),(n()(),a._27(0,null,null,3,"div",[["class","phone-thumbnail"]],null,null,null,null,null)),(n()(),a._26(null,["\n        "])),(n()(),a._27(0,null,null,0,"img",[["height","300"]],[[8,"src",4]],null,null,null,null)),(n()(),a._26(null,["\n      "])),(n()(),a._26(null,["\n"])),(n()(),a._27(0,null,null,1,"button",[],null,[[null,"click"]],function(n,l,u){var t=!0,e=n.component;if("click"===l){t=!1!==e.deletePhone()&&t}return t},null,null)),(n()(),a._26(null,[" Delete "])),(n()(),a._26(null,["\n      "])),(n()(),a._27(0,null,null,10,"div",[["class","phone-info"]],null,null,null,null,null)),(n()(),a._26(null,["\n        "])),(n()(),a._27(0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),a._26(null,[" "," "])),(n()(),a._26(null,["\n        "])),(n()(),a._27(0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),a._26(null,[" "," "])),(n()(),a._26(null,["\n\n        "])),(n()(),a._30(16777216,null,null,1,null,e)),a._28(16384,null,0,s.m,[a.W,a._7],{ngIf:[0,"ngIf"]},null),(n()(),a._26(null,["\n      "])),(n()(),a._26(null,["\n    "]))],function(n,l){n(l,19,0,l.component.phone.specs.length)},function(n,l){var u=l.component;n(l,4,0,u.phone.image),n(l,13,0,u.phone.name),n(l,16,0,u.phone.brand)})}function r(n){return a._25(0,[(n()(),a._27(0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),a._26(null,[" Phone details "])),(n()(),a._26(null,["\n    "])),(n()(),a._27(0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,u){var t=!0;if("click"===l){t=!1!==a._31(n,4).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t}return t},null,null)),a._28(671744,null,0,f.z,[f.c,f.a,s.d],{routerLink:[0,"routerLink"]},null),a._32(1),(n()(),a._26(null,[" Back to list "])),(n()(),a._26(null,["\n\n    "])),(n()(),a._30(16777216,null,null,1,null,o)),a._28(16384,null,0,s.m,[a.W,a._7],{ngIf:[0,"ngIf"]},null),(n()(),a._26(null,["\n"]))],function(n,l){var u=l.component;n(l,4,0,n(l,5,0,"")),n(l,9,0,u.phone)},function(n,l){n(l,3,0,a._31(l,4).target,a._31(l,4).href)})}function i(n){return a._25(0,[(n()(),a._27(0,null,null,1,"app-phone-details",[],null,null,null,r,h)),a._28(114688,null,0,d.a,[f.a,_.a,f.c],null,null)],function(n,l){n(l,1,0)},null)}var c=u("Qf3m"),a=u("/oeL"),s=u("qbdv"),f=u("BkNc"),d=u("1b5j"),_=u("P95+");u.d(l,"a",function(){return v});var p=[c.a],h=a._24({encapsulation:0,styles:p,data:{}}),v=a._29("app-phone-details",d.a,i,{},{},[])},NhKt:function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t=[""]},"P95+":function(n,l,u){"use strict";var t=u("CPp0"),e=u("5v8a"),o=(u.n(e),u("82j9"));u.n(o);u.d(l,"a",function(){return r});var r=function(){function n(n){this.http=n,this.BASE_URL="http://localhost:3000"}return n.prototype.getList=function(){return console.log(this.http.get(this.BASE_URL+"/phones")),this.http.get(this.BASE_URL+"/phones").map(function(n){return n.json()})},n.prototype.get=function(n){return this.http.get(this.BASE_URL+"/phone/"+n).map(function(n){return n.json()})},n.prototype.edit=function(n){return this.http.put(this.BASE_URL+"/phones/"+n.id,n).map(function(n){return n.json()})},n.prototype.remove=function(n){return this.http.delete(this.BASE_URL+"/phones/"+n).map(function(n){return n.json()})},n.ctorParameters=function(){return[{type:t.i}]},n}()},Qf3m:function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t=[""]},"a/2l":function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t=[""]},"aR8+":function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t=function(){function n(){}return n}()},bKTU:function(n,l,u){"use strict";function t(n){return i._25(0,[(n()(),i._27(0,null,null,14,"div",[],null,null,null,null,null)),(n()(),i._26(null,["\n    "])),(n()(),i._27(0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(n()(),i._26(null,["\n    "])),(n()(),i._27(0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),i._26(null,[" "," "])),(n()(),i._26(null,["\n    "])),(n()(),i._27(0,null,null,1,"p",[],null,null,null,null,null)),(n()(),i._26(null,[" "," "])),(n()(),i._26(null,["\n    "])),(n()(),i._27(0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,u){var t=!0;if("click"===l){t=!1!==i._31(n,11).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t}return t},null,null)),i._28(671744,null,0,c.z,[c.c,c.a,a.d],{routerLink:[0,"routerLink"]},null),i._32(2),(n()(),i._26(null,[" View Details "])),(n()(),i._26(null,["\n  "]))],function(n,l){n(l,11,0,n(l,12,0,"phone",l.context.$implicit._id))},function(n,l){n(l,2,0,l.context.$implicit.image),n(l,5,0,l.context.$implicit.name),n(l,8,0,l.context.$implicit.brand),n(l,10,0,i._31(l,11).target,i._31(l,11).href)})}function e(n){return i._25(0,[(n()(),i._27(0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),i._26(null,[" Phone list "])),(n()(),i._26(null,["\n"])),(n()(),i._27(0,null,null,5,"div",[],null,null,null,null,null)),(n()(),i._26(null,["\n  "])),(n()(),i._30(16777216,null,null,2,null,t)),i._28(802816,null,0,a.l,[i.W,i._7,i.l],{ngForOf:[0,"ngForOf"]},null),i._33(131072,a.n,[i.T]),(n()(),i._26(null,["\n"])),(n()(),i._26(null,["\n"]))],function(n,l){var u=l.component;n(l,6,0,i._34(l,6,0,i._31(l,7).transform(u.phones)))},null)}function o(n){return i._25(0,[(n()(),i._27(0,null,null,2,"app-phone-list",[],null,null,null,e,p)),i._35(512,null,f.a,f.a,[d.i]),i._28(114688,null,0,s.a,[f.a],null,null)],function(n,l){n(l,2,0)},null)}var r=u("a/2l"),i=u("/oeL"),c=u("BkNc"),a=u("qbdv"),s=u("feZN"),f=u("P95+"),d=u("CPp0");u.d(l,"a",function(){return h});var _=[r.a],p=i._24({encapsulation:0,styles:_,data:{}}),h=i._29("app-phone-list",s.a,o,{},{},[])},cDNt:function(n,l,u){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=u("/oeL"),e=u("p5Ee"),o=u("+h1B"),r=u("fc+i");e.a.production&&u.i(t.a)(),u.i(r.a)().bootstrapModuleFactory(o.a)},feZN:function(n,l,u){"use strict";var t=u("P95+");u.d(l,"a",function(){return e});var e=function(){function n(n){this.phone=n}return n.prototype.ngOnInit=function(){this.phones=this.phone.getList(),console.log(this.phones)},n.ctorParameters=function(){return[{type:t.a}]},n}()},p5Ee:function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t={production:!0}},q4dy:function(n,l,u){"use strict";function t(n){return r._25(0,[(n()(),r._26(null,["\n"])),(n()(),r._27(16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),r._28(212992,null,0,i.y,[i.q,r.W,r.e,[8,null],r.T],null,null),(n()(),r._26(null,["\n"]))],function(n,l){n(l,2,0)},null)}function e(n){return r._25(0,[(n()(),r._27(0,null,null,1,"app-root",[],null,null,null,t,s)),r._28(49152,null,0,c.a,[],null,null)],null,null)}var o=u("NhKt"),r=u("/oeL"),i=u("BkNc"),c=u("wQAS");u.d(l,"a",function(){return f});var a=[o.a],s=r._24({encapsulation:0,styles:a,data:{}}),f=r._29("app-root",c.a,e,{},{},[])},qtrl:function(n,l){function u(n){throw new Error("Cannot find module '"+n+"'.")}u.keys=function(){return[]},u.resolve=u,n.exports=u,u.id="qtrl"},wQAS:function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t=function(){function n(){this.title="app"}return n}()}},[0]);