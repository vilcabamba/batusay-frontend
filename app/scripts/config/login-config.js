(function() {
  'use strict';

  angular
    .module('batusayApp.config')
    .config(function ($authProvider, APP) {

    $authProvider.configure({
			apiUrl: APP.apiHost,
      tokenValidationPath: '/api/auth/validate_token',
      storage: 'cookies',
      authProviderPaths: {
        facebook: '/api/auth/facebook',
      },
      omniauthWindowType: 'newWindow'
		});

  });

})();
