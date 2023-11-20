sap.ui.define(
	["sap/ui/core/mvc/Controller", "sap/m/MessageToast", "sap/ui/core/Fragment"],
	function (Controller, MessageToast, Fragement) {
		"use strict";
		return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {
			onShowHello: function () {
				var sMsg = oBundle.getText("helloMsg", [sRecipient]);
				// Show message
				MessageToast.show(sMsg);
			},
			onOpenDialog: function () {
				var oView = this.getView();

				// create the dialog lazily
				if (!this.byId("helloDialog")) {
					// load asynchronous XML fragment
					Fragement.load({
						id: oView.getId(),
						name: "sap.ui.demo.walkthrough.view.HelloDialog",
						controller: this,
					}).then(function (oDialog) {
						// connect dialog to the root view of this component (models, lifecycle)
						oView.addDependent(oDialog);
						oDialog.open();
					});
				} else {
					this.byId("helloDialog").open();
				}
			},
			onCloseDialog: function () {
				this.byId("helloDialog").close();
			},
		});
	}
);
