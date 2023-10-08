const Input = ({ placeholder, type }) => {
  return (
    <input
      type={type}
      name=""
      id="" 
      placeholder={placeholder} 
      className='w-full px-3 py-3 mb-5 text-base font-normal text-gray-900 border outline-none rounded-xl' />
  )
}

export default Input