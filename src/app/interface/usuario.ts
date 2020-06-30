import * as  moment from 'moment';

export interface UsuarioInterface {
	username: string
	email: string
	password: string
	phone: number
	dataNasc: moment.Moment
}
