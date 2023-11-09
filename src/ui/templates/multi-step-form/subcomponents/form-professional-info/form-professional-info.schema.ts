import { parseCurrencyToNumber } from '@/utils'
import { z } from 'zod'

export const professionalInfoSchema = z.object({
  professionalInfo: z.object({
    jobTitle: z.string().nonempty('Cargo é obrigatório'),
    company: z.string().nonempty('Empresa é obrigatório'),
    yearsOfExperience: z
      .number({
        errorMap: () => {
          return {
            message: 'Anos de experiência deve ser um número',
          }
        },
      })
      .int('Anos de experiência deve ser um número inteiro')
      .positive('Anos de experiência deve ser um número positivo'),
    salary: z
      .string()
      .nonempty('Salário é obrigatório')
      .refine(
        (salary) => {
          const salaryNumber = parseCurrencyToNumber(salary)
          return salaryNumber > 0
        },
        {
          message: 'Deve ser um número positivo',
        },
      ),
  }),
})
