function n(n){return window.matchMedia(n).matches}var t={xs:0,sm:576,md:768,lg:992,xl:1200};function i(t){return n(t)}function r(t){return n("(min-width: "+t+"px)")}function o(t){return n("(max-width: "+t+"px)")}function s(n){return r(n)}function e(n){return o(n)}function u(t,i){return n("(min-width: "+t+"px) and (max-width: "+i+"px)")}function d(){return n("(pointer: coarse)")}function c(){return n("(pointer: fine)")}function h(n){return void 0===n&&(n=t),s(n.xs)}function m(n){return void 0===n&&(n=t),s(n.sm)}function x(n){return void 0===n&&(n=t),s(n.md)}function a(n){return void 0===n&&(n=t),s(n.lg)}function f(n){return void 0===n&&(n=t),s(n.xl)}var p=function(n){var p=this;void 0===n&&(n=t),this.breakpoints=t,this.query=i,this.min=r,this.max=o,this.up=s,this.down=e,this.between=u,this.isTouch=d,this.isMouse=c,this.xs=function(){return h(p.breakpoints)},this.sm=function(){return m(p.breakpoints)},this.md=function(){return x(p.breakpoints)},this.lg=function(){return a(p.breakpoints)},this.xl=function(){return f(p.breakpoints)},this.setBreakpoints(n)};p.prototype.setBreakpoints=function(n){this.breakpoints={xs:n.xs,sm:n.sm,md:n.md,lg:n.lg,xl:n.xl}},p.query=i,p.min=r,p.max=o,p.up=s,p.down=e,p.between=u,p.isTouch=d,p.isMouse=c,p.xs=h,p.sm=m,p.md=x,p.lg=a,p.xl=f,p.setBreakpoints=function(n){this.breakpoints={xs:n.xs,sm:n.sm,md:n.md,lg:n.lg,xl:n.xl}},void 0!==window&&(window.Media=p);export default p;export{i as query,r as min,o as max,s as up,e as down,d as isTouch,c as isMouse,h as xs,m as sm,x as md,a as lg,f as xl};
//# sourceMappingURL=media.mjs.map