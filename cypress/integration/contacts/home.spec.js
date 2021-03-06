describe("Home page", () => {

	it("should display home title", () => {	
		cy.visit('/');
		cy.contains("Home page");
	});

});