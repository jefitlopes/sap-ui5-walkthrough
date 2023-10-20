sap.ui.define(
	["sap/ui/core/ComponentContainer"],
	function (ComponentContainer) {
		"use strict";

		new ComponentContainer({
			name: "sap.ui.demo.walkthrough",
			settiings: {
				id: "walkthrough",
			},
			async: true,
		}).placeAt("content");
	}
);
