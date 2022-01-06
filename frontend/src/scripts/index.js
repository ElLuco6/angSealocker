// C'est bien de déclarer tes variables globales ici, mais tu ne les utilises pas
// déclare les avec var plutôt que const
// pour rappel:
// const : variable dont la valeur ne va pas changer (donc si tu l'initialise à [] il peut te renvoyer une erreur quand tu voudras modifier sa valeur)
var data = {};
// var express = require('express');
//var app = express();
// Dans l'ordre 


// 1) tous les imports
import * as partnerCtrl from './partner.js';

// 2) tu appelles les fonctions
data = await partnerCtrl.getPartner(); // commentaire

// car il va être executé avant le retour de ta requête AJAX. D'où l'usage d'une fonction asynchrone
console.log(data); // ça c'est pour toi, pour que tu vois la structure que tu as récupéré, et stocké dans la variable globale 

partnerCtrl.displayLogo(data);
