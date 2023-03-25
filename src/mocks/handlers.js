import { rest } from 'msw'

export const handlers = [
  rest.get('https://my-json-server.typicode.com/stanko-ingemark/hang_the_wise_man_frontend_task/highscores', (req, res, ctx) => {
    return res(
      ctx.json([
        { length: 5, uniqueCharacters: 3, timestamp: 1647801323, errors: 2, userName: 'Filip', quoteId: "Ckh_FdZYHyf" },
        { length: 8, uniqueCharacters: 5, timestamp: 1647797723, errors: 1, userName: "Quashawn", quoteId: "2xpHvSOQMD" },
        { length: 6, uniqueCharacters: 4, timestamp: 1647804923, errors: 3, userName: "Huy", quoteId: "HMBEfGB94i" },
      ])
    )
  }),
  rest.get('https://my-json-server.typicode.com/stanko-ingemark/hang_the_wise_man_frontend_task/highscores/2', (req, res, ctx) => {
    return res(
      ctx.json([
        { length: 5, uniqueCharacters: 3, timestamp: 1647801323, errors: 2, userName: 'Filip', quoteId: "Ckh_FdZYHyf" },
        { length: 8, uniqueCharacters: 5, timestamp: 1647797723, errors: 2, userName: "Quashawn", quoteId: "2xpHvSOQMD" },
        { length: 6, uniqueCharacters: 4, timestamp: 1647804923, errors: 3, userName: "Huy", quoteId: "HMBEfGB94i" },
    ])
    )
  }),
  rest.get('https://my-json-server.typicode.com/stanko-ingemark/hang_the_wise_man_frontend_task/highscores/3', (req, res, ctx) => {
    return res(
      ctx.json([
        { length: 5, uniqueCharacters: 5, timestamp: 1647801323, errors: 2, userName: 'Filip', quoteId: "Ckh_FdZYHyf" },
        { length: 8, uniqueCharacters: 5, timestamp: 1647797723, errors: 2, userName: "Quashawn", quoteId: "2xpHvSOQMD" },
        { length: 6, uniqueCharacters: 4, timestamp: 1647804923, errors: 3, userName: "Huy", quoteId: "HMBEfGB94i" },
    ])
    )
  }),
  rest.get('https://my-json-server.typicode.com/stanko-ingemark/hang_the_wise_man_frontend_task/highscores/4', (req, res, ctx) => {
    return res(
      ctx.json([
        { length: 8, uniqueCharacters: 5, timestamp: 1647801323, errors: 2, userName: 'Filip', quoteId: "Ckh_FdZYHyf" },
        { length: 8, uniqueCharacters: 5, timestamp: 1647797723, errors: 2, userName: "Quashawn", quoteId: "2xpHvSOQMD" },
        { length: 6, uniqueCharacters: 4, timestamp: 1647804923, errors: 3, userName: "Huy", quoteId: "HMBEfGB94i" },
    ])
    )
  })
]