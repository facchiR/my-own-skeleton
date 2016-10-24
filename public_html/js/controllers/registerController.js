app.controller('RegisterController', ['$scope', function($scope){
    var vm = $scope;
    
    vm.dayTot = [];
    vm.day = {};
    
    vm.init = function(){
        vm.resetDay();
        vm.resetDayTot();
    };
    vm.resetDayTot = function(){
        vm.dayTot.length = 0;
    };
    vm.resetDay = function(){
        vm.day.date = new Date();
        vm.day.totHours = 0;
        vm.day.presHours = 0;
        vm.day.absHours = 0;
        vm.day.index = -1;
    };
    vm.getDay = function(d){
        var day = {};
        day.date = d.date;
        day.totHours = d.totHours;
        day.presHours = d.presHours;
        day.absHours = (d.totHours - d.presHours);
        return day;
    };
    vm.saveDay = function(index){
        if(index>=0){
            vm.dayTot.splice(index, 1, vm.getDay(vm.day));
        }else{
            vm.dayTot.push(vm.getDay(vm.day));
            vm.resetDay();
        }        
    };
    vm.showDay = function(index){
        vm.day = vm.getDay(vm.dayTot[index]);
        vm.day.index = index;
    };
    vm.deleteDay = function(index){
        vm.dayTot.splice(index,1);
    };    
}]);