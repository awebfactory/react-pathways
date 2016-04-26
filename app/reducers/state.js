// This file was for design purposes only and shows the criteria used to design and implement the reducers.
// First cut at state shape for path steps.
// We are using the second approach in the redux docs, that designed for user editable applications and nested entities.
// It's just a JavaScript object, but we make it an array of object(s) to satisfy basic JSON syntax. 
[{
  selectedPath: "basicDefault",
  entities: {
    users: {
      739: {
        id: 739,
        name: 'Andrew'
      }
    },
    steps: {
      42: {
        id: 42,
        title: 'Confusion about Flux and Relay',
        description: 'lorem ipusm descriptum',
        author: 739
      },
      100: {
        id: 100,
        title: 'Creating a Simple Application Using React JS and Flux Architecture',
        description: 'lorem ipusm descriptum',
        author: 739
      }
    }
  },
  stepsByPath: {
    reduxGettingStarted: {
      isFetching: true,
      didInvalidate: false,
      items: []
    },
    basicDefault: {
      isFetching: false,
      didInvalidate: false,
      lastUpdated: 1439478405547,
      items: [ 42, 100 ]
    }
  }
}];
