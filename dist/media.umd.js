!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(n.media={})}(this,function(n){function t(n){return window.matchMedia(n).matches}var i={xs:0,sm:576,md:768,lg:992,xl:1200};function e(n){return t(n)}function o(n){return t("(min-width: "+n+"px)")}function s(n){return t("(max-width: "+n+"px)")}function r(n){return o(n)}function u(n){return s(n)}function d(n,i){return t("(min-width: "+n+"px) and (max-width: "+i+"px)")}function f(){return t("(pointer: coarse)")}function m(){return t("(pointer: fine)")}function c(n){return void 0===n&&(n=i),r(n.xs)}function x(n){return void 0===n&&(n=i),r(n.sm)}function a(n){return void 0===n&&(n=i),r(n.md)}function h(n){return void 0===n&&(n=i),r(n.lg)}function p(n){return void 0===n&&(n=i),r(n.xl)}var l=function(n){var t=this;void 0===n&&(n=i),this.breakpoints=i,this.query=e,this.min=o,this.max=s,this.up=r,this.down=u,this.between=d,this.isTouch=f,this.isMouse=m,this.xs=function(){return c(t.breakpoints)},this.sm=function(){return x(t.breakpoints)},this.md=function(){return a(t.breakpoints)},this.lg=function(){return h(t.breakpoints)},this.xl=function(){return p(t.breakpoints)},this.setBreakpoints(n)};l.prototype.setBreakpoints=function(n){this.breakpoints={xs:n.xs,sm:n.sm,md:n.md,lg:n.lg,xl:n.xl}},l.query=e,l.min=o,l.max=s,l.up=r,l.down=u,l.between=d,l.isTouch=f,l.isMouse=m,l.xs=c,l.sm=x,l.md=a,l.lg=h,l.xl=p,l.setBreakpoints=function(n){this.breakpoints={xs:n.xs,sm:n.sm,md:n.md,lg:n.lg,xl:n.xl}},void 0!==window&&(window.Media=l),n.default=l,n.query=e,n.min=o,n.max=s,n.up=r,n.down=u,n.isTouch=f,n.isMouse=m,n.xs=c,n.sm=x,n.md=a,n.lg=h,n.xl=p});
//# sourceMappingURL=media.umd.js.map