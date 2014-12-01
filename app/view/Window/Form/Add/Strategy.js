/*
 * File: app/view/Window/Form/Add/Strategy.js
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

Ext.define('LogisticSMP.view.Window.Form.Add.Strategy', {
    extend: 'Ext.window.Window',
    alias: 'widget.windowformaddstrategy',

    requires: [
        'LogisticSMP.view.Window.Form.Add.StrategicViewModel1',
        'LogisticSMP.view.Window.Form.Add.StrategicViewController1',
        'Ext.form.Panel',
        'Ext.form.field.ComboBox',
        'Ext.XTemplate',
        'Ext.form.field.TextArea',
        'Ext.button.Button'
    ],

    controller: 'windowformaddstrategy',
    viewModel: {
        type: 'windowformaddstrategy'
    },
    height: 252,
    resizable: false,
    width: 616,
    title: 'จัดการกลยุทธ',

    items: [
        {
            xtype: 'form',
            id: 'form2',
            bodyPadding: 10,
            items: [
                {
                    xtype: 'combobox',
                    anchor: '100%',
                    fieldLabel: 'Strategic',
                    labelAlign: 'right',
                    displayField: 'name',
                    displayTpl: [
                        '{year}+{name}'
                    ],
                    store: 'StrategicModel',
                    valueField: 'id'
                },
                {
                    xtype: 'textareafield',
                    anchor: '100%',
                    height: 130,
                    id: 'strategy-name',
                    fieldLabel: 'StrategyName',
                    labelAlign: 'right',
                    name: 'name'
                },
                {
                    xtype: 'button',
                    margin: '0 0 0 100',
                    text: 'บันทึก',
                    listeners: {
                        click: 'onButtonClick1'
                    }
                },
                {
                    xtype: 'button',
                    text: 'ยกเลิก',
                    listeners: {
                        click: 'onButtonClick'
                    }
                }
            ]
        }
    ],

    onLoad: function(record) {
        console.log(record);
        Ext.getCmp('strategic-name').setValue(record.data.name);
    }

});