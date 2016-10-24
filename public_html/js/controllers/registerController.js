app.controller('RegisterController', ['$scope', 'RegisterService', function($scope, RegisterService){
    var vm = $scope;
    
    vm.dayTot = [];
    vm.day = {};
    
    vm.init = function(){
        vm.resetDay();
        vm.resetDayTot();
        vm.day.date = new Date();
    };
    var populateDayTot = function(response){
        var dayTot = response.data.result.dayTot;
        vm.dayTot.length = 0;
        for(var i=0;i<dayTot.length;i++){
           vm.dayTot.push(dayTot[i]); 
        }
    };
    vm.resetDayTot = function(){
        RegisterService.getDayTot(null, populateDayTot);
    };
    vm.resetDay = function(){
        vm.day.date = "";
        vm.day.totHours = 4;
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
        if(vm.day.index == index)
            vm.resetDay();
        vm.dayTot.splice(index,1);
    };
    vm.getTotal = function(type){
        var total=0;
        angular.forEach(vm.dayTot,function(el){
            total += el[type];
        });
        return total;
    };
    vm.init();
}]);