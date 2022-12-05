import { Injectable } from '@angular/core';
import { Comida } from 'src/app/shared/models/Comida';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root',
})
export class FoodService {

  constructor() {}

  buscarTodos(): Comida[] {
    return [
      {
        id: 1,
        nome: 'Batata Frita',
        tempoDePreparo: '10-20',
        preco: 15,
        favorito: false,
        origem: 'Belgica',
        estrelas: 4.5,
        imageUrl: '/assets/images/comida1.jpg',
        tags: ['FastFood', 'Batata Frita', 'Frito'],
      },
      {
        id: 2,
        nome: 'Hamburguer',
        preco: 20,
        tempoDePreparo: '20-30',
        favorito: true,
        origem: 'Estados Unidos',
        estrelas: 4.7,
        imageUrl: '/assets/images/comida2.jpg',
        tags: ['FastFood', 'Hamburguer'],
      },
      {
        id: 3,
        nome: 'Lasanha',
        preco: 40,
        tempoDePreparo: '50-70',
        favorito: false,
        origem: 'Italia',
        estrelas: 3.5,
        imageUrl: '/assets/images/comida3.jpg',
        tags: ['Comida Italiana', 'Lasanha'],
      },
      {
        id: 4,
        nome: 'Pastel Frito',
        preco: 20,
        tempoDePreparo: '30-40',
        favorito: true,
        origem: 'Brasil',
        estrelas: 3.3,
        imageUrl: '/assets/images/comida4.jpg',
        tags: ['Frito', 'Pastel'],
      },
      {
        id: 5,
        nome: 'Salada',
        preco: 5,
        tempoDePreparo: '10-15',
        favorito: false,
        origem: 'Persas',
        estrelas: 3.0,
        imageUrl: '/assets/images/comida5.jpg',
        tags: ['Saudavel', 'Salada', 'Verduras'],
      },
      {
        id: 6,
        nome: 'Pizza',
        preco: 40,
        tempoDePreparo: '40-50',
        favorito: false,
        origem: 'Italia',
        estrelas: 4.0,
        imageUrl: '/assets/images/comida6.jpg',
        tags: ['FastFood', 'Pizza'],
      },
      {
        id: 7,
        nome: 'Xis Completo',
        preco: 25,
        tempoDePreparo: '40-50',
        favorito: false,
        origem: 'Rio Grande do Sul',
        estrelas: 4.0,
        imageUrl: '/assets/images/comida7.jpg',
        tags: ['FastFood', 'Xis'],
      },
    ];
  }

  buscarComidaPeloBuscador(buscador:string): Comida[] {
    return this.buscarTodos().filter((comida) => comida.nome.toLowerCase().includes(buscador.toLowerCase()));
  }

  buscarTodasTags():Tag[]{
    return [
      { nome: 'All', contagem: '7' },
      { nome: 'FastFood', contagem: '4' },
      { nome: 'Frito', contagem: '2' },
      { nome: 'Xis', contagem: '1' },
      { nome: 'Pizza', contagem: '1' },
      { nome: 'Hamburguer', contagem: '1' },
      { nome: 'Pastel', contagem: '1' },
      { nome: 'Saudavel', contagem: '1' },
    ];
  }

  buscarComidaPelaTag(tag: string): Comida[] {
    return tag == 'All' ? this.buscarTodos() : this.buscarTodos().filter((comida) => comida.tags?.includes(tag));
  }
}
