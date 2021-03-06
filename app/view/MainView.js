/*
 * File: app/view/MainView.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 5.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 5.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('LogisticSMP.view.MainView', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.mainview',

    requires: [
        'LogisticSMP.view.MainViewViewModel',
        'LogisticSMP.view.Overview',
        'LogisticSMP.view.StstrategicTab',
        'LogisticSMP.view.ProjectTab',
        'LogisticSMP.view.Data.MainTabData',
        'Ext.tab.Panel',
        'Ext.tab.Tab',
        'Ext.draw.Color',
        'Ext.chart.interactions.ItemHighlight'
    ],

    viewModel: {
        type: 'mainview'
    },
    itemId: 'mainView',
    margin: '5 5 5 5',
    layout: 'border',

    items: [
        {
            xtype: 'panel',
            region: 'north',
            height: 100,
            hidden: true,
            itemId: 'headerPanel',
            title: 'Header'
        },
        {
            xtype: 'tabpanel',
            region: 'center',
            itemId: 'contentPanel4',
            anchorSize: '100% 20%',
           // title: 'Content',
            activeTab: 0,
            items: [
//                {
//                    xtype: 'overview'
//                },
//                {
//                    xtype: 'ststrategictab'
//                },
//                {
//                    xtype: 'projecttab'
//                },
                {
                    xtype: 'datamaintabdata'
                }
            ]
        },
        {
            xtype: 'panel',
            region: 'south',
            height: 100,
            hidden: true,
            itemId: 'footerPanel',
            title: 'Footer'
        }
    ]

});