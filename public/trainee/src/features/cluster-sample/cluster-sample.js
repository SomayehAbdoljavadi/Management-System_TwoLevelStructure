import {inject} from 'aurelia-dependency-injection';
import {NewInstance} from 'aurelia-framework';
import {connectTo, Store} from 'aurelia-store';
import {ValidationController, validateTrigger} from 'aurelia-validation';
import {pluck} from 'rxjs/operators';
import {CLUSTER_CONST} from './cluster-sample.constants'
import {ClusterService} from './cluster-sample.service'
import {ClusterModel} from './cluster-sample.models'
import {Notification} from '../../utilities/services/notification.service';


@connectTo({
  selector: {
    _action: (store) => store.state.pipe(pluck('action')),
    _getTime: (store) => store.state.pipe(pluck('getTime')),
    _setCluster: (store) => store.state.pipe(pluck('setCluster')),

  }
})
@inject(Store, NewInstance.of(ValidationController), ClusterService,Notification)
export class ClusterSample {
  constructor(store, vController, clusterService,notification) {
    this.store = store;
    this.notification = notification;
    this.getTimeResult = '';
    this.setClusterResult = '';
    this.clusterService = clusterService;
    this.vController = vController;
    this.vController.validateTrigger = validateTrigger.changeOrBlur;
    this.model = new ClusterModel();

  }
  view_json_get(data) {
    console.log(data);
    var data = {
      "result": data,
    };
    $('#json-get').jsonViewer(data, { collapsed: false, withQuotes: true });
  }
  view_json_set(data) {
    console.log(data);
    var data = {
      "result": data,
    };
    $('#json-post').jsonViewer(data, { collapsed: false, withQuotes: true });
  }
  _actionChanged(action) {
    this.action = action || {};
  }

  _getTimeChanged(newState, oldState) {
    if (this.action.name === CLUSTER_CONST.getTime.action.name) {
      if (newState.status === 'error') {
        this.notification.error(newState.error.message.fa)
        return;
      }
      if (newState.data.message !== undefined) {
        this.getTimeResult = newState.data.message.fa;
      } else {
        this.getTimeResult = JSON.stringify(newState.data);
        this.getTimeResultState = newState;
        this.view_json_get(this.getTimeResultState);
      }
    }
  }

  _setClusterChanged(newState, oldState) {
    if (this.action.name === CLUSTER_CONST.setCluster.action.name) {
      if (newState.status === 'error') {
        this.notification.error(newState.error.message.fa)
        return;
      }
      if (newState.data.message !== undefined) {
        this.setClusterResult = newState.data.message.fa;
      } else {
        this.setClusterResult = JSON.stringify(newState.data);
        this.setClusterResultState = newState;
        this.view_json_set(this.setClusterResultState);
      }
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

  getTime() {
    this.clusterService.getTime();
  }

  setCluster() {
    this.vController.validate().then((result) => {
      if (result.valid) {
        this.clusterService.setCluster(this.model.timeOut);
      }
    });
  }
}
