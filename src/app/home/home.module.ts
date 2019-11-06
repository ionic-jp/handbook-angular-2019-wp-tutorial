import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { HomePage } from './home.page';
import { ArticlePage } from '../article/article.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      },
      {
        path: ':articleId',
        component: ArticlePage
      }
    ])
  ],
  declarations: [HomePage, ArticlePage]
})
export class HomePageModule {}
