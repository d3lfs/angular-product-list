import { Component, HostBinding, Input, OnInit } from '@angular/core'
import { Product } from '../models/product.model'

@Component({
	selector: 'product-item',
	templateUrl: './product-item.component.html',
	styles: [],
})
export class ProductItemComponent {
	@Input() product!: Product
	@HostBinding('attr.class') cssClass = 'item'
}
