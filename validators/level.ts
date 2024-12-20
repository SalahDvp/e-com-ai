import { z } from 'zod';

// Define the validation schema using Zod
const levelSchema = z.object({
    id: z.string().min(1, { message: 'ID is required' }) ,
    level: z.string().min(1, { message: 'Level is required' }),
    start: z.string().min(1, { message: 'Start date is required' }),
    end: z.string().min(1, { message: 'End date is required' }),
    fee: z.number().min(0, { message: 'Fee must be a positive number' }),
    status: z.enum(["open", "closed"]),
    registrationDeadline: z.string().min(1, { message: 'Registration deadline is required' }),
    subjects: z.array( z.object({
      value: z.string(),
      label:z.string(),
    })).min(1, { message: 'At least one subject is required' }),
    prices: z.array(  z.object({
      name: z.string(),
      period: z.enum(["1 month", "2 months","4 months","1 year"]),

      price: z.number(),
    })).min(1, { message: 'At least one method is required' }),
});

export default levelSchema;