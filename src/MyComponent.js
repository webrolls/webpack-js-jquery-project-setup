import $ from 'jquery';

export default class {
  constructor(btnRefId, containerRefId) {
    this.btnRefId = btnRefId;
    this.containerRefId = containerRefId;
    this.initEvent();
  }

  initEvent() { 
    $('#'+ this.btnRefId).on('click', () => {
      this.hideContainer();
    });
  }

  hideContainer() {
    $('#'+this.containerRefId).hide();
  }  
};