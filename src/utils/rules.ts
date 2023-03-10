import type { RegisterOptions } from 'react-hook-form'
type Rules = { [key in 'email' | 'password']?: RegisterOptions }
export const rules = {
  email: {
    required: {
      value: true,
      message: 'Email là bắt buộc'
    },
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: 'Email không đúng định dạng'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài 5-160 ký tự'
    },
    minLength: {
      value: 5,
      message: 'Độ dài 5-160 ký tự'
    }
  },
  password: {
    required: {
      value: true,
      message: 'password là bắt buộc'
    },

    maxLength: {
      value: 160,
      message: 'Độ dài 5-160 ký tự'
    },
    minLength: {
      value: 5,
      message: 'Độ dài 5-160 ký tự'
    }
  },
  confirm_password: {
    required: {
      value: true,
      message: 'password là bắt buộc'
    },

    maxLength: {
      value: 160,
      message: 'Độ dài 5-160 ký tự'
    },
    minLength: {
      value: 5,
      message: 'Độ dài 5-160 ký tự'
    }
  }
}
