// Example JS of how FormGenerator works

$(document).ready(function () {
    var json = {
        "nome": "Formulario Teste",
        "descricao": "Primeiro formulario para testes do gerador",
        "atributos": [
            {
                "nome": "Nome",
                "descricao": "Nome do Docente",
                "tipo": 2
            },
            {
                "nome": "Idade",
                "descricao": "Idade do Docente",
                "tipo": 1
            },
            {
                "nome": "Ativo",
                "descricao": "O docente está com situação ativa?",
                "tipo": 0
            }
        ]
    };

    new Form.Generator().loadForm("dynamic-form-holder", "/submit", json);
});