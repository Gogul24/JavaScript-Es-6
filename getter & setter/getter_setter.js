class Person {
    constructor(Fname, Lname) {
        this.Fname = Fname; // Use the setter
        this.Lname = Lname; // Use the setter
    }

    set Fname(newfname) {
        if (typeof newfname === "string" && newfname.length > 0) {
            this._Fname = newfname;
        } else {
            console.log('Enter a valid first name');
        }
    }

    set Lname(newLname) {
        if (typeof newLname === "string" && newLname.length > 0) {
            this._Lname = newLname;
        } else {
            console.log('Enter a valid last name');
        }
    }

    get Fname() {
        return this._Fname;
    }

    get Lname() {
        return this._Lname;
    }
}

const p1 = new Person("Gokul", "Jijo");
console.log(p1.Fname);
console.log(p1.Lname);
