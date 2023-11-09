import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { AuthComponent } from './core/auth/auth.component';
import { ArticleCommentComponent } from './core/feature/article/article-comment/article-comment.component';
import { ArticleComponent } from './core/feature/article/article/article.component';
import { EditorComponent } from './feature/editor/editor.component';
import { HomeComponent } from './feature/home/home.component';
import { ProfileComponent } from './feature/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    AuthComponent,
    ArticleCommentComponent,
    ArticleComponent,
    EditorComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
