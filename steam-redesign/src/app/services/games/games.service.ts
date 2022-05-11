import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class GamesService{
    private urlBase = 'https://steam-redesign.herokuapp.com/';

    constructor(private httpClient: HttpClient){
    }

    getGames(){
        return this.httpClient.get(`${this.urlBase}allGames`)
    }

    getGameInfo(id:Number){
        return this.httpClient.get(`${this.urlBase}/game/?id=${id}`);
    }
}