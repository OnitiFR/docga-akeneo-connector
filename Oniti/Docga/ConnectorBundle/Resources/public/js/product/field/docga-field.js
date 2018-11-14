'use strict';

define([
		'jquery',
		'underscore',
		'pim/field',
		'text!onitidocgaconnector/templates/product/field/docga-field.html',
		'routing',
		'jquery.slimbox',
	], function ($, _, Field, fieldTemplate, Routing) {

		var AssetSelectionView = Field.extend({

			// Configuration
			config: null,

			// Selected Assets
			assets: null,

			// Prepares the template
			fieldTemplate: _.template(fieldTemplate),

			// Declaration of events
			events: {
				'click .display-file': 'displayFile',
				'click .add-file': 'selectFile',
				'click .remove-file': 'removeFile',
				'click .download-file': 'downloadFile',
			},

			// Les métadonnées de la norme DublinCore (hors title et source)
			metadatas: [
				'description.abstract',
				'contributor',
				'subject',
				'creator',
				'publisher',
				'title.alternative',
				'coverage',
				'relation',
				'rights'
			],

			/**
			 * Initialization
			 *
			 * @param
			 */
			initialize: function (attribute) {
				AssetSelectionView.__super__.initialize.apply(this, arguments);

				$.getJSON(
					Routing.generate('oniti_docga_get_config'),
					function(config) {
						var check = (
							typeof config === 'object' &&
							typeof config.baseurl === 'string' && config.baseurl.length &&
                            typeof config.api_key === 'string' && config.api_key.length &&
                            typeof config.api_secret === 'string' && config.api_secret.length
						);

						if(!check) {
							alert(_.__('docga.field.an_error_has_occurred'));
							return;
						}

						this.config = config;

					}.bind(this)
				);
			},

			/**
			 * Rendering of the field
			 *
			 * @param {object} Context
			 */
			renderInput: function (context) {
				// Loads assets
				this.assets = context.value.data ? JSON.parse(context.value.data) : [];

				// Complete values
				var inc, assets = this.assets.slice();

				for(inc in assets) {
					assets[inc].id = this.attribute.id + '-' + inc;
				}

				// Return the formatted template
				return this.fieldTemplate({
					id : this.attribute.id,
					assets : assets
				});
			},

            displayFile: function(){
            },
            selectFile: function(){
            },
            removeFile: function(){
            },
            downloadFile: function(){
            },
		});

		return AssetSelectionView;
	}
);
