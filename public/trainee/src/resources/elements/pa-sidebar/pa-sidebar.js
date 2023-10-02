import './pa-sidebar.scss';
import {containerless, bindable} from 'aurelia-framework';
import {inject} from 'aurelia-dependency-injection';
import {DOM} from 'aurelia-pal';
import environment from "../../../environment"
import {EventAggregator} from 'aurelia-event-aggregator';
import {connectTo, Store} from "aurelia-store"
import {pluck} from "rxjs/operators"
import {Router} from 'aurelia-router'

@connectTo({
  selector: {
    _action: (store) => store.state.pipe(pluck('action')),
    _logOut: (store) => store.state.pipe(pluck('logOut')),
    _getMessagesBadge: (store) => store.state.pipe(pluck('getMessagesBadge'))
  }
})
@containerless()
@inject(Store, DOM.Element, EventAggregator, Router)
export class PaSidebar {
  @bindable router;

  constructor(store, element, eventAggregator, router) {
    this.element = element;
    this.router = router;
    this.store = store;
    this.arrayRoutes = [];
    this.clickItem = null;
    this.currentRoute = '';
    this.selected = null;
    this.selectedSubmenu = null;
    this.inboxBadge = 0;
    this.eventAggregator = eventAggregator;
    this.subscriptions = [];
    let subscriber;
    subscriber = this.eventAggregator.subscribe('router:navigation:success', obj => {
      let currentRoute = this.currentRoute ? this.currentRoute.slice(1) : '';
      if (currentRoute !== obj.instruction.fragment) {
        this.selectActiveRoute();
      }
    });
    this.subscriptions.push(subscriber);

  }

  _actionChanged(newAction, oldAction) {
    this.action = (newAction && oldAction) ? newAction : {};
  }

  _getMessagesBadgeChanged(newState, oldState) {
    // if (this.action.name === PublicServices_CONST.getMessagesBadge.action.name) {
    //   if (newState.status === 'error') {
    //     toastr.error(newState.error.message.fa)
    //     return;
    //   }
    //   environment.inboxBadge = newState;
    //   this.inboxBadge = environment.inboxBadge;
    // }
  }

  _logOutChanged(newState, oldState) {
    // if (this.action.name === ACCOUNT_CONST.logOut.action.name) {
    //   if (newState.status === 'error') {
    //     toastr.error(newState.error.message.fa)
    //     return;
    //   }
    //   window.location.reload();
    // }
  }

  deactivate() {
    for (let subscribe of this.subscriptions) {
      subscribe.dispose();
    }
  }

  bind() {
    // this.publicServicesService.getMessagesBadge('inbox');

    this.makeList();
    this.selectActiveRoute();


  }

  logout() {
    this.accountService.logOut();
  }

  // attached() {

  //   jQuery(document).click(() => {
  //     if (jQuery('.main-content').hasClass('collapsed-sidebar') && jQuery(window).width() < 992) {
  //       jQuery(".main-container,.main-header,.main-content").removeClass("collapsed-sidebar");
  //       jQuery(".main-sidebar").removeClass("collapsed");
  //       // jQuery(".main-sidebar .navigator li").removeClass("open")
  //     }

  //   })

  //   // jQuery('.main-sidebar').click(function (event) {
  //   //   if (event.path[0] === jQuery(this)[0]) {
  //   //     event.stopPropagation();
  //   //   }
  //   // })


  //   $(".main-sidebar .navigator li > .has-submenu").click(function () {
  //     $(".main-sidebar .navigator li > .submenu").not($(this).siblings(".submenu")).slideUp();
  //     $(".main-sidebar .navigator li").not($(this).parent()).removeClass("open");
  //     $(this).parent().toggleClass("open");
  //     $(this).siblings(".submenu").stop().slideToggle();

  //     return false;
  //   });

  //   $(".main-sidebar .navigator li > .item-title").not('.has-submenu').click(function () {
  //     $(".main-sidebar .navigator li > .submenu").slideUp();
  //     $(".main-sidebar .navigator li").removeClass("open");
  //     $(this).siblings(".submenu").stop().slideToggle();
  //   });
  // }

