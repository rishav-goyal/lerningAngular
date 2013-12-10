// Service that returns server urls with your specific urls
testApp.service('service_servicePath', function(){
    this.serviceName= function(serviceName){
    	switch(serviceName){
    		case 'login':
    			return 'authUser';
    		break;
    		case 'gameList':
    			return 'GetLiveAndUpcomingGames';
    		break;
    	};
    };        
});
