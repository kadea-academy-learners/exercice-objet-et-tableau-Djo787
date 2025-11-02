// 1. Crée un tableau nommé `baseDeDonnees` qui contiendra des objets représentant des utilisateurs.
//    Chaque utilisateur doit avoir les propriétés suivantes :
//    - id: number (identifiant unique)
//    - nom: string
//    - email: string
//    - password: string
//    - estConnecte: boolean (indique si l'utilisateur est connecté)
//    - estBloque: boolean (indique si l'utilisateur est bloqué)

// 2. Écris une fonction `signUp(nom, email, password, confirmPassword)` qui :
//    - Vérifie si l'email existe déjà dans `baseDeDonnees`. Si oui, retourne un message d'erreur.
//    - Vérifie si `password` et `confirmPassword` sont identiques. Si non, retourne un message d'erreur.
//    - Sinon, ajoute le nouvel utilisateur à `baseDeDonnees` (avec un id unique, estConnecte à false, estBloque à false) et retourne l'objet utilisateur créé.

// 3. Écris une fonction `login(email, password)` qui :
//    - Recherche l'utilisateur correspondant à l'email dans `baseDeDonnees`.
//    - Si l'utilisateur n'existe pas ou si le mot de passe est incorrect, retourne un message d'erreur.
//    - Si l'utilisateur est bloqué (`estBloque` à true), retourne un message d'erreur spécifique.
//    - Sinon, met à jour `estConnecte` à true pour cet utilisateur et retourne l'objet utilisateur connecté.

const baseDeDonnees = [];

function signUp(nom, email, password, confirmPassword) {
	  const userExist = baseDeDonnees.find(user => user.email === email);
  if (userExist) {
    return "Erreur : cet email est déjà utilisé.";
    }
}

function login() {
    if (password !== confirmPassword) {
        return "Erreur : les mots de passe ne correspondent pas.";
    }
	
}

  // Créer un nouvel utilisateur avec un id unique
  const nouvelUtilisateur = {
    id: baseDeDonnees.length + 1, // simple incrément pour l'identifiant
    nom: nom,
    email: email,
    password: password,
    estConnecte: false,
    estBloque: false
  };

  // Ajouter l'utilisateur à la base
  baseDeDonnees.push(nouvelUtilisateur);

  // Retourner l'utilisateur créé
  return nouvelUtilisateur;


// 3️⃣ Fonction pour se connecter (login)
function login(email, password) {
  // Rechercher l'utilisateur par email
  const utilisateur = baseDeDonnees.find(user => user.email === email);

  // Si l'utilisateur n'existe pas
  if (!utilisateur) {
    return "Erreur : utilisateur non trouvé.";
  }

  // Si le mot de passe est incorrect
  if (utilisateur.password !== password) {
    return "Erreur : mot de passe incorrect.";
  }

  // Si l'utilisateur est bloqué
  if (utilisateur.estBloque) {
    return "Erreur : ce compte est bloqué.";
  }

  // Si tout est bon → on connecte l'utilisateur
  utilisateur.estConnecte = true;

  return utilisateur;
}

module.exports = { baseDeDonnees, signUp, login };
