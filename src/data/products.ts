/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  colors: string[];
  description: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Blazer Executivo Marinho',
    category: 'Blazers',
    price: 980,
    image: 'https://i.pinimg.com/236x/19/53/a3/1953a35c25ef8d5ecece0fee755a0b12.jpg',
    colors: ['#000080', '#1A1A1A', '#4A4A4A'],
    description: 'Blazer estruturado em lã fria, ideal para o ambiente coorporativo de alto padrão.'
  },
  {
    id: '2',
    name: 'Camisa de Seda Branca',
    category: 'Camisas',
    price: 640,
    image: 'https://m.media-amazon.com/images/I/41Q8S4t1ZzL._AC_SY1000_.jpg',
    colors: ['#FFFFFF', '#F5F5F5'],
    description: 'Camisa em seda pura com acabamento invisível, essencial para um visual office impecável.'
  },
  {
    id: '3',
    name: 'Calça Social Preta',
    category: 'Calças',
    price: 580,
    image: 'https://edexjeans.cdn.magazord.com.br/img/2025/01/produto/72779/05-calca-feminina-de-alfaiataria-pantalona-pesponto.jpeg',
    colors: ['#36454F', '#000000'],
    description: 'Corte reto clássico em alfaiataria premium, com vinco frontal e cintura alta.'
  },
  {
    id: '4',
    name: 'Blazer Cinza',
    category: 'Blazers',
    price: 1120,
    image: 'https://tse4.mm.bing.net/th/id/OIP.zdiUb3sP1PpouMB4HygiOgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
    colors: ['#808080', '#4B4B4B'],
    description: 'Elegância e textura em um blazer de corte moderno, perfeito para reuniões de negócios.'
  },
  {
    id: '5',
    name: 'Camisa Oxford Azure',
    category: 'Camisas',
    price: 490,
    image: 'https://static.kiabi.pt/images/camisa-oxford-com-corte-largo-azul-bvf46_1_hd5.jpg?width=800',
    colors: ['#F0F8FF', '#FFFFFF'],
    description: 'Corte slim em algodão egípcio, trazendo frescor e sofisticação ao dia a dia no escritório.'
  },
  {
    id: '6',
    name: 'Calça Alfaiataria Navy',
    category: 'Calças',
    price: 620,
    image: 'https://i.pinimg.com/originals/74/b4/fb/74b4fb7abe868d37d37998d7338b6f78.jpg?nii=t',
    colors: ['#000080', '#1C1C1C'],
    description: 'Peça versátil de alta durabilidade, combinando conforto e rigor estético.'
  }
];
