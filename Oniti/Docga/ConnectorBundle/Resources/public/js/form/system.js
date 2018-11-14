"use strict";


define([
        'underscore',
        'oro/translator',
        'routing',
        'pim/form',
        'text!onitidocgaconnector/templates/system/group/configuration.html'
    ],
    function (_,
              __,
              Routing,
              BaseForm,
              template) {
        return BaseForm.extend({
            className: 'AknFormContainer AknFormContainer--withPadding',
            events: {
                'change .ephoto-config': 'updateModel'
            },
            isGroup: true,
            label: __('docga.configuration.tab'),
            template: _.template(template),

            render: function () {
                this.$el.html(this.template({
                    base_url: this.getFormData()['pim_oniti_docga_connector___base_url'] ?
                        this.getFormData()['pim_oniti_docga_connector___base_url'].value : '',
                    base_url: this.getFormData()['pim_oniti_docga_connector___api_key'] ?
                        this.getFormData()['pim_oniti_docga_connector___api_key'].value : '',
                    base_url: this.getFormData()['pim_oniti_docga_connector___api_secret'] ?
                        this.getFormData()['pim_oniti_docga_connector___api_secret'].value : '',
                }));


                this.delegateEvents();

                return BaseForm.prototype.render.apply(this, arguments);
            },

            updateModel: function (event) {
                var name = event.target.name;
                var data = this.getFormData();
                var newValue = event.target.value;
                if (name in data) {
                    data[name].value = newValue;
                } else {
                    data[name] = {value: newValue};
                }
                this.setData(data);
            }
        });
    }
);
