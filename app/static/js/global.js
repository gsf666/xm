/**
 * Created by xiegqooo_f0s0r9 on 2015-11-11.
 * 320 屏幕下 1 rem = 20px
 *
 * 720 设计稿 ， 2.25 * 320 = 720
 *
 *  设计稿 ( 32 / 2.25 ) / 100 =  0.1422
 */
(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      docEl.style.fontSize = 100 * (clientWidth /320) + 'px';
    };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
