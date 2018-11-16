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
			assets: [],

			// Prepares the template
			fieldTemplate: _.template(fieldTemplate),

			// Declaration of events
			events: {
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
						this.docgaApi = new DocGaAPI(config.baseurl, config.api_key, config.api_secret)
						this.docgaApi.setCallbackFilesSelected(this.callbackFilesSelected.bind(this))

					}.bind(this)
				);
			},
			/**
			 * Retour de la modal suite à la sélection des fichiers
			 * @param  {[type]} files [description]
			 * @return {[type]}       [description]
			 */
			callbackFilesSelected: function (files){
				var self = this;
				files.forEach(function(file){
					self.assets.push(file)
				})
				this.updateField();
			},

			/**
			 * Rendering of the field
			 *
			 * @param {object} Context
			 */
			renderInput: function (context) {
				// Loads assets
				this.assets = context.value.data ? JSON.parse(context.value.data) : [];
				// Return the formatted template
				return this.fieldTemplate({
					id : this.attribute.id,
					assets : this.assets
				});
			},

			/**
			 * Updates field
			 */
			updateField: function () {
				this.setCurrentValue(this.assets && this.assets.length ? JSON.stringify(this.assets) : null);
				this.render();
			},
			/**
			 * Return the selected item
			 *
			 * @param {event}
			 */
			getSlug: function (event) {
				var el = event.currentTarget || event.srcElement;
				var data = el.id.split('-')
				data.shift()
				return data.join('-').split('.')[0];
			},

      selectFile: function(){
				this.docgaApi.open()
      },
      removeFile: function(event){
				var slug = this.getSlug(event)
				console.log(slug)
				this.assets = this.assets.filter(function(doc){
					return doc.slug !== slug;
				})
				this.updateField();
      },
      downloadFile: function(event){
				var slug = this.getSlug(event)
				var doc = this.assets.filter(function(doc){
					return doc.slug !== slug;
				})[0]
				if(doc) {
					var win = window.open(doc.download, '_blank');
  				win.focus();
				}
      },
		});

		return AssetSelectionView;
	}
);
