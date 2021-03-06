describe("Edit first contact, starting from home", () => {
    
	it("should navigate to home page", () => {	
		cy.visit('/');
	});

	it("should navigate to contacts page", () => {	
		//contacts page
		cy.get("nav a[routerlink='/contacts']").click();
	});

	it("should select the first contact and go to edit page", () => {	
		//contact insertion
        cy.get("table tbody tr .edit").eq(0).click();

        cy.get("input[name='firstName']")
		  .type('2', { delay: 100 });

		cy.get("input[name='lastName']")
		  .type('2', { delay: 100 });

		cy.get("input[name='phoneNumber']")
		  .type('2222', { delay: 100 });

		cy.get("input[name='email']")
		  .type('2', { delay: 100 });

		cy.get("#editContact").click();

	});

	it("should check for success message", () => {	
		cy.get(".alert-success")
		  .contains('Operation completed!')
	});

	it("should  go back to contact list", () => {	
		cy.get("#goBack").click();
	});

});