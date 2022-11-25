import React, { useEffect, useState } from "react"

export function AboutPage() {
  const [value, setValue] = useState<string[]>([]);

  const handleSelectInput = (value: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(Array.from(value.target.selectedOptions, o => o.value));
  }

  return (
    <>
      <p>{value}</p>
      <select multiple={true} name="" id="" onChange={handleSelectInput}>
        <option value="A">1</option>
        <option value="B">2</option>
        <option value="C">3</option>
      </select>
    </>
  )
}
