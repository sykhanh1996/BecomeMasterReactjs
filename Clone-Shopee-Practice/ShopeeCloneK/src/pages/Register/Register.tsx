import { Link } from 'react-router-dom'
import Button from 'src/components/Button'
import Input from 'src/components/Input'

export default function Register() {
  return (
    <div className='bg-orange'>
      <div className='container'>
        <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='rounded bg-white p-10 shadow-sm' noValidate>
              <div className='text-2xl'>Đăng ký</div>
              <Input name='email' type='email' className='mt-8' placeholder='Email' />
              <Input
                name='password'
                type='password'
                className='mt-2'
                classNameEye='absolute right-[5px] h-5 w-5 cursor-pointer top-[12px]'
                placeholder='Password'
                autoComplete='on'
              />

              <Input
                name='confirm_password'
                type='password'
                className='mt-2'
                classNameEye='absolute right-[5px] h-5 w-5 cursor-pointer top-[12px]'
                placeholder='Confirm Password'
                autoComplete='on'
              />

              <div className='mt-2'>
                <Button className='flex w-full items-center justify-center bg-red-500 px-2 py-4 text-sm uppercase text-white hover:bg-red-600'>
                  Đăng ký
                </Button>
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
