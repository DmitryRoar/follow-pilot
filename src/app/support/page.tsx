const Support = () => {
  return (
    <div className='bg-white min-h-screen'>
      <div className='h-16' />
      <div className='mt-40 mx-8 flex flex-col gap-4'>
        <div>
          <h1 className='text-3xl font-medium'>Support & Kundenservice</h1>
        </div>
        <div className='flex flex-col'>
          <label htmlFor='input' className='mb-1'>
            dasdas
          </label>
          <input type='text' id='input' className='border-solid border-2' />
        </div>
        <button className='self-start bg-[#eee] p-3 text-sm tracking-wide'>
          Nächster Schritt
        </button>
      </div>
    </div>
  )
}

export default Support
