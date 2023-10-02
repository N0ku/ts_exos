export class Livre{
    titre: string;
    auteur: string;
    ISBN: string;
    nombreDePages: number;
    estEmprunte: boolean;

    constructor(titre: string, auteur: string, ISBN: string, nombreDePages: number, estEmprunte: boolean){
        this.titre = titre;
        this.auteur = auteur;
        this.ISBN = ISBN;
        this.nombreDePages = nombreDePages;
        this.estEmprunte = estEmprunte;
    }
    
    emprunter(){
        this.estEmprunte = true;
    }

    retourner(){
        this.estEmprunte = false;
    }
}

export class Bibliotheque{
    private livres: Livre[];
    private etudiants: Etudiant[];

    constructor(livres: Livre[], etudiants: Etudiant[]){
        this.livres = livres;
        this.etudiants = etudiants;
    }

    ajouterLivre(livre: Livre){
        this.livres.push(livre);
    }

    chercherParTitre(titre: string){
        return this.livres.filter(livre => livre.titre === titre);
    }

    emprunterLivre(ISBN: string){
        this.livres.forEach(livre => {
            if(livre.ISBN === ISBN){
                livre.emprunter();
            }
        });
    }

    retournerLivre(ISBN: string){
        this.livres.forEach(livre => {
            if(livre.ISBN === ISBN){
                livre.retourner();
            }
        });
    }

    ajouterEtudiant(etudiant: Etudiant){
        this.etudiants.push(etudiant);
    }

    recupererEtudiant(numeroEtudiant: string){
        return this.etudiants.filter(etudiant => etudiant.numeroEtudiant === numeroEtudiant)[0];
    }
    
}

export class Etudiant{
    nom: string;
    prenom: string;
    numeroEtudiant: string;
    livresEmpruntes: Livre[];

    constructor(nom: string, prenom: string, numeroEtudiant: string, livresEmpruntes: Livre[]){
        this.nom = nom;
        this.prenom = prenom;
        this.numeroEtudiant = numeroEtudiant;
        this.livresEmpruntes = livresEmpruntes;
    }

    emprunterLivre(livre: Livre){
        this.livresEmpruntes.push(livre);
    }

    rendreLivre(livre: Livre){
        this.livresEmpruntes = this.livresEmpruntes.filter(livreEmprunte => livreEmprunte.ISBN !== livre.ISBN);
    }
}

const bibliotheque = new Bibliotheque([],[]);

 for (let index = 0; index < 20; index++) {
    const livre = new Livre(`Titre ${index}`, `Auteur ${index}`, `ISBN ${index}`, index, false);
    const etudiant = new Etudiant(`Nom ${index}`, `Prenom ${index}`, `Numero ${index}`, []);
    bibliotheque.ajouterEtudiant(etudiant);
    bibliotheque.ajouterLivre(livre);
}
 
