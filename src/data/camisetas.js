
import Joma from '../assets/joma.jpg'
import Nike from '../assets/nike.png'
import Adidas from '../assets/adidas.png'
import Puma from '../assets/puma.jpg'
import TommyHilfiger from '../assets/tommy.jpg'
import CalvinKlain from '../assets/calvinKlain.jpg'

export const TALLAS = ['XS','S','M','L','XL','XXL']

export const camisetas =[
    {
        id: 1,
        nombre: 'Joma',
        precio: 25,
        frente: Joma,
        reverso: Joma,
        tallas: {XS:5, S:2, M:8, L:0, XL:3, XXL:1 },
    },
    {
        id: 2,
        nombre: 'Nike',
        precio: 85.99,
        frente: Nike,
        reverso: Nike,
        tallas: {XS:2, S:5, M:0, L:4, XL:1, XXL:3 },
    },
    {
        id: 3,
        nombre: 'Adidas',
        precio: 85.99,
        frente: Adidas,
        reverso: Adidas,
        tallas: {XS:1, S:2, M:5, L:3, XL:0, XXL:9 },
    },
    {
        id: 4,
        nombre: 'Puma',
        precio: 50,
        frente: Puma,
        reverso: Puma,
        tallas: {XS:1, S:0, M:6, L:12, XL:9, XXL:4 },
    },
    {
        id: 5,
        nombre: 'Tommy Hilfiger',
        precio: 89.90,
        frente: TommyHilfiger,
        reverso: TommyHilfiger,
        tallas: {XS:2, S:5, M:0, L:4, XL:1, XXL:3 },
    },
    {
        id: 6,
        nombre: 'Calvin Klain',
        precio: 80.90,
        frente: CalvinKlain,
        reverso: CalvinKlain,
        tallas: {XS:1, S:3, M:2, L:5, XL:10, XXL:7 },
    },
]