import { z } from 'zod'

export const personalInfoSchema = z.object({
  personalInfo: z.object({
    firstName: z.string().nonempty('Primeiro nome é obrigatório'),
    lastName: z.string(),
    email: z.string().email('Formato de e-mail inválido'),
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
  }),
})
