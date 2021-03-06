const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   response.send('Hello from Firebase!');
// });

exports.cards = functions.https.onRequest((request, response) => {
  const data = [{
    icon: 'pay-circle-o',
    color: '#64ea91',
    title: {
      'zh-CN': 'Online Review',
      'en-US': 'Online Review'
    },
    number: 2500,
    percent: 25
  }, {
    icon: 'team',
    color: '#8fc9fb',
    title: {
      'zh-CN': 'Novo Auditor',
      'en-US': 'New Customers'
    },
    number: 5000,
    percent: 50
  }, {
    icon: 'message',
    color: '#d897eb',
    title: {
      'zh-CN': 'Projetos Ativos',
      'en-US': 'Active Projects'
    },
    number: 7500,
    percent: 75
  }, {
    icon: 'shopping-cart',
    color: '#f69899',
    title: {
      'zh-CN': 'Referencias',
      'en-US': 'Referrals'
    },
    number: 10000,
    percent: 100
  }]
  response.json(data)
})

exports.sales = functions.https.onRequest((request, response) => {
  const data = [{
    year: '2010',
    food: 123,
    clothes: 432,
    electronics: 343
  }, {
    year: '2011',
    food: 456,
    clothes: 745,
    electronics: 634
  }, {
    year: '2012',
    food: 386,
    clothes: 672,
    electronics: 253
  }, {
    year: '2013',
    food: 633,
    clothes: 222,
    electronics: 643
  }, {
    year: '2014',
    food: 433,
    clothes: 442,
    electronics: 783
  }, {
    year: '2015',
    food: 563,
    clothes: 432,
    electronics: 853
  }, {
    year: '2016',
    food: 673,
    clothes: 432,
    electronics: 973
  }, {
    year: '2017',
    food: 283,
    clothes: 432,
    electronics: 593
  }]
  response.json(data)
})
