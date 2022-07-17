import { Component, Input } from '@angular/core'
import { Product } from '../models/product.model'

@Component({
	selector: 'product-department',
	templateUrl: './product-department.component.html',
	styles: [],
})
export class ProductDepartmentComponent {
	@Input() product!: Product
}
