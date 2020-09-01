import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BlogPost } from '../blog-post';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit,OnChanges {
  blogpost:BlogPost[][];
  currentPage:number;
   testValue:string="inivalue"; //for testing purpose only
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.testValue);
    console.log("I am here");
  }

   

  ngOnInit(): void {
    this.currentPage=0;
    this.blogpost = [

      // Page 1

      [

        {

          title: 'Post 1',

          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis turpis at ipsum hendrerit, vel porttitor velit ultrices.'

        },

        {

          title: 'Post 2',

          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis turpis at ipsum hendrerit, vel porttitor velit ultrices.'

        },

        {

          title: 'Post 3',

          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis turpis at ipsum hendrerit, vel porttitor velit ultrices.'

        },

        {

          title: 'Post 4',

          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis turpis at ipsum hendrerit, vel porttitor velit ultrices.'

        }

      ],

      // Page 2

      [

        {

          title: 'Post 5',

          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis turpis at ipsum hendrerit, vel porttitor velit ultrices.'

        },

        {

          title: 'Post 6',

          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis turpis at ipsum hendrerit, vel porttitor velit ultrices.'

        },

        {

          title: 'Post 7',

          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis turpis at ipsum hendrerit, vel porttitor velit ultrices.'

        },

        {

          title: 'Post 8',

          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis turpis at ipsum hendrerit, vel porttitor velit ultrices.'

        }

      ],

      // Page 3

      [

        {

          title: 'Post 9',

          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis turpis at ipsum hendrerit, vel porttitor velit ultrices.'

        },

        {

          title: 'Post 10',

          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis turpis at ipsum hendrerit, vel porttitor velit ultrices.'

        },

        {

          title: 'Post 11',

          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis turpis at ipsum hendrerit, vel porttitor velit ultrices.'

        },

        {

          title: 'Post 12',

          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis turpis at ipsum hendrerit, vel porttitor velit ultrices.'

        }

      ]

    ];
  }

  updatePage(newPage){
    this.currentPage=newPage;
  }

}
