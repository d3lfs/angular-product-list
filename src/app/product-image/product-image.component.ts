import { Component, HostBinding, Input } from '@angular/core'
import { Product } from '../models/product.model'

@Component({
	selector: 'product-image',
	template: ` <img class="product-image" [src]="product.imgUrl" /> `,
	styles: [],
})
export class ProductImageComponent {
	@Input() product!: Product
	@HostBinding('attr.class') cssClass = 'ui small image'
}
