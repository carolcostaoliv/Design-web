var contatos = [
    {
        nome: "Carolina",
        cel: "187464",
        foto: "carol.jpeg",
        favorito: true
    },
    {
        nome: "Duda",
        cel: "7541456",
        foto: "duda.jpg",
        favorito: true
    },
    {
        nome: "Heitor",
        cel: "467473",
        foto: "heitor.jpeg",
        favorito: false
    },
    {
        nome: "Gustavo",
        cel: "658752",
        foto: "gustavo.jpg",
        favorito: false
    },
    {
        nome: "Thiago",
        cel: "525154",
        foto: "thiago.webp",
        favorito: false
    }
]

const agenda = {
    data(){
        return {
            titulo: "Agenda de contatos",
            contatos: window.contatos
        }
    }
}

Vue.createApp(agenda).mount("#app");