import { z } from 'zod'

export const personalInfoSchema = z.object({
  firstName: z.string().nonempty('Primeiro nome é obrigatório'),
  lastName: z.string(),
  age: z
    .number({
      errorMap: () => {
        return {
          message: 'Idade deve ser um número',
        }
      },
    })
    .int()
    .positive(),
  email: z.string().email('Formato de e-mail inválido'),
})
