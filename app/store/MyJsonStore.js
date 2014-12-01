/*
 * File: app/store/MyJsonStore.js
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

Ext.define('LogisticSMP.store.MyJsonStore', {
    extend: 'Ext.data.Store',

    requires: [
        'LogisticSMP.model.GaugeModel',
        'Ext.data.proxy.Memory',
        'Ext.data.writer.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'Overview',
            model: 'LogisticSMP.model.GaugeModel',
            data: [
                {
                    id: 'qui',
                    name: 'consequatur',
                    current_progress: 802.74,
                    progress: 644.11
                },
                {
                    id: 'quo',
                    name: 'aperiam',
                    current_progress: 815.9,
                    progress: 998.22
                },
                {
                    id: 'molestias',
                    name: 'sint',
                    current_progress: 552.61,
                    progress: 648.88
                },
                {
                    id: 'non',
                    name: 'error',
                    current_progress: 743.6,
                    progress: 282.76
                },
                {
                    id: 'ipsa',
                    name: 'quia',
                    current_progress: 260.7,
                    progress: 75.77
                }
            ],
            proxy: {
                type: 'memory',
                writer: {
                    type: 'json',
                    writeAllFields: true,
                    encode: true,
                    rootProperty: 'items'
                }
            }
        }, cfg)]);
    }
});