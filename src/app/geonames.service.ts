import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable()
export class GeonameService {
    name: string;
    geonameArr: any = [];
    names: any = [];
    ids: any = [];
    latitude: any;
    longitude: any;
    private _url = `http://34.73.198.86`;
    id: any;
    constructor(private http: HttpClient) { }

    getGeonames(name: any) {
        if (name == '' || !name) {
            return null;
        }
        console.log(this._url + `/geoName/${name}`);
        this.http.get<HttpResponse<[]>>(this._url + `/geoName/${name.toLowerCase()}/`).subscribe((res) => {
            if (res) {
                this.geonameArr = [];
                this.names = [];
                let i = 0;
                for (const data of res.hits.hits) {
                    this.geonameArr[i] = data._source.id + "," + data._source.name + "," + data._source.lat + "," + data._source.long;
                    this.names[i] = data._source.name;
                    this.id = this.geonameArr[i].split(',')[0];
                    this.name = this.geonameArr[i].split(',')[1];
                    this.latitude = this.geonameArr[i].split(',')[2];
                    this.longitude = this.geonameArr[i].split(',')[3];
                    i++;
                }
            }
        });
    }
}
