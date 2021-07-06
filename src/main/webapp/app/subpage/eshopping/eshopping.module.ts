import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PortfolioSharedModule } from 'app/shared/shared.module';
import { EshoppingComponent } from './eshopping.component';
import { eshoppingRoute } from './eshopping.route';

@NgModule({
  imports: [PortfolioSharedModule, RouterModule.forChild([eshoppingRoute])],
  declarations: [EshoppingComponent],
})
export class EshoppingModule {}
