import { Component, OnInit } from '@angular/core'
import { Product } from './models/product.model'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	products!: Array<Product>

	constructor() {
		this.products = new Array<Product>()
	}

	ngOnInit(): void {
		this.products.push(
			new Product(
				'MYSHOES',
				'Black Running Shoes',
				'https://github.com/ngocsangyem/ng-book-8/blob/master/how-angular-works/inventory-app/src/assets/images/products/black-shoes.jpg?raw=true',
				['Men', 'Shoes', 'Running Shoes'],
				109.99
			)
		)

		this.products.push(
			new Product(
				'NEATOJACKET',
				'Blue Jacket',
				'https://github.com/ngocsangyem/ng-book-8/blob/master/how-angular-works/inventory-app/src/assets/images/products/blue-jacket.jpg?raw=true',
				['Women', 'Apparel', 'Jackets & Vests'],
				238.99
			)
		)

		this.products.push(
			new Product(
				'NICEHAT',
				'A Nice Black Hat',
				'https://github.com/ngocsangyem/ng-book-8/blob/master/how-angular-works/inventory-app/src/assets/images/products/black-hat.jpg?raw=true',
				['Men', 'Accessories', 'Hats'],
				29.99
			)
		)
	}

	productWasSelected(product: Product): void {
		console.log('Product clicked', product)
	}

	title = 'angular-shopping'
}
