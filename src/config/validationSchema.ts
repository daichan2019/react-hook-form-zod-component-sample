import { z } from 'zod';

export const validationSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'メールアドレスは必ず入力してください。' })
    .regex(
      new RegExp(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      ),
      {
        message: 'メールアドレスの形式が不正です。',
      }
    )
    .max(40, { message: 'メールアドレスは40文字以内で入力してください。' }),
});
