/*
 * File: app/view/Data/ProjectTab1ViewController.js
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

Ext.define('LogisticSMP.view.Data.ProjectTab1ViewController', {
	extend : 'Ext.app.ViewController',
	alias : 'controller.dataprojecttab1',

	deleteConfirm : function(record) {

	},

	onButtonSerchClick : function(button, e, eOpts) {
		// this.getref
	},

	/*
	 * getSelection = getdata in row select
	 * 
	 */
	onButtonAddClick : function(button, e, eOpts) {
		var record = this.getView().getComponent('grid-strategic')
				.getSelectionModel().getSelection()[0];

		var popup = Ext.create('widget.windowformaddstrategic', {

			record : record,
			intend : '',
			mode : 'add',
			listeners : {
				close : function(panel, eOpts) {
					console.log(panel);
					console.log(panel.intend);
					if (panel.intend === 'save-success') {
						console.log('insave success');
						Ext.getCmp('pagingtoolbar-strategic').moveFirst();
					}
				}
			}

		});
		// call frist load form to set value
		// popup.onLoad(record);
		popup.show();

	},

	onButtonEditClick : function(button, e, eOpts) {

		if (this.getView().getComponent('grid-strategic').getSelectionModel()
				.getSelection().length) {
			var record = this.getView().getComponent('grid-strategic')
					.getSelectionModel().getSelection()[0];

			var popup = Ext.create('widget.windowformaddstrategic', {

				record : record,
				intend : 'go',
				mode : 'edit',
				listeners : {
					close : function(panel, eOpts) {
						console.log("in");
						console.log(panel.intend);
						Ext.getCmp('pagingtoolbar-strategic').moveFirst();
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
		}//end if
	},

	onButtonDeleteClick : function(button, e, eOpts) {

		var record = this.getView().getComponent('grid-strategic')
				.getSelectionModel().getSelection();

		if (record.length) {
			Ext.MessageBox.confirm('Confirm', 'คุณต้องการที่จะลบข้อมูล',
					function(cbtn, bool) {
						if (cbtn == 'yes') {
							Ext.Ajax.request({
								url : 'manage_strategic.php?type=delete',
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
										Ext.getCmp('pagingtoolbar-strategic')
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
	},
	onDeleteClick : function(record, e, eOpts) {

		Ext.Ajax.request({
			url : 'manage_strategic.php?type=delete',
			method : 'POST',
			params : {
				id : record.data.id
			},
			success : function(response) {
				console.log(response);
				var jsonResp = Ext.util.JSON.decode(response.responseText);
				console.log(jsonResp);
				Ext.Msg.alert("Info", "UserName from Server : "
						+ jsonResp.username);
			},
			failure : function(response) {
				console.log(response);
				var jsonResp = Ext.util.JSON.decode(response.responseText);
				Ext.Msg.alert("Error", jsonResp.error);
			}
		});

	}

});
