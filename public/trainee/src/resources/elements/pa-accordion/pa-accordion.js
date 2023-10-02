import {bindable} from 'aurelia-framework';

export class PaAccordion {
  @bindable title;
  @bindable iconClass;
  @bindable targetId;

  attached() {
    var acc = document.getElementsByClassName("accordion");
    this.addEventListener(acc);

    var inneracc = document.getElementsByClassName("inneraccordion");
    this.addEventListener(inneracc)
  }

  addEventListener(elementtarget) {
    for (let i = 0; i < elementtarget.length; i++) {
      elementtarget[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var innerpanel = this.nextElementSibling;
        if (innerpanel.style.display === "block") {
          innerpanel.style.display = "none";
        } else {
          innerpanel.style.display = "block";
        }
      });
    }
  }
}


