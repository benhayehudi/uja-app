const $ = require('jQuery');

export function DatePicker() {

  Date.prototype.toDateInputValue = (function() {
    let local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
  });

  $(document).ready() {
    document.getElementById('formDate').value = new Date().toDateInputValue();
  }

  // console.log(document.getElementById('formDate').value);
}
