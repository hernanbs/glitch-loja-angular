import * as moment from 'moment';

export class Usuario {
	username: string
	email: string
	password: string
	phone: number
	dataNasc: moment.Moment

	constructor(params?: any) { //TODO mudar any para tipo certo em todos anys
		let obj = params || {}
		this.username = obj.username || undefined
		this.email = obj.email || undefined
		this.password = obj.password || undefined
		this.phone = obj.phone || undefined
		this.dataNasc = obj.dataNasc || undefined
	}
}