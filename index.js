/**
 * Creates a BoardMember object with name, homeState and training properties
 * @constructor
 * @param {string} name - The name of the board member
 * @param {string} homeState - The home state of the board member
 * @param {string} training - The training of the board member
 */
function BoardMember(name, homeState, training) {
  this.name = name;
  this.homeState = homeState;
  this.training = training;
}

/**
 * Returns a string indicating disagreement
 * @returns {string}
 */
BoardMember.prototype.veto = function() {
  return "No, I must disagree";
}

/**
 * Returns a string indicating approval
 * @returns {string}
 */
BoardMember.prototype.approve = function() {
  return "You can do that!";
}

/**
 * Returns a string indicating charity
 * @returns {string}
 */
BoardMember.prototype.doCharity = function() {
  return "I like to help people.";
}

/**
 * Returns a string indicating a press statement
 * @returns {string}
 */
BoardMember.prototype.releasePressStatement = function() {
  return "You will see great things from Scuber.";
}

/**
 * Returns a string introducing the board member
 * @returns {string}
 */
BoardMember.prototype.sayHi = function() {
  return "Hi, my name is " + this.name + ". I am from " + this.homeState + ", and I was trained in " + this.training + ".";
}
