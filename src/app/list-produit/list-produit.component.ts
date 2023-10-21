import { Component } from '@angular/core';
import { Produit } from '../modele/produit';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent {
produit:Produit[]=[{ id: 1,
  nom: "Product A",
  prix: 10.99,
  quantite: 50,
  urlImage: "./assets/image/impr.jpeg"},{id: 2,
  nom: "Product B",
  prix: 19.99,
  quantite: 30,
  urlImage: "./assets/image/pc.jpeg"},
  { id: 3,
  nom: "Product C",
  prix: 5.49,
  quantite: 100,
  urlImage:  "./assets/image/OIP.jpeg"}]

}
