import { Component } from '@angular/core';
import { WordpressService } from '../wordpress.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  posts: {
    ID: number;
    title: string;
    content: string;
    date: string;
  }[] = [];
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
