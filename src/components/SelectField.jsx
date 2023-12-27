/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React, { useId } from 'react'

const SelectField = ({options, label, className='', ...props}, ref) => {
    const id = useId()
    return (
    <div className='w-full'>
        {label && <label htmlFor={id} className=''></label>}
        <select
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        >
            {options?.map((opt) =>(
                <option key={opt} value={opt}>
                    {opt}
                </option>
            ))}
        </select>
    </div>
  )
}

export default React.forwardRef(SelectField)