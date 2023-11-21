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
				this.getOwnerComponent().openHelloDialog();
			},
		});
	}
);
