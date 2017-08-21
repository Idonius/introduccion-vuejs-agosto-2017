(function( Vue, axios, moment ) {
	new Vue( {
		el: '#app',
		data: {
			projects: []
		},
		filters: {
			formatDate: function( date, outputFormat ) {
				return moment( date ).format( outputFormat );
			}
		},
		mounted: function() {
			var serverURL = 'http://172.104.91.187/projects';
			var _this = this;

			// Obtener la lista de proyectos por AJAX
			var configAxios = {
				url: serverURL,
				method: 'get',
				responseType: 'json',
				data : {},
				headers: {
					'Content-Type': 'application/json',
					'Api-Token': 'zOGORFLK8T7MAejwUOLvZ5nBSGlPWFOwYvNOfBXm11ceQtHfuX783lTedoln'
				}
			};
			axios.request( configAxios ).then( function( response ) {
				console.log( response );
				_this.projects = response.data;
			} );
		}
	} );
})( window.Vue, window.axios, window.moment );