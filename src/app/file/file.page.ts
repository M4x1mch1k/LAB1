import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-file',
  templateUrl: './file.page.html',
  styleUrls: ['./file.page.scss'],
})
export class FilePage implements OnInit {

  data: any = [];
  data_subjects: any = [];
  showDetails: boolean[] = new Array(1000).fill(false);
  dataUrl = 'https://api.jsonbin.io/v3/b/64124454ace6f33a22ef79b0';
  loading: any;
  facility!: string;

  constructor(public loadingController:LoadingController){

  }

  async load(){
    this.loading = await this.loadingController.create({
      spinner: "bubbles",
      message: 'Loading...'
    });

    await this.loading.present();

    fetch(this.dataUrl).then(res => res.json())
      .then(json => {
        this.data = json;
        this.data = this.data.record;
        let i = 0;
        console.log(this.data[1]);
        while(this.data[i] != undefined){
          this.data_subjects.push(this.data[i][0]);
          i++;
        }
        this.loading.dismiss();
      });
  }

    toggleDetails(i:number){
      if(this.showDetails[i]){
        this.showDetails[i]=false;
      }else{
        this.showDetails[i]=true;
      }
    }

  ngOnInit() {
  }

}
