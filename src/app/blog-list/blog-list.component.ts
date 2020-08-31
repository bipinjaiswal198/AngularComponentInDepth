import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BlogPost } from '../blog-post';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit,OnChanges {
  blogpost:BlogPost[]=[];
   testValue:string="inivalue"; //for testing purpose only
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.testValue);
    console.log("I am here");
  }

   

  ngOnInit(): void {
    this.blogpost.push(new BlogPost('blogpost1','summary1 for articulation of various things and cjdhdhdhh'));
    this.blogpost.push(new BlogPost('blogpost2','summary2 invaluable learning from this article will benefir for sure.'));
    this.blogpost.push(new BlogPost('blogpost3','summary3'));
  }

}
