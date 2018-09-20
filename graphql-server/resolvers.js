import fetch from 'node-fetch';

export const resolvers = {
  Query: {
    message: (_1, _2, { restURL }) => {

      debugger;

      return fetch(`${restURL}/message`)
        .then(res => res.json())
        .then(({ text }) => text);

    },
  },
};
