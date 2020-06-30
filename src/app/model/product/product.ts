export class Product {
	title: string
	name: string
	description: string //TODO mudar para tipo blob
	price: number
	photo: string
	attributeType: string //TODO mudar para enum
	stage: string //TODO mudar para enum

	constructor(params?: any) {
		let obj = params || {}
		this.title = obj.title || ""
		this.name = obj.name || ""
		this.description = obj.description || ""
		this.price = obj.price || 0
		this.photo = obj.photo || ""
		this.attributeType = obj.attributeType || ""
		this.stage = obj.stage || "" // Bebé 1e2CriançaAdultoPerfeitoFinal
	}
}
