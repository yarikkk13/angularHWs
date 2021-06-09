import {Component, OnInit} from '@angular/core';
import {DataTransferService} from "../../../../services/data-transfer.service";
import {IComment} from "../../../../models/comment";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: IComment[]
  chosenComment: IComment;

  constructor(private dataTransfer: DataTransferService,
              private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.httpClient.get<IComment[]>('https://jsonplaceholder.typicode.com/comments')
      .subscribe(value => this.comments = value)
  }

  xxx(z: IComment) {
    this.chosenComment = z

  }
}
