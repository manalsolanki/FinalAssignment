import { expect } from "chai";
import {details} from "../main.js";

describe('details object',()=>{
    it('should be an array and should include my name',()=>{
        expect(details).to.include('Manal Solanki');
    })
})