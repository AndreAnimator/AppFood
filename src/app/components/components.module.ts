import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { LoadingRestaurantsComponent } from './loading-restaurants/loading-restaurants.component';



@NgModule({
  declarations: [RestaurantComponent, LoadingRestaurantsComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [RestaurantComponent, LoadingRestaurantsComponent]
})
export class ComponentsModule { }
