sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/capfinance/movements/types/appmovementstypes/test/integration/FirstJourney',
		'com/capfinance/movements/types/appmovementstypes/test/integration/pages/MovementsTypesList',
		'com/capfinance/movements/types/appmovementstypes/test/integration/pages/MovementsTypesObjectPage'
    ],
    function(JourneyRunner, opaJourney, MovementsTypesList, MovementsTypesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/capfinance/movements/types/appmovementstypes') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheMovementsTypesList: MovementsTypesList,
					onTheMovementsTypesObjectPage: MovementsTypesObjectPage
                }
            },
            opaJourney.run
        );
    }
);