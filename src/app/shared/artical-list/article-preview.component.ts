import { Component, Input } from "@angular/core";
import { Article } from "../../core/models/article.model";
import { ArticleMetaComponent } from "./article-meta.component";
import { FavoriteButtonComponent} from "../favorite-buttons/favorite-buttons.component";
import { RouterLink } from "@angular/router";
import { NgForOf } from "@angular/common";

@Component({
  selector: "app-article-preview",
  templateUrl: "./article-preview.component.html",
  imports: [ArticleMetaComponent, RouterLink, NgForOf,FavoriteButtonComponent],
  standalone: true,
})
export class ArticlePreviewComponent {
  @Input() article!: Article;

  toggleFavorite(favorited: boolean): void {
    this.article.favorited = favorited;

    if (favorited) {
      this.article.favoritesCount++;
    } else {
      this.article.favoritesCount--;
    }
  }
}
