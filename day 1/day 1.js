function whatFloorCtrl(){
	this.show = false;
	this.answer;
}

angular.module('floorApp').controller('whatFloorCtrl', whatFloorCtrl);

whatFloorCtrl.prototype.calculate = function(directions){

	//starts at ground floor(floor 0)
	var current_floor = 0;
	
	for (var i=0; i < directions.length; i++){
		
		//assuming only characters given in directions are solely '(' and ')'
		if( directions.charAt(i) == '(' ){
			current_floor = current_floor + 1;
		}
		else{
			current_floor = current_floor - 1;
		}
	}
	this.answer = current_floor;
}

whatFloorCtrl.prototype.showAnswer = function(){
	this.show = true;
}

