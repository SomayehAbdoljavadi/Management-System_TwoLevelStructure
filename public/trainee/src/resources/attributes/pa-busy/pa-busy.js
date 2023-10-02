import { inject, bindable } from 'aurelia-framework';
import './pa-busy.scss';
import * as NProgress from 'nprogress';
import 'nprogress/nprogress.css';

/**
 * Type: Custom Attribute
 * Main Functionality: Busy - Progress
 * How to use: ./pa-busy.md
 */
@inject(Element)
export class PaBusyCustomAttribute {
  /**
   * Required: false
   * Type: boolean
   * Default: false
   * Description: whether is the element busy or not
   */
  @bindable isShowing = false;
  /**
   * Required: false
   * Type: boolean
   * Default: true
   * Description: show the mask on element or not
   */
  @bindable hasLocalMask = true;
  /**
   * Required: false
   * Type: boolean
   * Default: true
   * Description: show the message on element or not
   */
  @bindable hasLocalMessage = true;
  /**
   * Required: false
   * Type: boolean
   * Default: true
   * Description: show the loading bar top of the page or not
   */
  @bindable hasGlobalBar = true;
  /**
   * Required: false
   * Type: string
   * Default: as shown bellow
   * Description: message to show on loading
   */
  @bindable message = 'در حال پردازش ...';
  /**
   * Required: false
   * Type: string
   * Default: null
   * Description: background color of mask
   */
  @bindable maskBackColor = null;
  /**
   * Required: false
   * Type: string
   * Default: as shown bellow
   * Description: type of spinner to show in message box
   */
  @bindable spinnerType = 'chasingDots'; // none to remove

  /**
   * setup view elements
   * @param {HTMLElement} element 
   */
  constructor(element) {
    this.element = element;
    this.setupView();
  }

  /**
   * on busy state changed from parent component
   * @param {boolean} newValue after change
   * @param {boolean} oldValue before change
   */
  isShowingChanged(newValue, oldValue) {
    if (newValue) {
      if (this.hasGlobalBar) {
        this.appendToNProgress();
      }
      if (this.hasLocalMask) {
        this.maskElement.classList.add('pab-in-progress');
      }
      if (this.hasLocalMessage) {
        this.messageElement.classList.add('pab-in-progress');
        setTimeout(() => {
          this.messageElement.style.top = '' + ((Number.parseInt(window.getComputedStyle(this.element).height) - Number.parseInt(window.getComputedStyle(this.messageElement).height)) / 2) + 'px';
        }, 0);
      }
    } else {
      this.removeFromNProgress();
      this.maskElement.classList.remove('pab-in-progress');
      this.messageElement.classList.remove('pab-in-progress');
    }
  }

  /**
   * attach task to NProgress
   */
  appendToNProgress() {
    if (!NProgress.tasks || !Array.isArray(NProgress.tasks)) {
      NProgress.tasks = [];
    }
    if (!NProgress.tasks.includes(this)) {
      NProgress.tasks.push(this);
      NProgress.inc(-(NProgress.status / NProgress.tasks.length));
    }
  }

  /**
   * detach task from NProgress
   */
  removeFromNProgress() {
    if (NProgress.tasks.includes(this)) {
      NProgress.tasks.splice(NProgress.tasks.indexOf(this), 1);
      if (NProgress.tasks.length > 0) {
        NProgress.inc((1 - NProgress.status) / (NProgress.tasks.length + 1));
      } else {
        NProgress.done();
      }
    }
  }

  /**
   * on spinner type changed from parent component
   * @param {string} newValue from spinnerTypes(array) | after change
   * @param {string} oldValue from spinnerTypes(array) | before change
   */
  spinnerTypeChanged(newValue, oldValue) {
    if (!this.spinnerType || this.spinnerType === '') {
      this.spinnerType = 'chasingDots';
    }
    this.messageChanged(this.message, this.message);
  }

  /**
   * on mask background color changed from parent component
   * @param {string} newValue COLOR | after change
   * @param {string} oldValue COLOR | before change
   */
  maskBackColorChanged(newValue, oldValue) {
    if (newValue) {
      if (this.maskElement) {
        this.maskElement.style.backgroundColor = newValue;
      }
    }
  }

