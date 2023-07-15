import screenFile1_1 from '../../assets/screenshotGames/01/01.jpg'
import screenFile1_2 from '../../assets/screenshotGames/01/02.jpg'
import screenFile1_3 from '../../assets/screenshotGames/01/03.jpg'

import screenFile2_1 from '../../assets/screenshotGames/02/01.jpg'
import screenFile2_2 from '../../assets/screenshotGames/02/02.jpg'
import screenFile2_3 from '../../assets/screenshotGames/02/03.jpg'

import screenFile3_1 from '../../assets/screenshotGames/03/01.jpg'
import screenFile3_2 from '../../assets/screenshotGames/03/02.jpg'
import screenFile3_3 from '../../assets/screenshotGames/03/03.jpg'

import screenFile4_1 from '../../assets/screenshotGames/04/01.jpg'
import screenFile4_2 from '../../assets/screenshotGames/04/02.jpg'
import screenFile4_3 from '../../assets/screenshotGames/04/03.jpg'

import screenFile5_1 from '../../assets/screenshotGames/05/01.jpg'
import screenFile5_2 from '../../assets/screenshotGames/05/02.jpg'
import screenFile5_3 from '../../assets/screenshotGames/05/03.jpg'

import screenFile6_1 from '../../assets/screenshotGames/06/01.jpg'
import screenFile6_2 from '../../assets/screenshotGames/06/02.jpg'
import screenFile6_3 from '../../assets/screenshotGames/06/03.jpg'

import screenFile7_1 from '../../assets/screenshotGames/07/01.jpg'
import screenFile7_2 from '../../assets/screenshotGames/07/02.jpg'
import screenFile7_3 from '../../assets/screenshotGames/07/03.jpg'

import screenFile8_1 from '../../assets/screenshotGames/08/01.jpg'
import screenFile8_2 from '../../assets/screenshotGames/08/02.jpg'
import screenFile8_3 from '../../assets/screenshotGames/08/03.jpg'

import screenFile9_1 from '../../assets/screenshotGames/09/01.jpg'
import screenFile9_2 from '../../assets/screenshotGames/09/02.jpg'
import screenFile9_3 from '../../assets/screenshotGames/09/03.jpg'

import screenFile10_1 from '../../assets/screenshotGames/10/01.jpg'
import screenFile10_2 from '../../assets/screenshotGames/10/02.jpg'
import screenFile10_3 from '../../assets/screenshotGames/10/03.jpg'

import screenFile11_1 from '../../assets/screenshotGames/11/01.jpg'
import screenFile11_2 from '../../assets/screenshotGames/11/02.jpg'
import screenFile11_3 from '../../assets/screenshotGames/11/03.jpg'

import screenFile12_1 from '../../assets/screenshotGames/12/01.jpg'
import screenFile12_2 from '../../assets/screenshotGames/12/02.jpg'
import screenFile12_3 from '../../assets/screenshotGames/12/03.jpg'

export type GameDataType = {
    name: string,
    description: string,
    releaseYear: number,
    developer: string,
    genre: string,
    ageRating: string,
    price: string,
    salePercent: number,
    screenFiles: string[]
}

