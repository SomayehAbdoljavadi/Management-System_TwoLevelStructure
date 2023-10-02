import {inject} from 'aurelia-dependency-injection';
import {NewInstance} from 'aurelia-framework';
import {connectTo, Store} from 'aurelia-store';
import {ValidationController, validateTrigger} from 'aurelia-validation';
import {pluck} from 'rxjs/operators';
import {FILE_CONST} from './file-sample.constants'
import {FileService} from './file-sample.service'
import * as download from '../../utilities/download.js'
import {Notification} from '../../utilities/services/notification.service';


@connectTo({
  selector: {
    _action: (store) => store.state.pipe(pluck('action')),
    _getPicture: (store) => store.state.pipe(pluck('getPicture')),
    _getTxtFile: (store) => store.state.pipe(pluck('getTxtFile')),
    _getExcelFile: (store) => store.state.pipe(pluck('getExcelFile')),
  }
})
@inject(Store, NewInstance.of(ValidationController), FileService,Notification)
export class FileSample {
  constructor(store, vController, fileService,notification) {
    this.store = store;
    this.notification = notification;

    this.vController = vController;
    this.vController.validateTrigger = validateTrigger.changeOrBlur;
    this.getTxtResult = '';
    this.getPictureResult = '';
    this.getExcelResult = '';
    this.fileService = fileService;
  }

  _actionChanged(action) {
    this.action = action || {};
  }

  _getPictureChanged(newState, oldState) {
    if (this.action.name === FILE_CONST.getPicture.action.name) {
      if (newState.status === 'error') {
        this.notification.error(newState.error.message.fa)
        return;
      }
      newState.blob().then(blob => {
        download(blob, 'test.png', blob.type);
      });
    }
  }

  _getTxtFileChanged(newState, oldState) {
    if (this.action.name === FILE_CONST.getTxtFile.action.name) {
      if (newState.status === 'error') {
        this.notification.error(newState.error.message.fa)
        return;
      }

      newState.blob().then(blob => {
        download(blob, 'test.txt', blob.type);
      });
    }
  }


  _getExcelFileChanged(newState, oldState) {
    if (this.action.name === FILE_CONST.getExcelFile.action.name) {
      if (newState.status === 'error') {
        this.notification.error(newState.error.message.fa)
        return;
      }


      newState.blob().then(blob => {
        download(blob, 'test.xlsx', blob.type);
      });
    }
  }


  attached() {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }


    var acc = document.getElementsByClassName("inneraccordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
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

  getPicture() {
    this.fileService.getPicture();
  }

  getTxtFile() {
    this.fileService.getTxtFile();
  }

  getExcelFile() {
    this.fileService.getExcelFile();
  }
}
