import Image from 'next/image'

const Input = ({
  logo,
  val,
  label,
  onChange
}) => {

  const handleChange = (e) => {
    onChange(parseFloat(e.target.value) || 0)
  }
  
  return (
    <div className="w-full relative space-y-2">
      <div className="flex justify-between">
        <label className="text-sm text-darkCyan">
          {label}
        </label>
        {val === 0 &&
          <label className="text-sm text-red-800">
            Can&apos;t be zero
          </label>
        }
      </div>
      <div className="relative">
        <input 
          type="number" 
          value={val}
          min={0}
          onChange={handleChange}
          className={`bg-vLightCyan text-right w-full py-2 px-4 rounded-md placeholder-cyan outline-none focus:ring-primary focus:ring-2 text-vDarkCyan ${val === 0 && "ring-red-800 ring-2"}`}
          placeholder="0"
        />
        <Image src={logo} className="absolute left-3 bottom-1/2 translate-y-1/2	" alt="logo"/>
      </div>
      
    </div>

  )
}

export default Input;