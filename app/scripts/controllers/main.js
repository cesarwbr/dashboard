'use strict';

angular.module('dashboardApp')
  .controller('MainCtrl', function($scope) {
    var widgets1 = [];

    widgets1.push({
      title: 'Produtos',
      content: 'images/graph4.png',
      type: 'image'
    });

    widgets1.push({
      title: 'Atividades Recentes',
      content: 'images/graph7.png',
      type: 'image'
    });

    $scope.widgets1 = widgets1;

    var widgets2 = [];

    widgets2.push({
      title: 'Vendas Cidades',
      content: 'images/graph5.png',
      type: 'image'
    });

    widgets2.push({
      title: 'Pipeline de Vendas',
      content: 'images/graph1.png',
      type: 'image'
    });

    $scope.widgets2 = widgets2;

    var widgets3 = [];

    widgets3.push({
      title: 'Top 5 Produtos',
      content: 'images/graph3.png',
      type: 'image'
    });

    widgets3.push({
      title: 'Oportunidades',
      content: 'images/graph2.png',
      type: 'image'
    });

    widgets3.push({
      title: 'Contatos',
      content: 'images/graph6.png',
      type: 'image'
    });

    $scope.widgets3 = widgets3;
  });
