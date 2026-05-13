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
  },
  {
    id: '7',
    name: 'Bolsa Estruturada Bella',
    category: 'Acessórios',
    price: 890,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop',
    colors: ['#000000', '#8B4513'],
    description: 'Bolsa em couro legítimo com design arquitetônico, o toque final de poder para seu look.'
  },
  {
    id: '8',
    name: 'Brincos Geométricos Ouro',
    category: 'Acessórios',
    price: 320,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop',
    colors: ['#FFD700'],
    description: 'Brincos banhados a ouro 18k com design minimalista e sofisticado.'
  },
  {
    id: '9',
    name: 'Pulseira Rígida Minimalista',
    category: 'Acessórios',
    price: 280,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop',
    colors: ['#FFD700', '#C0C0C0'],
    description: 'Pulseira elegante e discreta, ideal para composições modernas e executivas.'
  },
  {
    id: '10',
    name: 'Bolsa Tote Executive',
    category: 'Acessórios',
    price: 950,
    image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=800&auto=format&fit=crop',
    colors: ['#000000', '#D2B48C'],
    description: 'Bolsa tote espaçosa e elegante, perfeita para carregar tudo o que você precisa com estilo.'
  },
  {
    id: '11',
    name: 'Brincos Argola Classic',
    category: 'Acessórios',
    price: 260,
    image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=800&auto=format&fit=crop',
    colors: ['#FFD700', '#C0C0C0'],
    description: 'Argolas clássicas com acabamento polido, um acessório indispensável para qualquer ocasião.'
  },
  {
    id: '12',
    name: 'Pulseira Elos Dourados',
    category: 'Acessórios',
    price: 340,
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=800&auto=format&fit=crop',
    colors: ['#FFD700'],
    description: 'Pulseira de elos robustos com brilho intenso, ideal para destacar o pulso com sofisticação.'
  }
];
