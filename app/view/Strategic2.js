/*
 * File: app/view/Strategic2.js
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

Ext.define('LogisticSMP.view.Strategic2', {
    extend: 'Ext.window.Window',
    alias: 'widget.strategic2',

    requires: [
        'LogisticSMP.view.Window.Form.Add.Strategic1ViewModel1',
        'Ext.form.Panel',
        'Ext.form.field.ComboBox',
        'Ext.button.Button'
    ],

    viewModel: {
        type: 'strategic2'
    },
    height: 190,
    resizable: false,
    width: 392,
    title: 'From Add Strategic',
    titleAlign: 'center',
    modal: true,

    items: [
        {
            xtype: 'form',
            height: 250,
            width: 400,
            layout: 'auto',
            bodyPadding: 10,
            title: 'Add Strategic',
            items: [
                {
                    xtype: 'textfield',
                    width: 273,
                    fieldLabel: 'Name',
                    labelAlign: 'right'
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'Year',
                    labelAlign: 'right'
                },
                {
                    xtype: 'button',
                    margin: '10 10 10 100',
                    text: 'Save'
                },
                {
                    xtype: 'button',
                    margin: '10 10 10 10',
                    text: 'Reset'
                }
            ]
        }
    ]

});