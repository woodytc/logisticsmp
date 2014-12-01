/*
 * File: app/view/Window/Form/Add/StrategicViewController1.js
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

Ext.define('LogisticSMP.view.Window.Form.Add.StrategicViewController1', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.windowformaddstrategy',

    onButtonClick1: function(button, e, eOpts) {
        me = this;
        var view = this.getView();
        var form = view.getComponent('form2').getForm();
        var record = me.record;
        console.log(record);
        console.log(form.getItemId('strategic-name'));
        //blind value to main view
        me.intend = "save-success";

        console.log(this.getView().getItemId('strategic-name').getValue());
        console.log(form.getItemId('strategic-year').getValue());

        /*

        if (form.isValid()) {
        form.submit({
        url: 'resources/data/form/file-upload.php',
        waitMsg: 'Uploading your photo...',
        success: function(fp, o) {
        var tpl = new Ext.XTemplate(
        'File processed on the server.<br />',
        'Name: {fileName}<br />',
        'Size: {fileSize:fileSize}'
        );

        Ext.Msg.alert('Success', tpl.apply(o.result));
        }
        });
        }

        */



        record = form.getRecord();
        store = this.getStore('strategicModels');

        console.log(store);

        // Valid
        if (form.isValid()) {

            // Update associated record with values
            form.updateRecord();

            // Add to store if new record
            if (record.phantom) {

                // TODO: Assign the record's ID from data source
                // Normally, this value would be auto-generated,
                // or returned from the server
                var id = store.count() + 1;
                record.set('id', id);

                // Add to store
                store.add(record);

            }

            // Commit changes
            store.commitChanges();

            // Display record
            this.select(this, record);

        }



        //close windows
        me.close();


    },

    /* exit windows */
    onButtonClick: function(button, e, eOpts) {
        console.log(eOpts);
        this.getView().getComponent('form1').getForm().reset();
        this.getView().close();

    }

});