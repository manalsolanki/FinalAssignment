import { equal } from "assert"; 
import{details} from "../main.js";
 const number = details[1];
describe('number',()=>{
    it('Should be equal to ',()=>{
        equal(number,"n01397767");
    })
})