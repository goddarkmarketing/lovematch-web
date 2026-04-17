import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import type { GiftItem } from '../../types/domain';
import { Button } from '../shared/Button';

const schema = z.object({
  name: z.string().min(2, 'ชื่อของขวัญต้องยาวอย่างน้อย 2 ตัวอักษร'),
  category: z.enum(['flowers', 'food', 'jewelry', 'drinks']),
  price: z.number().min(1, 'ราคาต้องมากกว่า 0'),
  image: z.url('กรอก URL รูปภาพให้ถูกต้อง'),
  badge: z.enum(['popular', 'premium']).optional().or(z.literal('')),
});

type FormValues = z.infer<typeof schema>;

interface GiftFormProps {
  gift?: GiftItem | null;
  onSubmit: (value: Omit<GiftItem, 'id'> & { id?: string }) => void;
}

export function GiftForm({ gift, onSubmit }: GiftFormProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      category: 'flowers',
      price: 99,
      image: '',
      badge: '',
    },
  });

  useEffect(() => {
    form.reset({
      name: gift?.name ?? '',
      category: gift?.category ?? 'flowers',
      price: gift?.price ?? 99,
      image: gift?.image ?? '',
      badge: gift?.badge ?? '',
    });
  }, [form, gift]);

  return (
    <form
      className="lm-form"
      onSubmit={form.handleSubmit((values: FormValues) => onSubmit({ ...values, badge: values.badge || undefined, id: gift?.id }))}
    >
      <label>
        ชื่อของขวัญ
        <input {...form.register('name')} />
        <span>{form.formState.errors.name?.message}</span>
      </label>
      <label>
        หมวดหมู่
        <select {...form.register('category')}>
          <option value="flowers">ดอกไม้</option>
          <option value="food">อาหาร</option>
          <option value="jewelry">เครื่องประดับ</option>
          <option value="drinks">เครื่องดื่ม</option>
        </select>
      </label>
      <label>
        ราคา
        <input type="number" {...form.register('price', { valueAsNumber: true })} />
        <span>{form.formState.errors.price?.message}</span>
      </label>
      <label>
        รูปภาพ URL
        <input {...form.register('image')} />
        <span>{form.formState.errors.image?.message}</span>
      </label>
      <label>
        Badge
        <select {...form.register('badge')}>
          <option value="">ไม่มี</option>
          <option value="popular">Popular</option>
          <option value="premium">Premium</option>
        </select>
      </label>
      <Button fullWidth>{gift ? 'บันทึกการแก้ไข' : 'เพิ่มของขวัญใหม่'}</Button>
    </form>
  );
}
