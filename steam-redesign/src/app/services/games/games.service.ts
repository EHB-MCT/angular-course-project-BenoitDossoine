import { map } from 'rxjs/operators';
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

    getFeaturedGames():any{
        return this.httpClient.get(`${this.urlBase}featuredGames`)
        .pipe(map((response:any)=>{
            console.log(response.games);
            return(response?.games || []).map((game:any)=>{
                return{
                    name: game.name,
                    id: game.team_appid,
                    description: game.short_description,
                    header: game.header_image,
                }
            });
        }))
    }

    getGamesByGenre(genre:string):any{
        return this.httpClient.get(`${this.urlBase}gamesByGenre?genre=${genre}`)
        .pipe(map((response:any)=>{
            return(response?.results || []).slice(0,3).map((game:any)=>{
                return{
                    name: game.name,
                    id: game.id,
                    image: game.background_image
                }
            });
        }))
    }

    getDetailPage(id:any):any{
        return this.httpClient.get(`${this.urlBase}gameDetails?id=${id}`)
        .pipe(map((response:any)=>{
            return response;
        }))
    }
}