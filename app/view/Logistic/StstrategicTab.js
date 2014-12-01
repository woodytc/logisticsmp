/*
 * File: app/view/Logistic/StstrategicTab.js
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

Ext.define('LogisticSMP.view.Logistic.StstrategicTab', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.logisticststrategictab',

    requires: [
        'LogisticSMP.view.OverviewViewModel1',
        'LogisticSMP.view.OverviewViewController1',
        'Ext.form.Panel',
        'Ext.form.field.ComboBox',
        'Ext.chart.CartesianChart',
        'Ext.chart.axis.Category',
        'Ext.chart.axis.Numeric',
        'Ext.chart.series.Bar',
        'Ext.chart.interactions.PanZoom',
        'Ext.grid.Panel',
        'Ext.grid.column.Column'
    ],

    controller: 'logisticststrategictab',
    viewModel: {
        type: 'logisticststrategictab'
    },
    itemId: 'contentPanel2',
    anchorSize: '100% 20%',
    title: 'Ststrategic',
    titleAlign: 'center',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'form',
            anchor: '100% 50%',
            margins: '0 10 10 0',
            height: 73,
            collapseFirst: false,
            collapsible: false,
            title: 'Statrategic Form',
            titleAlign: 'center',
            layout: {
                type: 'hbox',
                align: 'stretchmax',
                pack: 'center'
            },
            items: [
                {
                    xtype: 'combobox',
                    flex: 1,
                    margin: '5 250 5 250',
                    fieldLabel: 'Plz-Ststrategic',
                    labelAlign: 'right',
                    displayField: 'name',
                    store: 'StstrategicStore',
                    valueField: 'id',
                    listeners: {
                        select: 'onComboboxSelect'
                    }
                }
            ]
        },
        {
            xtype: 'panel',
            flex: 2,
            collapsible: false,
            title: 'Bar-chart-Ststrategic-Overview',
            titleAlign: 'center',
            layout: {
                type: 'vbox',
                align: 'stretchmax'
            },
            dockedItems: [
                {
                    xtype: 'cartesian',
                    flex: -1,
                    dock: 'top',
                    height: 429,
                    margin: '10 10 10 10',
                    title: 'ภาพรวมโครงการ',
                    titleAlign: 'center',
                    colors: [
                        '#115fa6',
                        '#94ae0a',
                        '#a61120',
                        '#ff8809',
                        '#ffd13e',
                        '#a61187',
                        '#24ad9a',
                        '#7c7474',
                        '#a66111'
                    ],
                    store: 'BarCharOverViewStore',
                    flipXY: true,
                    axes: [
                        {
                            type: 'category',
                            fields: [
                                'name'
                            ],
                            grid: true,
                            label: {
                                rotate: {
                                    degrees: -45
                                }
                            },
                            labelInSpan: true,
                            position: 'left',
                            title: 'โครงการ'
                        },
                        {
                            type: 'numeric',
                            fields: [
                                'Current',
                                'progress'
                            ],
                            grid: true,
                            title: 'ความก้าวหน้า %',
                            position: 'bottom'
                        }
                    ],
                    series: [
                        {
                            type: 'bar',
                            xField: 'name',
                            yField: [
                                'Current',
                                'progress'
                            ]
                        }
                    ],
                    interactions: [
                        {
                            type: 'panzoom'
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'panel',
            flex: 1,
            title: 'Grid',
            items: [
                {
                    xtype: 'gridpanel',
                    autoRender: true,
                    autoScroll: true,
                    margin: '4 4 4 4',
                    store: 'StstrategicStore',
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'name',
                            text: 'MyColumn',
                            flex: 3
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'current',
                            text: 'MyColumn1',
                            flex: 1
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'budget',
                            text: 'MyColumn2',
                            flex: 1
                        }
                    ]
                }
            ]
        }
    ]

});