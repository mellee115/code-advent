describe("calculate", function () {

	it("if directions are undefined, the result is floor 0", function (){
		assert.isEqual(whatFloorCtrl.calculate(undefined), 0);
	});

	it("if directions are (), the result is floor 0", function (){
		assert.isEqual(whatFloorCtrl.calculate("()"), 0);
	});

	it("if directions are ()), the result is floor 0", function (){
		assert.isEqual(whatFloorCtrl.calculate("(())"), 0);
	});

	it("if directions are ((())), the result is floor 0", function (){
		assert.isEqual(whatFloorCtrl.calculate("((()))"), 0);
	});

	it("if directions are (((()))), the result is floor 0", function (){
		assert.isEqual(whatFloorCtrl.calculate("(((())))"), 0);
	});
	

	it("if directions are (, the result is floor 1", function () {
		assert.isEqual(whatFloorCtrl.calculate("("), 1);
	});

	it("if directions are ((), the result is floor 1", function () {
		assert.isEqual(whatFloorCtrl.calculate("(()"), 1);
	});

	it("if directions are ((, the result is floor 2", function () {
		assert.isEqual(whatFloorCtrl.calculate("(("), 2);
	});

	it("if directions are ), the result is floor -1", function () {
		assert.isEqual(whatFloorCtrl.calculate("("), -1);
	});
	
	it("if directions are ()), the result is floor -1", function () {
		assert.isEqual(whatFloorCtrl.calculate("())"), -1);
	});
});