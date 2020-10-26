import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
// import { Observable, zip } from "rxjs";
import {
  zip,
  unzip,
  unzipAssets,
  subscribe,
  zipWithPassword
} from "react-native-zip-archive";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public data: any;
  constructor(private _http: HttpClient) {}

  targetPath = `../test.zip`;
  sourcePath = "../";
  password = "password";
  encryptionType = "STANDARD"; //possible values: AES-256, AES-128, STANDARD. default is STANDARD

  public makeRequests(): void {
    zipWithPassword(
      this.sourcePath,
      this.targetPath,
      this.password,
      this.encryptionType
    )
      .then(path => {
        console.log(`zip completed at ${path}`);
      })
      .catch(error => {
        console.error(error);
      });
  }
}
