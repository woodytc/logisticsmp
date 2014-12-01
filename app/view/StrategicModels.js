/*
 * File: app/view/StrategicModels.js
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

Ext.define('LogisticSMP.view.StrategicModels', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.strategicmodels',

    requires: [
        'LogisticSMP.view.StrategicModelsViewModel',
        'LogisticSMP.view.StrategicModelsViewController',
        'Ext.grid.Panel',
        'Ext.grid.column.Column',
        'Ext.form.field.Display',
        'Ext.form.Panel',
        'Ext.form.field.Number',
        'Ext.button.Button',
        'Ext.toolbar.Toolbar'
    ],

    controller: 'strategicmodels',
    viewModel: {
        type: 'strategicmodels'
    },
    shrinkWrap: 0,
    layout: 'border',
    collapsed: false,
    title: 'My Panel',

    items: [
        {
            xtype: 'gridpanel',
            flex: 1,
            region: 'center',
            split: true,
            reference: 'list',
            resizable: false,
            title: '',
            forceFit: true,
            bind: {
                store: '{strategicModels}'
            },
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'name',
                    text: 'Name'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'year',
                    text: 'Year'
                }
            ],
            listeners: {
                select: 'select'
            }
        },
        {
            xtype: 'panel',
            flex: 1,
            region: 'east',
            split: true,
            reference: 'display',
            width: 150,
            layout: 'card',
            bodyBorder: true,
            items: [
                {
                    xtype: 'panel',
                    reference: 'selectMessage',
                    layout: {
                        type: 'vbox',
                        align: 'center',
                        pack: 'center'
                    },
                    items: [
                        {
                            xtype: 'container',
                            flex: 1,
                            html: '<h1>Please select a record</h1>'
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    reference: 'details',
                    bodyPadding: 10,
                    items: [
                        {
                            xtype: 'displayfield',
                            fieldLabel: 'Name',
                            bind: {
                                value: '{record.name}'
                            }
                        },
                        {
                            xtype: 'displayfield',
                            fieldLabel: 'Year',
                            bind: {
                                value: '{record.year}'
                            }
                        }
                    ]
                },
                {
                    xtype: 'form',
                    reference: 'form',
                    bodyPadding: 10,
                    title: 'Edit StrategicModel',
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Name',
                            name: 'name'
                        },
                        {
                            xtype: 'numberfield',
                            width: 150,
                            fieldLabel: 'Year',
                            name: 'year',
                            regex: /\d\d\d\d/
                        },
                        {
                            xtype: 'container',
                            padding: 10,
                            layout: {
                                type: 'hbox',
                                align: 'middle',
                                pack: 'center'
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    flex: 1,
                                    formBind: true,
                                    itemId: 'saveButton',
                                    margin: 5,
                                    text: 'Save',
                                    listeners: {
                                        click: 'save'
                                    }
                                },
                                {
                                    xtype: 'button',
                                    flex: 1,
                                    itemId: 'cancelButton',
                                    margin: 5,
                                    text: 'Cancel',
                                    listeners: {
                                        click: 'cancelEdit'
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    xtype: 'button',
                    text: 'Add',
                    listeners: {
                        click: 'add'
                    }
                },
                {
                    xtype: 'button',
                    text: 'Edit',
                    bind: {
                        hidden: '{!record}'
                    },
                    listeners: {
                        click: 'edit'
                    }
                },
                {
                    xtype: 'button',
                    text: 'Remove',
                    bind: {
                        hidden: '{!record}'
                    },
                    listeners: {
                        click: 'remove'
                    }
                }
            ]
        }
    ]

});