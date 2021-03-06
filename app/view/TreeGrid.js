/*
 * File: app/view/TreeGrid.js
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

Ext.define('LogisticSMP.view.TreeGrid', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.treegrid',

    requires: [
        'LogisticSMP.view.TreeGridViewModel',
        'Ext.tree.View',
        'Ext.tree.Column'
    ],

    viewModel: {
        type: 'treegrid'
    },
    height: 250,
    width: '100%',
    title: 'My Tree Grid Panel',
    store: 'ActivityJsonPTreeStore',

    viewConfig: {

    },
    columns: [
        {
            xtype: 'treecolumn',
            dataIndex: 'task',
            text: 'Nodes',
            flex: 1
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'name',
            text: 'Value'
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'project_id',
            text: 'MyColumn8'
        }
    ]

});