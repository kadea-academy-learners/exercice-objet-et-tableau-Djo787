// Crée une fonction whoIsAdmin qui affiche les noms des utilisateurs qui sont admin qui prends en paramètre un tableau d'objet d'utilisateurs .
// Chaque objet utilisateur a les propriétés suivantes :
// - nom (string)
// - age (number)
// - estAdmin (boolean)
// La fonction doit retourner un tableau contenant les noms des utilisateurs qui sont admin.


function whoIsAdmin(utilisateurs) {
  return utilisateurs
    .filter(user => user.estAdmin)
    .map(user => user.nom);
}


// On aurait bien pu le faire en utilisant la boucle for
  

  //function whoIsAdmin(utilisateurs) {
  //const nomsAdmins = [];


  //for (let i = 0; i < utilisateurs.length; i++) {
    //const user = utilisateurs[i]; 

    //if (user.estAdmin === true) {
      //nomsAdmins.push(user.nom);
    //}
  //}

  // On retourne le tableau final des noms d’admins
 // return nomsAdmins;
//}

module.exports = {
	whoIsAdmin,
};


