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

    onButtonAddProjectClick: function(button, e, eOpts) {
        console.log(eOpts);
        
        var popup = Ext.create('widget.windowformaddproject', {

			//record : record,
			intend : '',
			mode : 'add',
			listeners : {
				close : function(panel, eOpts) {
					console.log(panel);
					 console.log(panel.intend);
					if (panel.intend === 'save-success') {
						console.log('insave success');
						Ext.getCmp('pagingtoolbar-project').moveFirst();
					}//end fi
				}//end 
			}//end listeners

		});
		// call frist load form to set value
		popup.show();
    },

    onButtonEditProjectClick: function(button, e, eOpts) {

    	if (this.getView().getComponent('grid-project').getSelectionModel()
				.getSelection().length) {
			var record = this.getView().getComponent('grid-project')
					.getSelectionModel().getSelection()[0];

			var popup = Ext.create('widget.windowformaddproject', {

				record : record,
				intend : 'go',
				mode : 'edit',
				listeners : {
					close : function(panel, eOpts) {
						console.log("in");
						// console.log(panel.intend);
						//Ext.getCmp('pagingtoolbar-strategy').moveFirst();
						if (panel.intend === 'edit-success') {
							console.log('edit success');
							// Ext.getCmp('pagingtoolbar-strategic').moveFirst();
						}
					}
				}

			});
			
			// call frist load form to set value
			popup.onLoad(record);
			popup.show();
			
		}// endif
    },

    onButtonDeleteProjectClick : function(button, e, eOpts) {
        //Ext.MessageBox.confirm('Confirm', 'Are you sure you want to do that?', this.showResult, this);
    	var record = this.getView().getComponent('grid-project')
		.getSelectionModel().getSelection();

		if (record.length) {
			Ext.MessageBox.confirm('Confirm', 'คุณต้องการที่จะลบข้อมูล',
					function(cbtn, bool) {
						if (cbtn == 'yes') {
							Ext.Ajax.request({
								url : 'manage_project.php?type=delete',
								method : 'POST',
								params : {
									id : record[0].data.id
								},
								success : function(response) {
									console.log(response);
									var jsonResp = Ext.util.JSON
											.decode(response.responseText);
									console.log(jsonResp);
									if (jsonResp.status) {
										Ext.Msg.alert("Info",
												"ลบข้อมูลเรียบร้อยแล้ว");
										Ext.getCmp('pagingtoolbar-project')
												.moveFirst();
									} else {
										Ext.Msg.alert("Info",
												"ไม่สามารถทำการลบข้อมูลได้");
									}
								},
								failure : function(response) {
									console.log(response);
									var jsonResp = Ext.util.JSON
											.decode(response.responseText);
									Ext.Msg.alert("Error", jsonResp.error);
								}
							});
						}
		
					});
		}
    }

});
