import { Bibliotheque,Livre,Etudiant } from './exo3';

describe('bibliotheque', () => {
    let bibliotheque: Bibliotheque;
  
    beforeEach(() => {
        bibliotheque = new Bibliotheque([], []);        
    });
  
    it('should add a book to the library', () => {
      const livre = new Livre('Titre', 'Auteur', 'ISBN', 100, false);
      bibliotheque.ajouterLivre(livre);
      expect(bibliotheque.chercherParTitre('Titre')).toEqual([livre]);
    });
  
    it('should add a student to the library', () => {
      const etudiant = new Etudiant('Nom', 'Prenom', 'Numero', []);
      bibliotheque.ajouterEtudiant(etudiant);
      expect(bibliotheque.recupererEtudiant('Numero')).toEqual(etudiant);
    });
  
    it('should allow a student to borrow a book', () => {
      const livre = new Livre('Titre', 'Auteur', 'ISBN', 100, false);
      const etudiant = new Etudiant('Nom', 'Prenom', 'Numero', []);
      bibliotheque.ajouterLivre(livre);
      bibliotheque.ajouterEtudiant(etudiant);
      etudiant.emprunterLivre(livre);
      bibliotheque.emprunterLivre('ISBN');
      expect(etudiant.livresEmpruntes).toEqual([livre]);
      expect(livre.estEmprunte).toBe(true);
    });
  
    it('should allow a student to return a book', () => {
      const livre = new Livre('Titre', 'Auteur', 'ISBN', 100, false);
      const etudiant = new Etudiant('Nom', 'Prenom', 'Numero', [livre]);
      bibliotheque.ajouterLivre(livre);
      bibliotheque.ajouterEtudiant(etudiant);
      bibliotheque.retournerLivre('ISBN');
      etudiant.rendreLivre(livre);
      expect(etudiant.livresEmpruntes).toEqual([]);
      expect(livre.estEmprunte).toBe(false);
    });
  });