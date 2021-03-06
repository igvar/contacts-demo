describe("Adds new contact, starting from home", () => {

	it("should navigate to home page", () => {	
		cy.visit('/');
	});

	it("should navigate to contacts page", () => {	
		//contacts page
		cy.get("nav a[routerlink='/contacts']").click();
	});

	it("should navigate to edit page", () => {	
		//contacts edit page
		cy.get(".add-contact").click();
	});

	it("should add new to contact and go back to contact list", () => {	
		//contact insertion
		cy.get("input[name='firstName']")
		  .type('test nome', { delay: 100 });

		cy.get("input[name='lastName']")
		  .type('test cognome', { delay: 100 });

		cy.get("input[name='phoneNumber']")
		  .type('+39 334 553 444', { delay: 100 });

		cy.get("input[name='email']")
		  .type('test@email.com', { delay: 100 });

		cy.get("#submitContact").click();

	});

	it("should check for success message", () => {	
		cy.get(".alert-success")
		  .contains('Operation completed!')
	});

	it("should  go back to contact list", () => {	
		cy.get("#goBack").click();
	});
});