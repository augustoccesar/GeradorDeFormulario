var FormGenerator = {
    parentComponentId: "dynamic-form-holder",
    formJson: undefined,

    setParentComponentId: function (parentComponent) {
        FormGenerator.parentComponentId = parentComponent;
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
                    "tipo": 1
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
            ).append(
                $("<form>")
            );

        for(var i in json.atributos){
            alert(i);
        }

        // TODO Load data into parent component
    },

    getTypeById: function (id) {
        switch (id) {
            case 0:
                return {id: 0, name: "LOGICO"};
                break;
            case 1:
                return {id: 1, name: "REAL"};
                break;
            case 2:
                return {id: 2, name: "STRING"};
                break;
        }
    }
};