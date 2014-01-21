'use strict';

angular.module('dashboardApp')
  .controller('MainCtrl', function($scope) {
    var widgets1 = [];

    widgets1.push({
      title: 'Produtos',
      content: 'images/portal/graph4.png',
      type: 'image'
    });

    widgets1.push({
      title: 'Atividades Recentes',
      content: 'images/portal/graph7.png',
      type: 'image'
    });

    $scope.widgets1 = widgets1;

    var widgets2 = [];

    widgets2.push({
      title: 'Vendas Cidades',
      content: 'images/portal/graph5.png',
      type: 'image'
    });

    widgets2.push({
      title: 'Pipeline de Vendas',
      content: 'images/portal/graph1.png',
      type: 'image'
    });

    $scope.widgets2 = widgets2;

    var widgets3 = [];

    widgets3.push({
      title: 'Top 5 Produtos',
      content: 'images/portal/graph3.png',
      type: 'image'
    });

    widgets3.push({
      title: 'Oportunidades',
      content: 'images/portal/graph2.png',
      type: 'image'
    });

    widgets3.push({
      title: 'Contatos',
      content: 'images/portal/graph6.png',
      type: 'image'
    });

    $scope.widgets3 = widgets3;
  });
