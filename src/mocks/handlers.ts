import { rest } from 'msw'
import { todos } from "../../todos";

export const handlers = [
  rest.get('http://localhost:4000/todos', (req, res, ctx) => {
    return res(
      ctx.json(todos)
    )
  }),

  rest.patch(`http://localhost:4000/todos/:id`, (req, res, ctx) => {
    // @ts-ignore
    const { name } = req.body
    const { id } = req.params

    return res(
      ctx.json({
        id,
        name,
        completed: false,
        createdAt: Date.now(),
        updatedAt: Date.now()
      })
    )
  }),

  rest.post('http://localhost:4000/todos', (req, res, ctx) => {
    // @ts-ignore
    const { name } = req.body

    return res(
      ctx.json({
        id: 3,
        name,
        completed: false,
        createdAt: Date.now(),
        updatedAt: Date.now()
      })
    )
  }),



  rest.delete(`http://localhost:4000/todos/:id`, (req, res, ctx) => {
    const { id } = req.params

    return res(
      ctx.json({
        id,
        name: 'name',
        completed: false,
        createdAt: Date.now(),
        updatedAt: Date.now()
      })
    )
  })

]
