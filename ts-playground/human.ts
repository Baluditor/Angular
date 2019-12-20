export class Human{
    public get hairColor(): string {
        return this._hair.color;
    }
    public set hairColor(value: string) {
        this._hair.color = value;
    }
    public set hairLength(value: string){
        this._hair.lenght = value;
    }
    public get hairLenght(){
        return this._hair.lenght
    }
    public get eyeColor(){
        return this._eyes.color
    }
    public set eyeColor(value: string){
        this._eyes.color = value;
    }
    public get eyeType(){
        return this._eyes.type;
    }
    public set eyeType(value: string){
        this._eyes.type = value;
    }
    public get weight(): number {
        return this._weight;
    }
    public set weight(value: number) {
        this._weight = value;
    }
    public get height(): number {
        return this._height;
    }
    public set height(value: number) {
        this._height = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    constructor(
        private _name: string,
        private _height: number,
        private _weight: number,
        private _hair: Hair,
        private _eyes: Eye,
    ){
    }
}

interface Hair{
    color: string,
    lenght: string
}

interface Eye{
    color: string,
    type: string
}
