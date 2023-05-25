import { useState, useEffect } from "react"
const TipValues = [5, 10, 15, 25, 50]

const Tip = ({
  val,
  onChange
}) => {
  const [custom, setCustom] = useState()
  const handleCustom = (e) => {
    onChange(parseFloat(e.target.value) / 100 || 0)
    setCustom(parseFloat(e.target.value) || "")
  }

  useEffect(() => {
    if (!val) setCustom("")
  }, [val])

  return (
    <div className="space-y-2">
      <label className="text-sm text-darkCyan">
        Select Tip %
      </label>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {TipValues.map((tipVal, idx) =>
          <button 
            className={`${val === tipVal / 100 ? "bg-primary" : "bg-vDarkCyan text-white"} rounded-md p-2  active:bg-lightCyan active:text-vDarkCyan`}
            onClick={() => onChange(tipVal / 100 )}
            key={idx}
          >
            {tipVal}%
          </button> 
        )}
         <input 
          type="number" 
          value={custom}
          min={0}
          max={100}
          onChange={handleCustom}
          className={`bg-vLightCyan text-right py-2 px-4 rounded-md placeholder-cyan outline-none focus:ring-strongCyan focus:ring-2 text-vDarkCyan ${(val === 0 || val > 100) && "ring-red-800 ring-2"}`}
          placeholder="Custom"
        />
      </div>

    </div>
  )
}

export default Tip