import * as moment from 'moment';
import { Product } from '../product/product'
import { Usuario } from '../usuario/usuario'
export class Carrinho {
	lastUpdate: moment.Moment
	productIds: Array<string>
	userId: string

	constructor(params?: any) { //TODO mudar any para tipo certo em todos anys
		let obj = params || {}
		this.lastUpdate = obj.lastUpdate || moment().format()
		this.productIds = obj.productIds || []
		this.userId = obj.userId || ''
	}
}
