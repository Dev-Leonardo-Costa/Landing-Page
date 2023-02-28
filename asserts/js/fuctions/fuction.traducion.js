const langEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('a');
const titleOneSection = document.querySelector('.titleOneSection');
const subTitleOneSection = document.querySelector('.subTitleOneSection');
const logo = document.querySelector('.logo');
const who = document.querySelector('.who');
const service = document.querySelector('.service');
const contact = document.querySelector('.contact');
const titleTwoSection = document.querySelector('.titleTwoSection');
const subTitleTwoSection = document.querySelector('.subTitleTwoSection');
const sevTitle = document.querySelector('.sevTitle');
const subTitleMobile= document.querySelector('.subTitleMobile');
const subWebTitle = document.querySelector('.subWebTitle');
const subBiTitle = document.querySelector('.subBiTitle');
const subApiTitle = document.querySelector('.subApiTitle');
const fazemos = document.querySelector('.fazemos');



link.forEach(el => {
    el.addEventListener('click', () => {
        const attr = el.getAttribute('language');
        titleOneSection.textContent = data[attr].titleOneSection;
        subTitleOneSection.textContent = data[attr].subTitleOneSection;
        logo.textContent = data[attr].logo;
        who.textContent = data[attr].who;
        service.textContent = data[attr].service;
        contact.textContent = data[attr].contact;
        titleTwoSection.textContent = data[attr].titleTwoSection;
        subTitleTwoSection.textContent = data[attr].subTitleTwoSection;
        fazemos.textContent = data[attr].fazemos;

        sevTitle.textContent = data[attr].sevTitle;
        subTitleMobile.textContent = data[attr].subTitleMobile;
        subWebTitle.textContent = data[attr].subWebTitle;
        subBiTitle.textContent = data[attr].subBiTitle;
        subApiTitle.textContent = data[attr].subApiTitle;
    })
});

var data = { 
    "BRASIL": {
        "logo": "logotipo",
        "who": "Quem nós somos",
        "service": "Serviços",
        "contact": "Contato",
        "titleOneSection": "CONECTANDO PESSOAS E NEGÓCIOS",
        "subTitleOneSection": 
        "Criamos experiências digitais em plataformas móveis,aplicações web adaptadas ao seu negócio,indicadores eficientes baseados nas melhores práticas de mercado,APIs leves e de alto desempenho para transformar seus negócios.",

        "titleTwoSection": "Nós temos o que você precisa!",
        "subTitleTwoSection": "Somos especialistas em desenvolvimento de software sob medida para negócios digitais, desenvolvendo soluções que criam oportunidades para nossos clientes",
        "fazemos": "o que fazemos",
        "sevTitle": "serviço",
        "subTitleMobile":"Criamos experiências digitais em plataformas móveis",
        "subWebTitle":"Aplicações web sob medida para o seu negócio",
        "subBiTitle":"Indicadores eficientes baseados nas melhores práticas de mercado",
        "subApiTitle":"APIs leves e de alto desempenho para transformar seus negócios",
    },
    "EUA": {
        "logo": "logo",
        "who": "who we are",
        "service": "Services",
        "contact": "Contact",
        "titleOneSection": "CONNECTING PEOPLE AND BUSINESS",
        "subTitleOneSection": 
        "We create digital experiences on mobile platforms, web applications tailored to your business, efficient indicators based on best market practices, lightweight and performance APIs to transform your business.",
        
        "titleTwoSection": "We have what you need!",
        "subTitleTwoSection": "We are specialists in custom software development for digital business, developing solutions that create opportunities for our clients",
        "sevTitle": "service",
        "fazemos": "what we do",

        "subTitleMobile":"We create digital experiences on mobile platforms",
        "subWebTitle":"Tailor-made web applications for your business",
        "subBiTitle":"Efficient indicators based on best market practices",
        "subApiTitle":"Lightweight, high-performance APIs to transform your business",
    }
}
        