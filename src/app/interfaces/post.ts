import { ContentChildren } from "@angular/core"

export interface Post {
    data:Children;
}

export interface Children {
    children:SinglePost[]
}

export interface SinglePost {
    title:string;
    thumbnail:string;
}