/*
 * File: app/view/Data/ProjectTab3ViewController.js
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

Ext.define('LogisticSMP.view.Data.ProjectTab3ViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.dataprojecttab3',

    onButtonSerchClick11: function(button, e, eOpts) {
        this.getref
    },

    onButtonAddClick11: function(button, e, eOpts) {
        console.log(button);
        var popup = Ext.create('widget.windowformaddproject',button);
        popup.show();
    },

    onButtonEditClick11: function(button, e, eOpts) {
        var popup = Ext.create('widget.windowformaddproject',button);
        popup.show();
    },

    onButtonDeleteClick11: function(button, e, eOpts) {
        Ext.MessageBox.confirm('Confirm', 'Are you sure you want to do that?', this.showResult, this);
    }

});
