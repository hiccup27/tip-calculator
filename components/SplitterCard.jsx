"use client"
import React, { useState, useMemo } from 'react'
import Input from './Input'
import Tip from './Tip'
import DollarImg from '@/images/icon-dollar.svg'
import PersonImg from '@/images/icon-person.svg'

const SplitterCard = () => {
  const [bill, setBill] = useState()
  const [people, setPeople] = useState()
  const [tip, setTip] = useState()

  const handleReset = () => {
    setBill("")
    setPeople("")
    setTip("")
  }

  const tipAmount = useMemo(() => {
    if (tip > 0 && bill > 0 && people > 0) {
      const val = parseInt((bill / people * tip) * 100)
      return (val / 100).toFixed(2)
    }
    else return "0.00"
  }, [tip, bill, people])

  const total = useMemo(() => {
    if (tip > 0 && bill > 0 && people > 0) {
      const val = bill / people * tip + bill / people
      return val.toFixed(2)
    }
    else return "0.00"
  }, [bill, people, tip])

  return (
    <div className="bg-white rounded-xl text-xl p-8 drop-shadow-2xl w-full max-w-4xl grid grid-rows md:grid-cols-2 gap-8">
      <div className="py-2 space-y-6">
        <Input logo={DollarImg} val={bill} label="Bill" onChange={setBill} />
        <Tip val={tip} onChange={setTip} />
        <Input logo={PersonImg} val={people} label="Number of People" onChange={setPeople} />
      </div>
      <div className="bg-vDarkCyan rounded-xl p-8 flex flex-col justify-between space-y-8">
        <div className="space-y-8">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <label className="text-lightCyan text-base">Tip Amount</label>
              <label className="text-cyan text-sm">/ person</label>
            </div>
            <label className="text-4xl text-primary">
              ${tipAmount}
            </label>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <label className="text-lightCyan text-base">Total</label>
              <label className="text-cyan text-sm">/ person</label>
            </div>
            <label className="text-4xl text-primary">
              ${total}
            </label>
          </div>
        </div>
        <button 
          disabled={!bill && !tip && !people}
          className="uppercase w-full rounded bg-primary text-vDarkCyan p-2 text-base disabled:bg-darkCyan active:bg-lightCyan"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default SplitterCard