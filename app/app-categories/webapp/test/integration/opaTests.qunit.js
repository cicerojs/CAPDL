sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/capfinance/category/appcategories/test/integration/FirstJourney',
		'com/capfinance/category/appcategories/test/integration/pages/CategoriesList',
		'com/capfinance/category/appcategories/test/integration/pages/CategoriesObjectPage'
    ],
    function(JourneyRunner, opaJourney, CategoriesList, CategoriesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/capfinance/category/appcategories') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheCategoriesList: CategoriesList,
					onTheCategoriesObjectPage: CategoriesObjectPage
                }
            },
            opaJourney.run
        );
    }
);