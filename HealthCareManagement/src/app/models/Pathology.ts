export interface IPathology{
    id:number,
    name:string,
    contactNo:string,
    address:string,
    email:string,
    userName:string,
    password:string,
    availbaleTests:DiagnoticTest[]
}
export class DiagnoticTest{
 constructor(
     public id:number,
     public testName:string,
     public testPrice:number,
     public normalPrice:string,
     public test:Pathology[]
 ){}
}

export class Pathology{
    constructor(
        public id:number,
        public name:string,
        public contactNo:string,
        public email:string,
        public password:string,
        public address:string,
        public userName:string,
        public availbaleTests:DiagnoticTest[]
    ){}
}

export interface IDiagnoticCenter{
         id:number,
         name:string,
         contactNo:string,
         email:string,
         password:string,
         address:string,
         userName:string,
         availbaleTests:DiagnoticTest[]

}