import { Component } from '@angular/core';
import { ParentChildStatus } from './type/type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-app';
  pureSingleComponentStatus: string = null;
  parentChildComponentStatus: ParentChildStatus = {
    parent: null,
    child: null
  };

  changePureSingleComponentStatus(status: string) {
    if (status == "create" && !this.pureSingleComponentStatus) {
      this.pureSingleComponentStatus = status;
    } else if (status == "update" && this.pureSingleComponentStatus) {
      this.pureSingleComponentStatus = status;
    } else if (status == "destroy" && this.pureSingleComponentStatus) {
      this.pureSingleComponentStatus = null;
    }
  }

  changeParentChildComponentStatus(status: string) {
    if (status == "create" && !this.parentChildComponentStatus.parent && !this.parentChildComponentStatus.child) {
      this.parentChildComponentStatus.parent = "create";
      this.parentChildComponentStatus.child = "create";
    } else if (status == "updateParent" && this.parentChildComponentStatus.parent) {
      this.parentChildComponentStatus.parent = "update";
    } else if (status == "updateChild" && this.parentChildComponentStatus.child) {
      this.parentChildComponentStatus.child = "update";
    } else if (status == "destroy" && this.parentChildComponentStatus.parent && this.parentChildComponentStatus.child) {
      this.parentChildComponentStatus.parent = null;
      this.parentChildComponentStatus.child = null;
    }
  }
}
