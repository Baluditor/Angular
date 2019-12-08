export class LikeComponent{    
    constructor(private _numberOfLikes?: number, private _liked?: boolean){        
    }
    
    like(){
        /* if(this.liked){
            this.liked = false;
            this.numberOfLikes--;
            console.log('You have disliked the post, the nubmer of like ' + this.Likes)
        } else{
            this.numberOfLikes++;
            this.liked = true; 
            console.log('You have liked the post, the nubmer of likes now '+ this.Likes)
        } */

        this._numberOfLikes = (this._liked) ?  -1 : +1;
        this._liked = !this._liked;
    }

    get likes() {
        return this._numberOfLikes;
    }

    get liked() {
        return this._liked
    }
}