export const gameData : GameDataType[] = [
    {
        name: "Assassin's Creed Rogue",
        description: "Apresentando Assassin’s Creed® Rogue, o capítulo mais sombrio da franquia Assassin’s Creed® já produzido. No papel de Shay, você irá viver a lenta transformação de Assassino a caçador de Assassinos. Siga sua própria convicção e parta para uma jornada extraordinária pela cidade de Nova Iorque, pelo vale do Rio Selvagem, até as águas geladas do Atlântico Norte, em busca do seu objetivo final: destruir os Assassinos.",
        releaseYear: 2015,
        developer: "Ubisoft",
        genre: "Ação",
        ageRating: "+18",
        price: "149.00",
        salePercent: 25,
        screenFiles: [screenFile1_1, screenFile1_2, screenFile1_3]
    },
    {
        name: "Call of Duty Modern Warfare",
        description: "Experimente uma Campanha visceral ou monte sua equipe em uma derradeira experiência online com diversos desafios de Operações Especiais e uma mistura de mapas e modos Multijogador.",
        releaseYear: 2023,
        developer: "Activision",
        genre: "Ação/Aventura",
        ageRating: "+18",
        price: "120.90",
        salePercent: 25,
        screenFiles: [screenFile2_1, screenFile2_2, screenFile2_3]
    },
    {
        name: "Skyrim",
        description: "Vencedor de mais de 200 prêmios de Jogo do Ano, Skyrim Special Edition dá vida à fantasia épica com detalhes impressionantes. A Edição Especial inclui o jogo aclamado pela crítica e complementos com recursos totalmente novos, como arte e efeitos remasterizados, raios divinos volumétricos, profundidade de campo dinâmica, reflexos no espaço da tela e muito mais. Skyrim Special Edition também traz todo o poder dos mods para o PC e consoles. Novas missões, ambientes, personagens, diálogos, armaduras, armas e muito mais – com os Mods, não há limites para o que você pode experimentar.",
        releaseYear: 2016,
        developer: "Bethesda",
        genre: "RPG",
        ageRating: "+18",
        price: "230.00",
        salePercent: 5,
        screenFiles: [screenFile3_1, screenFile3_2, screenFile3_3]
    },
    {
        name: "God of War Ragnarok",
        description: "Com a vingança contra os deuses do Olimpo em um passado distante, Kratos agora vive como um mortal no reino dos deuses e monstros nórdicos. É nesse mundo duro e implacável que ele deve lutar para sobreviver... e ensinar seu filho a fazer o mesmo.",
        releaseYear: 2022,
        developer: "Santa Monica Studio",
        genre: "Ação/Aventura",
        ageRating: "+18",
        price: "190.50",
        salePercent: 15,
        screenFiles: [screenFile4_1, screenFile4_2, screenFile4_3]
    },
    {
        name: "Death Stranding",
        description: "Do lendário diretor Hideo Kojima, surge uma experiência que desafia gêneros, ainda maior em DIRECTOR’S CUT. No futuro, um evento misterioso conhecido como Death Stranding abriu uma passagem entre os vivos e os mortos, resultando em criaturas grotescas do pós-vida andando pelo mundo arruinado, marcado por uma sociedade desolada. Jogando como Sam Bridges, sua missão é entregar esperança à humanidade ao conectar os sobreviventes de uma América devastada. Você conseguirá reunir este mundo destruído, um passo de cada vez?",
        releaseYear: 2022,
        developer: "Kojima Productions",
        genre: "Ação/Aventura",
        ageRating: "+14",
        price: "250.00",
        salePercent: 5,
        screenFiles: [screenFile5_1, screenFile5_2, screenFile5_3]
    },
    {
        name: "Deliver Us Mars",
        description: "Deliver Us Mars é uma aventura de ficção científica com atmosfera imersiva que leva você em uma missão de alto risco e cheia de suspense para recuperar as ARCAs, naves-colônia roubadas pelos membros do misterioso Outward.",
        releaseYear: 2023,
        developer: "KeokeN Interactive",
        genre: "Indie",
        ageRating: "+12",
        price: "100.00",
        salePercent: 12,
        screenFiles: [screenFile6_1, screenFile6_2, screenFile6_3]
    },
    {
        name: "SpongeBob: Battle for Bikini Bottom",
        description: "Estão prontas, crianças? O clássico cult está de volta, recriado em todo seu esplendor esponjístico! Joguem como Bob Esponja, Patrick e Sandy e mostrem ao Plankton que vale mais a pena trabalhar para o Sr. Siriguejo.",
        releaseYear: 2020,
        developer: "Purple Lamp",
        genre: "Casual",
        ageRating: "Nenhuma",
        price: "170.90",
        salePercent: 10,
        screenFiles: [screenFile7_1, screenFile7_2, screenFile7_3]
    },
    {
        name: "The Last of Us Part II",
        description: "Em uma civilização devastada, em que infectados e sobreviventes veteranos estão à solta, Joel, um protagonista abatido, é contratado para tirar uma garota de 14 anos, Ellie, de uma zona de quarentena militar. No entanto, o que começa como um pequeno serviço se transforma em uma jornada brutal através do país.",
        releaseYear: 2022,
        developer: "Naughty Dog",
        genre: "Aventura",
        ageRating: "+18",
        price: "79.99",
        salePercent: 30,
        screenFiles: [screenFile8_1, screenFile8_2, screenFile8_3]
    },
    {
        name: "Watch Dogs",
        description: "Tudo o que é preciso é o toque de um dedo. Nós nos conectamos com amigos. Compramos os mais recentes gadgets e equipamentos. Nós descobrimos o que está acontecendo no mundo. Mas com o mesmo toque simples, projetamos uma sombra cada vez mais expansiva. A cada conexão, deixamos um rastro digital que rastreia todos os nossos movimentos e marcos, todos os nossos gostos e desgostos. E não são apenas pessoas. Hoje, todas as grandes cidades estão conectadas em rede. As infraestruturas urbanas são monitoradas e controladas por sistemas operacionais complexos.",
        releaseYear: 2014,
        developer: "Ubisoft",
        genre: "Ação/Aventura",
        ageRating: "+14",
        price: "180.00",
        salePercent: 15,
        screenFiles: [screenFile9_1, screenFile9_2, screenFile9_3]
    },
    {
        name: "Far Cry 4",
        description: "Escondido nas alturas do Himalaia está Kyrat, um país mergulhado em tradições e na violência. Você é Ajay Ghale. Ao viajar para Kyrat para realizar o último desejo de sua mãe, você se depara com uma guerra civil que tenta derrubar o regime tirano do ditador Pagan Min.",
        releaseYear: 2014,
        developer: "Ubisoft",
        genre: "Ação/Aventura",
        ageRating: "+12",
        price: "120.00",
        salePercent: 20,
        screenFiles: [screenFile10_1, screenFile10_2, screenFile10_3]
    },
    {
        name: "Grand Theft Auto V",
        description: "Quando um malandro de rua, um ladrão de bancos aposentado e um psicopata aterrorizante se envolvem com alguns dos criminosos mais assustadores e loucos do submundo, o governo dos EUA e a indústria do entretenimento, eles devem realizar golpes ousados para sobreviver nessa cidade implacável onde não podem confiar em ninguém, nem mesmo um no outro.",
        releaseYear: 2015,
        developer: "Rockstar Games",
        genre: "Ação/Aventura",
        ageRating: "+16",
        price: "152.50",
        salePercent: 7,
        screenFiles: [screenFile11_1, screenFile11_2, screenFile11_3]
    },
    {
        name: "Life is Strange 2",
        description: "Após um trágico incidente, os irmãos Sean e Daniel Diaz fogem de casa. Com medo da polícia e tendo que esconder o novo poder telecinético de Daniel – ele é capaz de mover objetos com a mente – os dois decidem viajar para a cidade natal do pai, Puerto Lobos, no México, em busca de segurança.",
        releaseYear: 2018,
        developer: "DONTNOD Entertainment",
        genre: "Aventura",
        ageRating: "+14",
        price: "127.00",
        salePercent: 22,
        screenFiles: [screenFile12_1, screenFile12_2, screenFile12_3]
    }
]