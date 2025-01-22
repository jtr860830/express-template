export default class extends Error {
	constructor(name, msg) {
		super(msg);
		this.name = name;
	}
}
