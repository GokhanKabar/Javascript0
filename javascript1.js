class Vehicule {

    constructor(name){
       this.name=name || "Vehicule";
    }

}

class Voiture extends Vehicule {
    
    constructor(name) {
        super(name || "Voiture");
        this.portes=4;
        this.roues=4;
        this.moteur={
puissance : 60,
marche:false
        };
        this.voyants = {
            marche :false
    }
    }

    contact(){
        console.log("on allume le contact");
        this.allumerLesVoyants();
    }
     
    allumerLesVoyants(){
        console.log("les voyants s'allume");
        this.voyants.marche=true;
    }

    eteindreLesVoyants(){
        console.log("les voyants s'eteind");
        this.voyants.marche=false
    }

    decontact(){
        console.log("on coupe le contact");
        this.eteindreLesVoyants();
    }

    demarre(){
        console.log("demarre le moteur");
        this.moteur.marche = true;

    }
    coupe(){
        console.log("coupe le moteur");
        this.moteur.marche = false;
    }
}

class Sportive extends Voiture {

    constructor(name){
        super(name || "Sportive");
        this.portes=4;
        this.moteur.puissance = 450;
    }
}

const test_vehicule = () => {

    console.log("test_vehicule");
    let maVoiture = new Sportive("maVoiture");
    console.log(maVoiture.moteur.marche);

    maVoiture.contact();
    maVoiture.demarre();

    let usine = [];
    for (let i =0 ; i < 1000; i++) usine.push(new Sportive());
    console.log(usine);

};