import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewEncapsulation, ɵisDefaultChangeDetectionStrategy,ChangeDetectionStrategy } from '@angular/core';
import {BlogPost} from '../blog-post'
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
  
})
export class BlogPostTileComponent implements OnInit {

  @Input()  blogpost:BlogPost;
  fullSummary:string;
  constructor(private truncate:TruncatePipe) { }
  

  ngOnInit(): void {
    this.fullSummary=this.blogpost.summary;
    this.blogpost.summary=this.truncate.transform(this.blogpost.summary,30).toString();
  }

  showFullSummary(){
    this.blogpost.summary=this.fullSummary;
  }

  toggleFav(){
    this.blogpost.isFav=!this.blogpost.isFav;

  }

}
