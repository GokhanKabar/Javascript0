class Vehicule {
	constructor(name) {
		this.name = name || "Véhicule";
	}
}
class Velo extends Vehicule {
	constructor(name) {
		super();
		this.name = name || "Véhicule";
		this.roues = 2;
		this.pedale = {
				marche : false
		};
	}


demarre() {
	console.log("Commence à pédaler");
	this.pedale.marche = true;
}
arret() {
	console.log("Arrete de pédaler");
}
}


const test_velo = () => {
	console.log("vehicule");

	let monvelo = new Velo("mon vélo");
	console.log(monvelo.pedale.marche);

	monvelo.demarre();
	console.log(monvelo.pedale.marche);

	let usine =[];
	for(let i = 0; i < 10000; i++) usine.push(new Velo());
	console.log(usine);
};