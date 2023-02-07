class Building {
	#hasWalls;
	#numOfWalls;
	#roofShape;
	constructor(hasWalls, numOfWalls, roofShape) {
		this._hasWalls = hasWalls;
		this._numOfWalls = numOfWalls;
		this._roofShape = roofShape;
	}

	get hasWalls() {
		return this._hasWalls;
	}

	set hasWalls(value) {
		this._hasWalls = value;
	}

	get numOfWalls() {
		return this._numOfWalls;
	}

	set numOfWalls(value) {
		this._numOfWalls = value;
	}

	get roofShape() {
		return this._roofShape;
	}

	set roofShape(value) {
		this._roofShape = value;
	}

	openDoor() {
		console.log("Opening building door...");
	}

	closeDoor() {
		console.log("Closing building door...");
	}
}

class Gym extends Building {
	#gymName;
	#hasPool;
	constructor(hasWalls, numOfWalls, roofShape, gymName, hasPool) {
		super(hasWalls, numOfWalls, roofShape);
		this._gymName = gymName;
		this._hasPool = hasPool;
	}

	get gymName() {
		return this._gymName;
	}

	set gymName(value) {
		this._gymName = value;
	}

	get hasPool() {
		return this._hasPool;
	}

	set hasPool(value) {
		this._hasPool = value;
	}

	openGym() {
		console.log(`Opening gym ${this.gymName}...`);
	}

	closeGym() {
		console.log(`Closing gym ${this.gymName}...`);
	}
}

class Bank extends Building {
	#numOfVault;
	#numOfStaff;
	#name;
	constructor(hasWalls, numOfWalls, roofShape, numOfVault, numOfStaff, name) {
		super(hasWalls, numOfWalls, roofShape);
		this._numOfVault = numOfVault;
		this._numOfStaff = numOfStaff;
		this._name = name;
	}

	get numOfVault() {
		return this._numOfVault;
	}

	set numOfVault(value) {
		this._numOfVault = value;
	}

	get numOfStaff() {
		return this._numOfStaff;
	}

	set numOfStaff(value) {
		this._numOfStaff = value;
	}

	getname() {
		return this._name;
	}

	setname(value) {
		this._name = value;
	}

	openBank() {
		console.log(` ${this.name} is open`);
	}

	closeBank() {
		console.log(`${this.name} will be closed`);
	}
}

const gym = new Gym(true, 65, "rectangle", "Fitness Hub", true);
console.log(gym.hasWalls);
const bank = new Bank(true, 18, "circle", 3, 360, "Bank of America");
bank.setname("Chase");
console.log(bank.getname());
bank.openBank();
gym.closeGym();
