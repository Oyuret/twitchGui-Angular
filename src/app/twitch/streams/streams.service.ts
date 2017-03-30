import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Stream } from '../classes/stream';

@Injectable()
export class StreamsService {

  public getStreams(game: string, offset : number): Observable<Stream[]> {
    return this.http.get(`/api/twitch/streams?game=${game}&offset=${offset}`)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) : Stream[] {
    let body = res.json();

    let streams: Stream[] = [];

    for(let streamData of body.streams) {
      let stream: Stream = {
        name : streamData.channel.name,
        displayName : streamData.channel.display_name,
        preview : streamData.preview.medium,
        status : streamData.channel.status,
        game: streamData.channel.game,
        language : streamData.channel.language,
        viewers : streamData.viewers,
        online: true
      };

      streams.push(stream);
    }

    return streams;

  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  constructor(private http: Http) { }

}
