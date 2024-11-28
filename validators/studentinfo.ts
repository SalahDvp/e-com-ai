import { ZodSchema, string, z } from 'zod';
import levelSchema from './level'
import classSchema from './classSchema'
import { studentRegistrationSchema } from './auth';
const today = new Date();
type LevelFormValues = z.infer<typeof levelSchema>
type ClassSchema = z.infer<typeof classSchema>
type StudentFormValues=z.infer<typeof studentRegistrationSchema>

export const studnetRegistrationSchema: ZodSchema<{
    student:{name:string, id:string};

>}= z.object({
    student:z.object({name:string(),id:string(),status:string}), 

})