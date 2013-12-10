testApp.factory('factory_serverURLs', function() {

  // factory returns an object
  // you can run some code before

  return {
    serverName : function(serveName) {
    	switch (serveName){
    		case "local1":
    		return ("http://72.167.178.55/blenfl/webapi/blnfl.asmx/");
    		break;
    		case "local2":
    		return ("http://180.179.212.93/javalation/api/requestapi/");
    		break;    		
    	};
      
    }
  };
});