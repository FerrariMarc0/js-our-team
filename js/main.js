'use strict';

const team= [  

    {nome: 'Wayne Barnett', ruolo: 'Founder & CEO', img: 'wayne-barnett-founder-ceo.jpg'},
    {nome: 'Angela Caroll', ruolo: 'Chief Editor', img: 'angela-caroll-chief-editor.jpg'},
    {nome: 'Walter Gordon', ruolo: 'Office Manager', img: 'walter-gordon-office-manager.jpg'},
    {nome: 'Angela Lopez', ruolo: 'Social Media Manager', img: 'angela-lopez-social-media-manager.jpg'},
    {nome: 'Scott Estrada', ruolo: 'Developer', img: 'scott-estrada-developer.jpg'},
];
team.push({nome: 'Barbara Ramos', ruolo: 'Graphic Designer', img: 'barbara-ramos-graphic-designer.jpg'});

console.log(team);

for(let i = 0; i < team.length; i++){
    console.log(team[i]);
    console.log(team[i].nome);
    console.log(team[i]['ruolo']);
    console.log(team[i].img);
}

