import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { BlogPostTileComponent } from './blog-post-tile/blog-post-tile.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { TruncatePipe } from './truncate.pipe';
import { PaginatorComponent } from './paginator/paginator.component';

import {BlogDataService} from './blog-data.service';
import { AppHighlightDirective } from './app-highlight.directive';
import { CardComponent } from './card/card.component';
import { ShellComponent } from './shell/shell.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogPostTileComponent,
    BlogListComponent,
    TruncatePipe,
    PaginatorComponent,
    AppHighlightDirective,
    CardComponent,
    ShellComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TruncatePipe,
             ],
  bootstrap: [AppComponent]
})
export class AppModule { }
