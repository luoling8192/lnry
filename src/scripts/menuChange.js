//  window.onscroll = () => {
//    try {
//      const $ = require("jquery");
//      let cont = ["index", "about", "show", "news"];
//      let t = document.documentElement.scrollTop || document.body.scrollTop;
//      if (t > 0) {
//        $(`.${styles.box}`).addClass(styles.boxScroll);
//        for (let i = 0; i < cont.length; i++) {
//          // @ts-ignore
//          if (t >= $(`#${cont[i]}`).offset().top - 60 && t <= $(`#${cont[i + 1]}`).offset().top - 60) {
//            $(`#menu_${cont[i]}`).addClass("ant-menu-item-selected");
//          } else {
//            $(`#menu_${cont[i]}`).removeClass("ant-menu-item-selected");
//          }
//        }
//      } else {
//        $(`.${styles.box}`).removeClass(styles.boxScroll);
//      }
//    } catch ($e) {}
//  }
