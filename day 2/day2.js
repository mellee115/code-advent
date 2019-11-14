'use strict'
function wrappingPaperCtrl(){
	this.show = false;
	this.answer;
}

angular.module('wrappingPaperApp').controller('wrappingPaperCtrl', wrappingPaperCtrl);

wrappingPaperCtrl.prototype.calculate = function(l,w,h){
	let total = 0;
	
	//determining the slack needed
		let smallSide = Math.min(l*w, w*h, h*l);
		
		total += 2*l*w + 2*w*h + 2*h*l + smallSide;
	
	this.answer = total;
}

wrappingPaperCtrl.prototype.showAnswer = function(){
	this.show = true;
}
