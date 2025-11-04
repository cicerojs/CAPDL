sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'com.capfinance.movements.types.appmovementstypes',
            componentId: 'MovementsTypesList',
            contextPath: '/MovementsTypes'
        },
        CustomPageDefinitions
    );
});