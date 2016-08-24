var FormGenerator = {
    parentComponentId: "dynamic-form-holder",
    formJson: undefined,
    action: "",

    setParentComponentId: function (parentComponent) {
        FormGenerator.parentComponentId = parentComponent;
    },

    setFormAction: function (action) {
        FormGenerator.action = action;
    },

    loadFormJson: function (sourceLocationURL) {
        // TODO Load into formJson the json to build the form
        // For tests:
        FormGenerator.formJson = {
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
    },

    loadForm: function () {
        var parentComponent = $("#" + FormGenerator.parentComponentId);
        var json = FormGenerator.formJson;

        parentComponent
            .append(
                $("<h3>").append(json.nome)
            )
            .append(
                $("<h5>").append(json.descricao)
            );

        var form = $("<form>").attr('action', FormGenerator.action);
        for (var i in json.atributos) {
            switch (json.atributos[i].tipo) {
                case 0:
                    form
                        .append(
                            $("<label>").html(json.atributos[i].nome + ": ")
                        )
                        .append(
                            $("<input>")
                                .attr("type", "radio")
                                .attr("name", json.atributos[i].nome.toLowerCase())
                                .val(1)
                        )
                        .append("Sim")
                        .append(
                            $("<input>")
                                .attr("type", "radio")
                                .attr("name", json.atributos[i].nome.toLowerCase())
                                .val(0)
                        )
                        .append("Nao");
                    break;
                case 1:
                    form
                        .append(
                            $("<label>").html(json.atributos[i].nome + ": ")
                        )
                        .append(
                            $("<input>").attr("type", "number")
                        );
                    break;
                case 2:
                    form
                        .append(
                            $("<label>").html(json.atributos[i].nome + ": ")
                        )
                        .append(
                            $("<input>").attr("type", "text")
                        );
                    break;
            }
        }
        parentComponent.append(form);
    }
};