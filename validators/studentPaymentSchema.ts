import { ZodSchema, string, z } from 'zod';
import levelSchema from './level'
import classSchema from './classSchema'
import { studentRegistrationSchema } from './auth';
const today = new Date();
type LevelFormValues = z.infer<typeof levelSchema>
type ClassSchema = z.infer<typeof classSchema>
type StudentFormValues=z.infer<typeof studentRegistrationSchema>
export const studentPaymentSchema: ZodSchema<{

  paymentTitle: string;
  paymentAmount: number;
  paymentDate: Date;
  typeofTransaction: string;
  fromWho: string;
  student:{name:string;value:string;label:string;id:string};
  parent:{name:string;id:string};
  level:string;             
  class:string;
  paymentPlan:{id: string;
    name:string;
    period:string;
    fee: number;
    value:string;
    label:string;
  };
  status: string;
  description:string;
}> = z.object({
 
  paymentTitle: z.string().min(2, 'Please enter a value between 2 and 50 characters.').max(50, 'Please enter a value between 2 and 50 characters.'),
  paymentAmount: z.number().min(2, 'Please enter a value greater than 2.').max(50000, 'Please enter a value less than or equal to 50000.'),
  paymentDate: z.date().refine((value: Date) => value < new Date(), { message: 'Please enter a valid date.' }),
  typeofTransaction: z.string().min(5, 'Please enter a value between 5 and 255 characters.').max(255, 'Please enter a value between 5 and 255 characters.'),
  fromWho: z.string(),
  student:z.object({name:string(),value:string(),label:string(),id:string()}),  
  parent: z.object({name:z.string(),id:z.string()}),
  level: z.string(),
  class: z.string(),
  paymentPlan: z.object({ id: z.string(),
    name: z.string(),
    period: z.string(),
    fee:  z.number().min(2, 'Please enter a value between 2 and 50 characters.'),
    value: z.string(),
    label: z.string(),}),
  status: z.string().min(2, 'Please enter a value between 2 and 50 characters.').max(50, 'Please enter a value between 2 and 50 characters.'), 
  description: z.string().min(2, 'Please enter a value between 2 and 50 characters.').max(50, 'Please enter a value between 2 and 50 characters.'), 

})