  /**
   * on message changed from parent component
   * @param {string} newValue after change
   * @param {string} oldValue before change
   */
  messageChanged(newValue, oldValue) {
    if (newValue) {
      this.messageElement.innerHTML = `<span class="pas-message-content">${this.getSpinnerElement()}<span class="pas-message-text ${this.getMessageAdditionalClass()}">${this.message}</span></span>`;
    } else {
      this.message = 'در حال پردازش ...';
    }
  }

  /**
   * add a trim class to message text when there are text and snipper side by side together
   */
  getMessageAdditionalClass() {
    if (this.message === ' ' || this.spinnerType === 'none') {
      return 'pab-message-trim';
    } else {
      return '';
    }
  }

  /**
   * create html elements to make it ready to work
   */
  setupView() {
    this.element.classList.add('pab-body');

    this.maskElement = document.createElement('div');
    this.maskElement.classList.add('pab-mask');

    this.messageElement = document.createElement('div');
    this.messageElement.classList.add('pab-message');
    this.messageElement.innerHTML = `<span class="pas-message-content">${this.getSpinnerElement()}<span class="pas-message-text">${this.message}</span></span>`;

    this.element.appendChild(this.maskElement);
    this.element.appendChild(this.messageElement);
  }

  /**
   * get spinner element according to this.spinnerType and spinnerTypes (array)
   */
  getSpinnerElement() {
    if (this.spinnerType === 'none') {
      return '';
    }
    return `<span class="${spinnerTypes[this.spinnerType].class}">${spinnerTypes[this.spinnerType].html}</span> `;
  }
}

/**
 * different types of spinner (from http://tobiasahlin.com/spinkit/)
 */
const spinnerTypes = {
  'chasingDots': { html: '<div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>', class: 'pab-chasing-dots' },
  'circle': { html: '<div class="sk-circle"><div class="sk-circle1 sk-child"></div><div class="sk-circle2 sk-child"></div><div class="sk-circle3 sk-child"></div><div class="sk-circle4 sk-child"></div><div class="sk-circle5 sk-child"></div><div class="sk-circle6 sk-child"></div><div class="sk-circle7 sk-child"></div><div class="sk-circle8 sk-child"></div><div class="sk-circle9 sk-child"></div><div class="sk-circle10 sk-child"></div><div class="sk-circle11 sk-child"></div><div class="sk-circle12 sk-child"></div></div>', class: 'pab-circle' },
  'cubeGrid': { html: '<div class="sk-cube-grid"><div class="sk-cube sk-cube1"></div><div class="sk-cube sk-cube2"></div><div class="sk-cube sk-cube3"></div><div class="sk-cube sk-cube4"></div><div class="sk-cube sk-cube5"></div><div class="sk-cube sk-cube6"></div><div class="sk-cube sk-cube7"></div><div class="sk-cube sk-cube8"></div><div class="sk-cube sk-cube9"></div></div>', class: 'pab-cube-grid' },
  'doubleBounce': { html: '<div class="spinner"><div class="dot1"></div><div class="dot2"></div></div>', class: 'pab-double-bounce' },
  'fadingCircle': { html: '<div class="sk-fading-circle"><div class="sk-circle1 sk-circle"></div><div class="sk-circle2 sk-circle"></div><div class="sk-circle3 sk-circle"></div><div class="sk-circle4 sk-circle"></div><div class="sk-circle5 sk-circle"></div><div class="sk-circle6 sk-circle"></div><div class="sk-circle7 sk-circle"></div><div class="sk-circle8 sk-circle"></div><div class="sk-circle9 sk-circle"></div><div class="sk-circle10 sk-circle"></div><div class="sk-circle11 sk-circle"></div><div class="sk-circle12 sk-circle"></div></div>', class: 'pab-fading-circle' },
  'foldingCube': { html: '<div class="sk-folding-cube"><div class="sk-cube1 sk-cube"></div><div class="sk-cube2 sk-cube"></div><div class="sk-cube4 sk-cube"></div><div class="sk-cube3 sk-cube"></div></div>', class: 'pab-folding-cube' },
  'pulse': { html: '<div class="spinner"></div>', class: 'pab-pulse' },
  'rotatingPlane': { html: '<div class="spinner"></div>', class: 'pab-rotating-plane' },
  'threeBounce': { html: '<div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>', class: 'pab-three-bounce' },
  'wanderingCubes': { html: '<div class="spinner"><div class="cube1"></div><div class="cube2"></div></div>', class: 'pab-wandering-cubes' },
  'wave': { html: '<div class="spinner"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>', class: 'pab-wave' }
};
