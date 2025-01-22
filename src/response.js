export default class {
	constructor({ meta, data, msg, err } = {}) {
		this.meta = meta;
		this.data = data;
		this.err = err;
		this.msg = msg;
	}
}
