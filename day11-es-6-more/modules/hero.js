import Person from "./person.js";

class Hero extends Person{
    title = "default title";
    firstname = "default firstname";
    lastname = "default lastname";
    #mission = "my secret mission";
    static version = 1001;
    constructor(htitle, hfname, hlname, hname){
        super(hname);
        this.title = htitle;
        this.firstname = hfname;
        this.lastname = hlname;
    } 
    fullname(){
        return this.firstname+" "+this.lastname;
    }
    static saypower(){
        return 7
    }
    get mission(){
        return this.#mission;
    }
    set mission(nmission){
        this.#mission = nmission;
    }
    sayname(){
        return this.name;
    }
};

export default Hero;