# Gerador de Formulário
Pequeno gerador para facilitar a geração de formulários dinamicamente para o trabalho de `Integração 1 - 2016`.
 
## Forma de uso
Para a geração do formulário, deve ser passado para o método de geração, um JSON formatado no seguinte padrão:
```json
{
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
}
```

e então passar esse JSON como uma variável para o método de geração do formulário
```javascript
new Form.Generator().loadForm("dynamic-form-holder", "/submit", json);
```

o método `.loadForm()` tem como parâmetros o id de onde o formulário será inserido, a acão do formulário e o JSON de entrada formatado com os campos.

## Para casos mais específicos
Para casos mais específicos onde a construção padrão nao se encaixa, o `FormGenerator` possui métodos para auxiliar na construção de tais casos.
 
#### Métodos de construção
Após instanciar o `FormGenerator` com `new Form.Generator()` pode-se encadear os seguintes métodos:

### `.setParentComponentId(componentId)`
Método para definir o parente de onde será inserido o formulário.
### `.setFormAction(action)`
Método para definir a ação do formulário.
### `.setFormJson(json)`
Método para definir o JSON de entrada do formulário.
### `.setMethod(method)`
Método para definir o método de envio do formulário.
### `.build()`
Método para construir o formulário de acordo com as configurações definidas pelos métodos anteriores.
