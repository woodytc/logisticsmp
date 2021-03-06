/*
 * File: app/store/StrategicModel.js
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

Ext.define('LogisticSMP.store.StrategicModel', {
    extend: 'Ext.data.Store',
    alias: 'store.strategicmodel',

    requires: [
        'LogisticSMP.model.StrategicModel',
        'Ext.data.proxy.Memory'
    ],
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
        	groupField: 'year',
        	model: 'LogisticSMP.model.StrategicModel',
            autoLoad: true,
            pageSize: 10,
            proxy: {
                type: 'ajax',
                url: 'manage_strategic.php?type=all',
                reader: {
                    type: 'json',
                    rootProperty: 'items',
					totalProperty:'total'
                }
            }
        }, cfg)]);
    }
});
