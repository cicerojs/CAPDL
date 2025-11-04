sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/capfinance/wallets/appwallets/test/integration/FirstJourney',
		'com/capfinance/wallets/appwallets/test/integration/pages/WalletsList',
		'com/capfinance/wallets/appwallets/test/integration/pages/WalletsObjectPage'
    ],
    function(JourneyRunner, opaJourney, WalletsList, WalletsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/capfinance/wallets/appwallets') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheWalletsList: WalletsList,
					onTheWalletsObjectPage: WalletsObjectPage
                }
            },
            opaJourney.run
        );
    }
);