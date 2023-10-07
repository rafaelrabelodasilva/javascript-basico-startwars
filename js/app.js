const LIST = [
    {
        id: 1,
        nome: 'Mestre Yoda',
        avatar: 'images/yoda.png'
    },
    {
        id: 2,
        nome: 'Luke Skywalker',
        avatar: 'images/luke.png'
    },
    {
        id: 3,
        nome: 'Princesa Leia',
        avatar: 'images/leia.png'
    },
    {
        id: 4,
        nome: 'Han Solo',
        avatar: 'images/hansolo.png'
    },
    {
        id: 5,
        nome: 'Darth Vader',
        avatar: 'images/vader.png'
    },
    {
        id: 6,
        nome: 'Chewbacca',
        avatar: 'images/chewbacca.png'
    },
    {
        id: 7,
        nome: 'R2D2',
        avatar: 'images/r2d2.png'
    },
    {
        id: 8,
        nome: 'C3pO',
        avatar: 'images/c3po.png'
    }
]

const App = new Vue({ //Nova instância do Vue
    el: '#app',
    data: {
        title: 'Star Wars Lego',
        userName: 'Rafael Rabelo da Silva',
        characters: LIST,
        searchName: ''
    },
    methods: {
        like(userName) {
            alert(`O personagem ${userName} recebeu um like!`)
        },
        remove(id) {
            const list = this.characters

            const result = list.filter(item => {
                return item.id !== id
            })

            this.characters = result
        },
        search() {

            if (this.searchName === '') {
                return alert('O campo de busca é obrigatório.') //Função return aborta o restante do código caso caia nesta verificação
            }


            const list = this.characters = LIST //Carrega previamente todos os personagens

            const result = list.filter(item => { //Filtramos para retornar exatamente o resultado do valor de busca
                return item.nome === this.searchName
            })

            if (result.length <= 0) {
                alert('Nenhum registro foi encontrado.')
            } else {
                this.characters = result //Retorna o personagem filtrado
            }
        }
    }
})