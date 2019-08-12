function Horse(){
}

Horse.prototype.eat = function(){
	console.log('Horse eating ...');
}

Horse.prototype.jump = function(){
	console.log('Horse jumping ...');
}

module.exports = Horse;