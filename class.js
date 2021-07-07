// --class declaration and set Class "property and value" through "constructor" ---//
class StuentInfo{
    constructor(sName,sId,sCGPA,sBlood,sTelephone){
        this.name = sName;
        this.ID = sId;
        this.SGPA = sCGPA;
        this.BloodGroup = sBlood;
        this.Telephone = sTelephone;
        this.University = "Daffodil International University";
    }
}

const student1 = new StuentInfo("Nishat Hasan Muktar","183-15-2298",3.44,"O+","016010-91999");     //--Student1 "object create" and object info come from "class" ---//
const student2 = new StuentInfo("Anzamul Haque Akash","183-15-2297",3.44,"O+","016010-91999");
const student3 = new StuentInfo("Mahfuzur Rahman","183-15-2286",3.44,"O+","016010-91999");
console.log(student1,student2,student3);