import { IDiagnoticCenter } from "./Pathology";

export interface IdiagnoticTest{
    id:number,
    testName:string,
    testPrice:number,
    normalValue:string,
    unit:string,
    availableInCenters:IDiagnoticCenter[]
}