import { Component, OnInit } from '@angular/core';

class ImageCaption {
  imagePath: string;
  heading: string;
  subCaption: string;
  constructor() {
  }
}

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.css']
})
export class ProfilePictureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