  makeList() {
    // noinspection JSDeprecatedSymbols
    for (let i = 0; this.router.navigation.length > i; i++) {
      // noinspection JSDeprecatedSymbols
      if (this.router.navigation[i].settings.subMenu) {
        // noinspection JSDeprecatedSymbols,JSDeprecatedSymbols,JSDeprecatedSymbols,JSDeprecatedSymbols,JSDeprecatedSymbols,JSDeprecatedSymbols,JSDeprecatedSymbols
        this.arrayRoutes.push({
          relativeHref: this.router.navigation[i].relativeHref,
          href: this.router.navigation[i].href,
          title: this.router.navigation[i].title,
          icon: this.router.navigation[i].settings.icon,
          order: this.router.navigation[i].settings.order,
          subMenu: this.router.navigation[i].settings.subMenu,
          showSubMenu: this.router.navigation[i].settings.showSubMenu
        });
      } else {
        // noinspection JSDeprecatedSymbols,JSDeprecatedSymbols,JSDeprecatedSymbols,JSDeprecatedSymbols,JSDeprecatedSymbols
        this.arrayRoutes.push({
          relativeHref: this.router.navigation[i].relativeHref,
          href: this.router.navigation[i].href,
          title: this.router.navigation[i].title,
          icon: this.router.navigation[i].settings.icon,
          order: this.router.navigation[i].settings.order
        });
      }
    }
  }

  selectActiveRoute() {
    let currentRoute = this.router.currentInstruction;
    this.currentLink = currentRoute.config.navModel.relativeHref;

    let isActive = true;
    this.arrayRoutes.sort((a, b) => {
      return a.order - b.order;
    });
    this.arrayRoutes.forEach((route, i) => {
      if (isActive) {
        if (!route.subMenu) {
          if (route.href.slice(1) === currentRoute.fragment) {
            this.clicked('', route.href, i, '');
            isActive = false;
          }
        } else {
          if (route.showSubMenu) {
            route.subMenu.forEach((subRoute, index) => {
              if (subRoute.href.slice(1) === currentRoute.fragment) {
                this.clicked('subMenu', subRoute.href, index, i);
                this.clicked('', '', i, '');
                isActive = false;
              }
            });
          } else {
            route.subMenu.forEach((subRoute, index) => {
              if (subRoute.href.slice(1) === currentRoute.fragment) {
                this.clicked('subMenu', subRoute.href, index, i);
                isActive = false;
              }
            });
          }
        }
      }
    });
    if (isActive) {// در صورتی که روت وارد شده در روت ها اصلی ثبت نشده باشند
      // روت جاری از حالت انتخاب خارج میشود
      this.unSelectActiveRoute();
    }
  }

  unSelectActiveRoute() {
    this.selected = null;
    this.clickItem = null;
    this.currentRoute = null;
  }

  clicked(subMenu, href, index, rootIndex) {
    // if (jQuery(window).width() < 992) {
    //   jQuery(".main-container,.main-header,.main-content").removeClass("collapsed-sidebar");
    //   jQuery(".main-sidebar").removeClass("collapsed");
    //   // jQuery(".main-sidebar .navigator li").removeClass("open")
    // }


    this.isCloseSidebar = document.body.classList.contains('sidebar_close');
    let isWidth = document.documentElement.clientWidth <= 900;
    if (href && subMenu && this.currentRoute !== href) { //زیر منو
      if (!this.isCloseSidebar && isWidth) {
        document.body.classList.add('sidebar_close');
        document.body.classList.add('sidebar_hover');
      }
      location.assign(href);
      this.currentRoute = href;
      this.selected = rootIndex;
      this.selectedSubmenu = index;
    } else if (href && !subMenu && this.currentRoute !== href) { //لینک اصلی بدون زیر منو
      if (!this.isCloseSidebar && isWidth) {
        document.body.classList.add('sidebar_close');
        document.body.classList.add('sidebar_hover');
      }
      location.assign(href);
      this.currentRoute = href;
      this.clickItem = null;
      this.selected = index;
      this.selectedSubmenu = null;
    } else if (!href && this.clickItem !== index) { //منو انتخاب نشده بدون لینک
      if (this.isCloseSidebar) {
        document.body.classList.remove('sidebar_close');
        document.body.classList.remove('sidebar_hover');
      }
      this.clickItem = index;
    } else if (!href && this.clickItem === index) {//منو انتخاب شده (تکراری) بدون لینک
      if (this.isCloseSidebar) {
        document.body.classList.remove('sidebar_close');
        document.body.classList.remove('sidebar_hover');
      }
      this.clickItem = null;
    }
  }

}
