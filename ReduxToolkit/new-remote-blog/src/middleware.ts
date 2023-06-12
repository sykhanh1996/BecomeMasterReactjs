import { AnyAction, Middleware, MiddlewareAPI, isRejected, isRejectedWithValue } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { isEntityError } from 'utils/helper'

function isPayloadErrorMessage(payload: unknown): payload is {
  data: {
    error: string
  }
  status: number
} {
  return (
    typeof payload === 'object' && payload !== null && 'data' in payload && (payload as any).data?.error === 'string'
  )
}
export const rtkQueryErrorLogger: Middleware = (api: MiddlewareAPI) => (next) => (action: AnyAction) => {
  if (isRejected(action)) {
    if (action.error.name === 'CustomError') {
      // Những lỗi liên quan đến quá trình thực thi
      toast.warn(action.error.message)
    }
  }

  if (isRejectedWithValue(action)) {
    if (isPayloadErrorMessage(action.payload)) {
      toast.warn(action.payload.data.error)
    }
  }
  return next(action) //Cho phép thực hiện action tiếp theo
}
