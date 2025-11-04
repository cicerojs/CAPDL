sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/capfinance/movements/appmovements/test/integration/FirstJourney',
		'com/capfinance/movements/appmovements/test/integration/pages/MovementsList',
		'com/capfinance/movements/appmovements/test/integration/pages/MovementsObjectPage'
    ],
    function(JourneyRunner, opaJourney, MovementsList, MovementsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/capfinance/movements/appmovements') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheMovementsList: MovementsList,
					onTheMovementsObjectPage: MovementsObjectPage
                }
            },
            opaJourney.run
        );
    }
);