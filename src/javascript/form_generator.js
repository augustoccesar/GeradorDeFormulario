var Form = (function(){
    'use strict';

    function Generator() {
        var self = this;

        // Variables

        self.parentComponentId = "dynamic-form-holder";
        self.formJson = undefined;
        self.action = "";
        self.method = "POST";

        // Methods Definitions

        self.setParentComponentId = setParentComponentId;
        self.setFormAction = setFormAction;
        self.loadForm = loadForm;
        self.setFormJson = setFormJson;
        self.setMethod = setMethod;

        // Methods Construction

        function setParentComponentId(parentComponentId) {
            self.parentComponentId = parentComponentId;
        }

        function setFormAction(action) {
            self.action = action;
        }

        function setFormJson(json) {
            self.formJson = json;
        }

        function setMethod(method) {
            self.method = method;
        }

        function loadForm(componentId, action, formJson) {
            self.setParentComponentId(componentId);
            self.setFormAction(action);
            self.setFormJson(formJson);

            var parentComponent = $("#" + self.parentComponentId);
            var json = self.formJson;

            parentComponent.addClass("form-holder");

            parentComponent
                .append(
                    $("<h2>").addClass("form-title").append(json.nome)
                )
                .append(
                    $("<h4>").addClass("form-subtitle").append(json.descricao)
                );

            parentComponent.append($("<hr>"));

            var form = $("<form>").attr('action', self.action).attr("method", self.method);
            for (var i in json.atributos) {
                switch (json.atributos[i].tipo) {
                    case 0:
                        form
                            .append(
                                $("<label>").addClass("form-input-label")
                                    .html(json.atributos[i].nome + ": ")
                            )
                            .append(
                                $("<input>").addClass("form-input")
                                    .attr("type", "radio")
                                    .attr("name", json.atributos[i].nome.toLowerCase())
                                    .val(1)
                            )
                            .append("Verdadeiro")
                            .append(
                                $("<input>").addClass("form-input")
                                    .attr("type", "radio")
                                    .attr("name", json.atributos[i].nome.toLowerCase())
                                    .val(0)
                            )
                            .append("Falso")
                            .append($("<br>"));
                        break;
                    case 1:
                        form
                            .append(
                                $("<label>").addClass("form-input-label")
                                    .html(json.atributos[i].nome + ": ")
                            )
                            .append(
                                $("<input>").addClass("form-input form-text")
                                    .attr("type", "number")
                            ).append($("<br>"));
                        break;
                    case 2:
                        form
                            .append(
                                $("<label>").addClass("form-input-label")
                                    .html(json.atributos[i].nome + ": ")
                            )
                            .append(
                                $("<input>").addClass("form-input form-text")
                                    .attr("type", "text")
                            ).append($("<br>"));
                        break;
                }
            }
            parentComponent.append(form);

            parentComponent.append(
                $("<button>").addClass("form-submit-button")
                    .attr("type", "submit")
                    .html("Enviar")
            )
        }
    }

    return {
        Generator : Generator
    }

}());