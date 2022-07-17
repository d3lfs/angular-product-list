import { Component, Input } from '@angular/core'

@Component({
	selector: 'product-price',
	template: ` <div class="price-display">\${{ price }}</div> `,
	styles: [],
})
export class ProductPriceComponent {
	@Input() price!: number
}
