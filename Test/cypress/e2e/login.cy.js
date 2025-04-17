describe('Demo kiểm thử UI với Cypress', () => {
    it('Truy cập trang đăng nhập và nhập thông tin', () => {
        cy.visit('http://localhost:4200/public/login'); // URL của trang bạn đang test
    });
});