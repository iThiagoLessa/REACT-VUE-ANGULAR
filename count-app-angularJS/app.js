angular.module("counterApp", []).controller("CounterController", function () {
  this.number = 0;

  this.increment = () => {
    this.number++;
  };
  this.decrement = () => {
    this.number--;
  };
});
