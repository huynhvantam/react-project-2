import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { rules } from 'src/utils/rules'

interface FormData {
  email: string
  password: string
  confirm_password: string
}

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const onSubmit = handleSubmit((data) => {
    console.log('%c⧭', 'color: #514080', errors)
  })
  return (
    <div className='bg-orange'>
      <div className='container'>
        <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='rounded bg-white p-10 shadow-sm' onSubmit={onSubmit} noValidate>
              <div className='text-2xl'>Đăng ký</div>
              <input
                type='email'
                className='mt-2 w-full rounded-none border border-gray-300 outline-none focus:border-gray-500'
                placeholder='Email'
                {...register('email', rules.email)}
              />
              <div className='mt-1 min-h-[1.25rem] text-sm text-red-600'>{errors.email?.message}</div>
              <input
                type='password'
                className='mt-2 w-full rounded-none border border-gray-300 outline-none focus:border-gray-500'
                placeholder='Password'
                autoComplete='on'
                {...register('password', rules.password)}
              />
              <div className='mt-1 min-h-[1.25rem] text-sm text-red-600'>{errors.password?.message}</div>
              <input
                type='password'
                className='mt-2 w-full rounded-none border border-gray-300 outline-none focus:border-gray-500'
                placeholder='Confirm Password'
                {...register('password', rules.confirm_password)}
              />
              <div className='mt-1 min-h-[1.25rem] text-sm text-red-600'>{errors.confirm_password?.message}</div>
              <div className='mt-2'>
                <button className='flex w-full items-center justify-center bg-red-500 py-4 px-2 text-sm uppercase text-white hover:bg-red-600'>
                  Đăng ký
                </button>
              </div>
              <div className='mt-8 flex items-center justify-center'>
                <span className='text-gray-400'>Bạn đã có tài khoản?</span>
                <Link className='ml-1 text-red-400' to='/login'>
                  Đăng nhập
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
