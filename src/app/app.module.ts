import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { ProductImageComponent } from './product-image/product-image.component'
import { ProductPriceComponent } from './product-price/product-price.component'
import { ProductDepartmentComponent } from './product-department/product-department.component'
import { ProductItemComponent } from './product-item/product-item.component'
import { ProductListComponent } from './product-list/product-list.component'

@NgModule({
	declarations: [
		AppComponent,
		ProductImageComponent,
		ProductPriceComponent,
		ProductDepartmentComponent,
		ProductItemComponent,
		ProductListComponent,
	],
	imports: [BrowserModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
