/*
 * File: app/view/Data/ProjectTab4.js
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

Ext.define('LogisticSMP.view.Data.ProjectTab4', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.dataprojecttab4',

    requires: [
        'LogisticSMP.view.Data.ProjectTab4ViewModel',
        'LogisticSMP.view.Data.ProjectTab4ViewController',
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.button.Button',
        'Ext.grid.Panel',
        'Ext.grid.column.RowNumberer',
        'Ext.grid.View',
        'Ext.selection.RowModel',
        'Ext.toolbar.Paging'
    ],

    controller: 'dataprojecttab4',
    viewModel: {
        type: 'dataprojecttab4'
    },
    height: 10280,
    itemId: 'contentPanel6',
    anchorSize: '100% 20%',
    title: 'บริหารจัดการ กิจกรรม',
    titleAlign: 'center',

    layout : {
		type : 'vbox',
		align : 'stretch'
	},
    dockedItems: [
        {
            xtype: 'form',
            flex: 1,
            dock: 'top',
            bodyPadding: 10,
            title: 'ค้นหา',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'Label'
                },
                {
                    xtype: 'button',
                    text: 'Search',
                    listeners: {
                        click: 'onButtonSerchClick12'
                    }
                }
            ]
        }
    ],
    items: [
        {
            xtype: 'gridpanel',
            flex: 4,
            autoScroll: true,
            height: 89,
            width: 1280,
            title: 'บริหารจัดการ กิจกรรม',
            autoLoad: true,
            store: 'StrategicModel',
            columns: [
                {
                    xtype: 'rownumberer'
                },
                {
                    xtype: 'gridcolumn',
                    hidden: true,
                    dataIndex: 'id',
                    text: 'ID'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'name',
                    text: 'Col1',
                    flex: -1
                },
                {
                    xtype: 'gridcolumn',
                    width: 100,
                    dataIndex: 'year',
                    text: 'Year'
                }
            ],
            selModel: {
                selType: 'rowmodel'
            },
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    dock: 'bottom',
                    width: 360,
                    displayInfo: true
                },
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Add',
                            listeners: {
                                click: 'onButtonAddClick12'
                            }
                        },
                        {
                            xtype: 'button',
                            text: 'Edit',
                            listeners: {
                                click: 'onButtonEditClick12'
                            }
                        },
                        {
                            xtype: 'button',
                            text: 'Delete',
                            listeners: {
                                click: 'onButtonDeleteClick12'
                            }
                        }
                    ]
                }
            ]
        }
    ]

});