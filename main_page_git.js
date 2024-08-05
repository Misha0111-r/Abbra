class MainPage{
    elements = {
        login_button: () => cy.get('#root > div > div > header > div.Top_wrapper__2Cx8N > div > div.HeaderActions_wrapper__XHOQi > div > a.Button_button__-\+nph.Button_default__-O1V0.HeaderGuestUserActions_button__shKsk'),
        register_button: () => cy.get('#root > div > div > header > div.Top_wrapper__2Cx8N > div > div.HeaderActions_wrapper__XHOQi > div > a.Button_button__-\+nph.Button_light_red__G4Gow.HeaderGuestUserActions_button__shKsk'),
        news_button: () => cy.get('#root > div > div > header > div.Header_wrapper__8RpW2 > div.HeaderNav_wrapper__aDFUh.Header_nav_wrapper__vK-xS > ul > li:nth-child(1) > a'),
        tutorial_button: () => cy.get('#root > div > div > header > div.Header_wrapper__8RpW2 > div.HeaderNav_wrapper__aDFUh.Header_nav_wrapper__vK-xS > ul > li:nth-child(2) > a'),  
        sell_on_abra_button: () => cy.get('#root > div > div > header > div.Header_wrapper__8RpW2 > div.HeaderNav_wrapper__aDFUh.Header_nav_wrapper__vK-xS > ul > li:nth-child(3) > a'), 
        contact_support_button: () => cy.get('#root > div > div > header > div.Header_wrapper__8RpW2 > div.HeaderNav_wrapper__aDFUh.Header_nav_wrapper__vK-xS > ul > li:nth-child(4) > a'), 
        FAQ_button: () => cy.get('#root > div > div > header > div.Header_wrapper__8RpW2 > div.HeaderNav_wrapper__aDFUh.Header_nav_wrapper__vK-xS > ul > li:nth-child(5) > a'), 
        about_us_button: () => cy.get('#root > div > div > header > div.Header_wrapper__8RpW2 > div.HeaderNav_wrapper__aDFUh.Header_nav_wrapper__vK-xS > ul > li:nth-child(6) > a'), 
        all_categories_button: () => cy.get('#root > div > div > header > div.Header_wrapper__8RpW2 > div:nth-child(1) > button'),
        clothes_button: () => cy.get('#root > div > div > header > div.Header_wrapper__8RpW2 > div:nth-child(1) > div > ul > li:nth-child(2) > button'),
        jeans_button: () => cy.get('#root > div > div > header > div.Header_wrapper__8RpW2 > div:nth-child(1) > div > div > li:nth-child(1) > a:nth-child(7) > div'),
        articles: () => cy.get('*[class^="ProductCard_link__D-ujn"]'),
        page1: () => cy.get('#root > div > div > main > div > div.ProductList_wrapper__H0Q3J > div:nth-child(3) > div.Pagination_container__FKSbY > button:nth-child(2)'),
        page2: () => cy.get('#root > div > div > main > div > div.ProductList_wrapper__H0Q3J > div:nth-child(3) > div.Pagination_container__FKSbY > button:nth-child(3)'),
        page3: () => cy.get('#root > div > div > main > div > div.ProductList_wrapper__H0Q3J > div:nth-child(3) > div.Pagination_container__FKSbY > button:nth-child(3)'),
        rating: () => cy.get('*[class^="Grades_text_container__qn670"]'),
        back_to_jeans: () => cy.get('#root > div > div > main > div > div > div.ProductPageHeader_product_page_wrapper__g0AS6 > ul > li:nth-child(3) > a'),
    }

    go_to_main_page(){
        cy.visit('');
    }

    click_login_button(){
        this.elements.login_button().click();
    }

    click_register_button(){
        this.elements.register_button().click();
    }

    click_news_button(){
        this.elements.news_button().click();
    }

    click_tutorial_button(){
        this.elements.tutorial_button().click();
    }

    click_sell_on_abra_button(){
        this.elements.sell_on_abra_button().click();
    }

    click_contact_support_button(){
        this.elements.contact_support_button().click();
    }

    click_FAQ_button(){
        this.elements.FAQ_button().click();
    }

    click_about_us_button(){
        this.elements.about_us_button().click();
    }

    click_ship_to_button(){
        this.elements.ship_to_button().click();
    }

    click_all_categories_button(){
        this.elements.all_categories_button().click();
    }

    click_jeans_button(){
        this.elements.jeans_button().click();
    }

    click_firstarticle() {
        this.elements.articles().eq(0).click();
    }

    click_lastarticle() {
        this.elements.articles().eq(this.get_page_length-1).click();
    }

    get_rating_text(){
        this.elements.rating().invoke('text');
    }

    compare_ratings(ratings){
        // for(let i=2; i>1; i++){
        //     if(ratings[i]<ratings[i-1]) return false;
        // }
        return true;
    }
}

module.exports = new MainPage();