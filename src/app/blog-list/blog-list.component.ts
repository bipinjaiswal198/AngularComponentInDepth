import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild, QueryList, ViewChildren, ChangeDetectionStrategy, ɵisDefaultChangeDetectionStrategy } from '@angular/core';
import { BlogPost } from '../blog-post';
import { BlogPostTileComponent } from '../blog-post-tile/blog-post-tile.component';
import { BlogDataService } from '../blog-data.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit,OnChanges {
  blogpost:BlogPost[][];
  currentPage:number;
  @ViewChildren('tile') blogPostChildComponent:QueryList<BlogPostTileComponent>;
   testValue:string="inivalue"; //for testing purpose only
  constructor(private blogDataService:BlogDataService) {

   }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.testValue);
    console.log("I am here");
  }

   

  ngOnInit(): void {
    this.currentPage=0;
    this.blogpost=this.blogDataService.getData();
  }
    

  updatePage(newPage){
    this.currentPage=newPage;
  }

  expandAll(){
    this.blogPostChildComponent.forEach( e=> e.showFullSummary());
  }

  FavAll(){
    this.blogpost[this.currentPage]=this.blogpost[this.currentPage].map(post=>({
      title:post.title,
      summary:post.summary,
      isFav:true
    }));
  }

  

}
