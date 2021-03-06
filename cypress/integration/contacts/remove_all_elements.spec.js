describe("Delete all contact items", () => {
    it("should navigate to home page", () => {	
		cy.visit('/');
	});

	it("should navigate to contacts page", () => {	
		//contacts page
		cy.get("nav a[routerlink='/contacts']").click();
    });
    
    it("should delete all contacts", () => {	
        cy.get("table tbody tr .remove")
          .each(($el) => {
              cy.wrap($el).click();
            }
        );
    });
    
    it("should check for success message", () => {	
		cy.get(".alert-success")
		  .contains('Operation completed!')
    });
});