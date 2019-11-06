import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { WordpressService } from '../wordpress.service';
import { IPost } from '../interfaces/post';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  posts: IPost[] = [];
  constructor(
    public wordpress: WordpressService,
    public loadingController: LoadingController,
  ) {}

  async ionViewDidEnter() {
    const loading = await this.loadingController.create({
      message: 'Loading...',
    });
    if (!this.posts.length) {
      await loading.present();
    }
    this.wordpress.getPosts()
      .subscribe(data => {
        this.posts = data['posts'];
        loading.dismiss();
      });
  }

  trackByFn(index, item): number {
    return item.ID;
  }
}
