'use strict';

describe('Controller: MainControler', function () {

  // load the controller's module
  beforeEach(module('batusayApp.controllers'));

  var controller;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    controller = $controller('MainController');
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(controller.awesomeThings.length).toBe(3);
  });
});
