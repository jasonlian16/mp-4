export type CatImageTypes={
    id:string,
    url:string, 
    width:number,
    height:number,
    breeds:Breed[]
}

type Breed={
    id:string,
    name:string,
    origin:string,
    life_span:string
}

