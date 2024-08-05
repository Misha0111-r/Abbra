import MainPage, { get_page_length } from '../pages/main_page'

describe('main page tests', () => {
    beforeEach(()=>{
        MainPage.go_to_main_page();
    })

    it('login button', ()=>{
        MainPage.click_login_button();
        cy.url().should('equal', '/login');
    })

    it('register button', ()=>{
        MainPage.click_register_button();
        cy.url().should('equal', '/register');
    })

    it('news button', ()=>{
        MainPage.click_news_button();
        cy.url().should('equal', '/news');
    })

    it('tutorial button', ()=>{
        MainPage.click_tutorial_button();
        cy.url().should('equal', '/tutorials');
    })

    it('sell on abra button', ()=>{
        MainPage.click_sell_on_abra_button();
        cy.url().should('equal', '/sell');
    })

    it('contact support button', ()=>{
        MainPage.click_contact_support_button();
        cy.url().should('equal', '/contact');
    })

    it('FAQ button', ()=>{
        MainPage.click_FAQ_button();
        cy.url().should('equal', '/faq');
    })

    it('about us button', ()=>{
        MainPage.click_about_us_button();
        cy.url().should('equal', '/about');
    })

    it('sort by rating', () => {
        MainPage.click_all_categories_button();
        MainPage.elements.clothes_button().trigger('mouseover');
        MainPage.click_jeans_button();
        MainPage.click_firstarticle();
        let ratings = [];
        MainPage.elements.rating().invoke('text').then(x => ratings.push(x.toString().slice(0,3)));
        MainPage.elements.back_to_jeans().click();
        MainPage.elements.page2().click();
        MainPage.elements.articles().eq(Math.round(Math.random()*20)).click();     
        MainPage.elements.rating().invoke('text').then(x => ratings.push(x.toString().slice(0,3)));  
        MainPage.elements.back_to_jeans().click();
        MainPage.elements.page3().click();
        MainPage.elements.articles().last().click();    
        MainPage.elements.rating().invoke('text').then(x => ratings.push(x.toString().slice(0,3)));   
        cy.log(ratings);
        expect(MainPage.compare_ratings()).to.equal(true);
    })
})