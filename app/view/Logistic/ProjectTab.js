/*
 * File: app/view/Logistic/ProjectTab.js
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

Ext.define('LogisticSMP.view.Logistic.ProjectTab', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.logisticprojecttab',

    requires: [
        'LogisticSMP.view.OverviewViewModel2',
        'LogisticSMP.view.OverviewViewController2',
        'Ext.form.Panel',
        'Ext.form.field.ComboBox',
        'Ext.chart.CartesianChart',
        'Ext.chart.axis.Category',
        'Ext.chart.axis.Numeric',
        'Ext.chart.series.Line',
        'Ext.chart.interactions.PanZoom'
    ],

    controller: 'logisticprojecttab',
    viewModel: {
        type: 'logisticprojecttab'
    },
    itemId: 'contentPanel3',
    anchorSize: '100% 20%',
    title: 'Project',
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
            flex: -1,
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
                    minHeight: 500,
                    minWidth: 500,
                    width: '100%',
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
                    store: 'ProjectStore',
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
                            position: 'bottom'
                        },
                        {
                            type: 'numeric',
                            fields: [
                                'progress'
                            ],
                            grid: true,
                            position: 'left'
                        }
                    ],
                    series: [
                        {
                            type: 'line',
                            marker: {
                                type: 'arrow'
                            },
                            xField: 'name',
                            yField: [
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
        }
    ]

});