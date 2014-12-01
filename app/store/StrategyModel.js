/*
 * File: app/store/StrategyModel.js
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

Ext.define('LogisticSMP.store.StrategyModel', {
    extend: 'Ext.data.Store',
    alias: 'store.atrategymodel',

    requires: [
        'LogisticSMP.model.StrategyModel',
        'Ext.data.proxy.Memory'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            groupField: 'strategy_name',
            storeId: 'StrategyModel',
            model: 'LogisticSMP.model.StrategyModel',
            data: [
                {
                    id: 324,
                    strategic_id: 705,
                    name: 'ipsum',
                    strategy_name: 'modi'
                },
                {
                    id: 284,
                    strategic_id: 756,
                    name: 'itaque',
                    strategy_name: 'velit'
                },
                {
                    id: 155,
                    strategic_id: 917,
                    name: 'repudiandae',
                    strategy_name: 'omnis'
                },
                {
                    id: 166,
                    strategic_id: 793,
                    name: 'minus',
                    strategy_name: 'qui'
                },
                {
                    id: 128,
                    strategic_id: 787,
                    name: 'quia',
                    strategy_name: 'ab'
                },
                {
                    id: 570,
                    strategic_id: 103,
                    name: 'vel',
                    strategy_name: 'maiores'
                },
                {
                    id: 801,
                    strategic_id: 970,
                    name: 'ut',
                    strategy_name: 'cum'
                },
                {
                    id: 541,
                    strategic_id: 981,
                    name: 'veritatis',
                    strategy_name: 'laboriosam'
                },
                {
                    id: 679,
                    strategic_id: 865,
                    name: 'tempora',
                    strategy_name: 'consequatur'
                },
                {
                    id: 925,
                    strategic_id: 526,
                    name: 'alias',
                    strategy_name: 'velit'
                },
                {
                    id: 377,
                    strategic_id: 458,
                    name: 'omnis',
                    strategy_name: 'nisi'
                },
                {
                    id: 562,
                    strategic_id: 670,
                    name: 'quis',
                    strategy_name: 'maiores'
                },
                {
                    id: 568,
                    strategic_id: 345,
                    name: 'voluptate',
                    strategy_name: 'reprehenderit'
                },
                {
                    id: 13,
                    strategic_id: 777,
                    name: 'et',
                    strategy_name: 'illo'
                },
                {
                    id: 111,
                    strategic_id: 531,
                    name: 'et',
                    strategy_name: 'velit'
                },
                {
                    id: 603,
                    strategic_id: 398,
                    name: 'esse',
                    strategy_name: 'et'
                },
                {
                    id: 623,
                    strategic_id: 803,
                    name: 'molestias',
                    strategy_name: 'molestiae'
                },
                {
                    id: 263,
                    strategic_id: 55,
                    name: 'quis',
                    strategy_name: 'aliquid'
                },
                {
                    id: 485,
                    strategic_id: 488,
                    name: 'eveniet',
                    strategy_name: 'veniam'
                },
                {
                    id: 807,
                    strategic_id: 674,
                    name: 'eaque',
                    strategy_name: 'libero'
                },
                {
                    id: 467,
                    strategic_id: 764,
                    name: 'corrupti',
                    strategy_name: 'quam'
                },
                {
                    id: 108,
                    strategic_id: 380,
                    name: 'sint',
                    strategy_name: 'possimus'
                },
                {
                    id: 520,
                    strategic_id: 9,
                    name: 'dolorem',
                    strategy_name: 'inventore'
                },
                {
                    id: 15,
                    strategic_id: 623,
                    name: 'ea',
                    strategy_name: 'laborum'
                },
                {
                    id: 51,
                    strategic_id: 223,
                    name: 'et',
                    strategy_name: 'ut'
                },
                {
                    id: 714,
                    strategic_id: 680,
                    name: 'ipsum',
                    strategy_name: 'vel'
                },
                {
                    id: 705,
                    strategic_id: 89,
                    name: 'laudantium',
                    strategy_name: 'nesciunt'
                },
                {
                    id: 830,
                    strategic_id: 572,
                    name: 'nostrum',
                    strategy_name: 'facilis'
                },
                {
                    id: 477,
                    strategic_id: 489,
                    name: 'sint',
                    strategy_name: 'amet'
                },
                {
                    id: 532,
                    strategic_id: 429,
                    name: 'similique',
                    strategy_name: 'aut'
                }
            ],
            proxy: {
                type: 'memory'
            }
        }, cfg)]);
    }
});