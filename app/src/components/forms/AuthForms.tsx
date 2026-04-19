import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { z } from 'zod';
import { useLoveMatch } from '../../context/LoveMatchContext';
import { Button } from '../shared/Button';

const loginSchema = z.object({
  email: z.string().min(1, 'กรอกอีเมลหรือไอดี'),
  password: z.string().min(4, 'รหัสผ่านอย่างน้อย 4 ตัวอักษร'),
  role: z.enum(['user', 'admin']),
});

const registerSchema = z
  .object({
    name: z.string().min(2, 'กรอกชื่ออย่างน้อย 2 ตัวอักษร'),
    email: z.email('กรอกอีเมลให้ถูกต้อง'),
    password: z.string().min(6, 'รหัสผ่านอย่างน้อย 6 ตัวอักษร'),
    confirmPassword: z.string().min(6, 'ยืนยันรหัสผ่าน'),
  })
  .refine((value) => value.password === value.confirmPassword, {
    message: 'รหัสผ่านไม่ตรงกัน',
    path: ['confirmPassword'],
  });

type LoginValues = z.infer<typeof loginSchema>;
type RegisterValues = z.infer<typeof registerSchema>;

export function AuthForms() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') === 'register' ? 'register' : 'login';
  const redirectPath = searchParams.get('redirect');
  const { login, register } = useLoveMatch();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState('');

  const loginForm = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '', role: 'user' },
  });

  const registerForm = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: { name: '', email: '', password: '', confirmPassword: '' },
  });

  const selectedRole = useWatch({ control: loginForm.control, name: 'role' });

  const goToTab = (tab: 'login' | 'register') => {
    const nextParams = new URLSearchParams();
    if (tab === 'register') nextParams.set('tab', 'register');
    if (redirectPath) nextParams.set('redirect', redirectPath);
    setSearchParams(nextParams);
  };

  const submitLogin = loginForm.handleSubmit(async (values) => {
    setLoginError('');

    try {
      await login(values);
      navigate(redirectPath || (values.role === 'admin' ? '/admin/overview' : '/app/dashboard'));
    } catch {
      setLoginError(values.role === 'admin' ? 'แอดมินต้องใช้ id: admin และรหัสผ่าน: 1234' : 'ไม่สามารถเข้าสู่ระบบได้');
    }
  });

  const submitRegister = registerForm.handleSubmit(async (values) => {
    await register(values);
    navigate(redirectPath || '/app/dashboard');
  });

  return (
    <div className="auth-card">
      <div className="brand auth-brand">LoveMatch</div>
      <div className="auth-tabs">
        <button className={activeTab === 'login' ? 'is-active' : ''} onClick={() => goToTab('login')}>
          เข้าสู่ระบบ
        </button>
        <button className={activeTab === 'register' ? 'is-active' : ''} onClick={() => goToTab('register')}>
          สมัครสมาชิก
        </button>
      </div>

      {activeTab === 'login' ? (
        <form className="lm-form" onSubmit={submitLogin}>
          <label>
            อีเมลหรือไอดี
            <input placeholder={selectedRole === 'admin' ? 'admin' : 'example@mail.com'} {...loginForm.register('email')} />
            <span>{loginForm.formState.errors.email?.message}</span>
          </label>
          <label>
            รหัสผ่าน
            <input type="password" placeholder="กรอกรหัสผ่าน" {...loginForm.register('password')} />
            <span>{loginForm.formState.errors.password?.message}</span>
          </label>
          <label>
            ประเภทบัญชี
            <select {...loginForm.register('role')}>
              <option value="user">ผู้ใช้ทั่วไป</option>
              <option value="admin">ผู้ดูแลระบบ</option>
            </select>
          </label>
          {loginError ? <p className="form-error">{loginError}</p> : null}
          <Button fullWidth disabled={loginForm.formState.isSubmitting}>
            {loginForm.formState.isSubmitting ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ'}
          </Button>
        </form>
      ) : (
        <form className="lm-form" onSubmit={submitRegister}>
          <label>
            ชื่อที่แสดง
            <input placeholder="ชื่อของคุณ" {...registerForm.register('name')} />
            <span>{registerForm.formState.errors.name?.message}</span>
          </label>
          <label>
            อีเมล
            <input placeholder="name@mail.com" {...registerForm.register('email')} />
            <span>{registerForm.formState.errors.email?.message}</span>
          </label>
          <label>
            รหัสผ่าน
            <input type="password" placeholder="อย่างน้อย 6 ตัวอักษร" {...registerForm.register('password')} />
            <span>{registerForm.formState.errors.password?.message}</span>
          </label>
          <label>
            ยืนยันรหัสผ่าน
            <input type="password" placeholder="ยืนยันรหัสผ่าน" {...registerForm.register('confirmPassword')} />
            <span>{registerForm.formState.errors.confirmPassword?.message}</span>
          </label>
          <Button fullWidth disabled={registerForm.formState.isSubmitting}>
            {registerForm.formState.isSubmitting ? 'กำลังสร้างบัญชี...' : 'สมัครสมาชิก'}
          </Button>
        </form>
      )}
    </div>
  );
}
