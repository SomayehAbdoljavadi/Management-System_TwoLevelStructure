export class AureliaToastr {
  constructor () {
    toastr.options.positionClass = 'toast-top-left';
    toastr.options.closeButton = true;
    toastr.options.preventDuplicates = true;
    toastr.options.timeOut = 3000;
    toastr.options.progressBar = true;
  }
}
