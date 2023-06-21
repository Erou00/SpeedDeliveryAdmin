import React from 'react'

const ErrorMsg = ({ErrorMsgText}) => {
  return (
    <div>
    <p className='text-danger'>
        <small>
            <strong>
                {ErrorMsgText}
            </strong>
        </small>
    </p>
</div>
  )
}

export default ErrorMsg