"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LikeComponent = /** @class */ (function () {
    function LikeComponent(_numberOfLikes, _liked) {
        this._numberOfLikes = _numberOfLikes;
        this._liked = _liked;
    }
    LikeComponent.prototype.like = function () {
        /* if(this.liked){
            this.liked = false;
            this.numberOfLikes--;
            console.log('You have disliked the post, the nubmer of like ' + this.Likes)
        } else{
            this.numberOfLikes++;
            this.liked = true;
            console.log('You have liked the post, the nubmer of likes now '+ this.Likes)
        } */
        this._numberOfLikes = (this._liked) ? -1 : +1;
        this._liked = !this._liked;
    };
    Object.defineProperty(LikeComponent.prototype, "likes", {
        get: function () {
            return this._numberOfLikes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LikeComponent.prototype, "liked", {
        get: function () {
            return this._liked;
        },
        enumerable: true,
        configurable: true
    });
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
