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
const letsGet = document.querySelector('.letsGet');
const ready = document.querySelector('.ready');
const contactMe = document.querySelector('.contactMe');
const yourName = document.querySelector('.yourName');





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
        ready.textContent = data[attr].ready;
        letsGet.textContent = data[attr].letsGet;
        contactMe.textContent = data[attr].contactMe;
        yourName.textContent = data[attr].yourName;


    })
});

var data = { 
    "BRASIL": {
        "logo": "logotipo",
        "who": "Quem n??s somos",
        "service": "Servi??os",
        "contact": "Contato",
        "titleOneSection": "CONECTANDO PESSOAS E NEG??CIOS",
        "subTitleOneSection": 
        "Criamos experi??ncias digitais em plataformas m??veis,aplica????es web adaptadas ao seu neg??cio,indicadores eficientes baseados nas melhores pr??ticas de mercado,APIs leves e de alto desempenho para transformar seus neg??cios.",

        "titleTwoSection": "N??s temos o que voc?? precisa!",
        "subTitleTwoSection": "Somos especialistas em desenvolvimento de software sob medida para neg??cios digitais, desenvolvendo solu????es que criam oportunidades para nossos clientes",
        "fazemos": "o que fazemos",
        "sevTitle": "servi??o",
        "subTitleMobile":"Criamos experi??ncias digitais em plataformas m??veis",
        "subWebTitle":"Aplica????es web sob medida para o seu neg??cio",
        "subBiTitle":"Indicadores eficientes baseados nas melhores pr??ticas de mercado",
        "subApiTitle":"APIs leves e de alto desempenho para transformar seus neg??cios",
        "letsGet": "Vamos entrar em contato!",
        "ready":"Pronto para come??ar seu pr??ximo projeto conosco? Envie-nos um Gmail e entraremos em contato!",
        "contactMe":"Contate me",
        "yourName": "Nome",
        "last": "Sobrenome",
        "email": "Email",
        "msg": "Mensagem",
        "send": "Enviar Mensagem",
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
        "letsGet":"LET'S GET IN TOUCH!",
        "ready":"Let's get in touch! Ready to start your next project with us? Send us a Gmail and we'll be in touch!",
        "contactMe":"Contact me",
        "yourName": "Name",
        "last":"Last name",
        "email":"E-mail",
        "msg":"Message",
        "send":"Send Message",
    }   
}
        