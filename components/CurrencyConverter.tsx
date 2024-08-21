"use client"

import { useState } from "react"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function CurrencyConverter() {
  const [baseCurrency, setBaseCurrency] = useState("USD")
  const [targetCurrency, setTargetCurrency] = useState("EUR")
  const [amount, setAmount] = useState(0)
  const [convertedAmount, setConvertedAmount] = useState(0)
  const currencies = ["USD", "EUR", "GBP", "JPY", "AUD", "CAD", "CHF", "CNY", "HKD", "NZD"]
  const handleBaseChange = (value) => {
    setBaseCurrency(value)
    convertCurrency()
  }
  const handleTargetChange = (value) => {
    setTargetCurrency(value)
    convertCurrency()
  }
  const handleAmountChange = (e) => {
    setAmount(e.target.value)
    convertCurrency()
  }
  const convertCurrency = () => {
    const conversionRate = 0.85
    setConvertedAmount((amount * conversionRate).toFixed(2))
  }
  return (
    <div className="flex items-center justify-center h-screen bg-background text-foreground rounded-2xl">
      <div className="w-full max-w-3xl p-6 bg-card rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Currency Converter</h1>
        <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="base-currency" className="text-sm font-medium">
              Base Currency
            </label>
            <Select value={baseCurrency} onValueChange={handleBaseChange}>
              <SelectTrigger id="base-currency">
                <SelectValue placeholder="Select currency" />
              </SelectTrigger>
              <SelectContent>
                {currencies.map((currency) => (
                  <SelectItem key={currency} value={currency}>
                    {currency}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label htmlFor="target-currency" className="text-sm font-medium">
              Target Currency
            </label>
            <Select value={targetCurrency} onValueChange={handleTargetChange}>
              <SelectTrigger id="target-currency">
                <SelectValue placeholder="Select currency" />
              </SelectTrigger>
              <SelectContent>
                {currencies.map((currency) => (
                  <SelectItem key={currency} value={currency}>
                    {currency}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="amount" className="text-sm font-medium">
              Amount
            </label>
            <div className="flex items-center">
              <Input id="amount" type="number" value={amount} onChange={handleAmountChange} className="flex-1" />
              <span className="ml-2 text-muted-foreground">{baseCurrency}</span>
            </div>
          </div>
          <div className="space-y-2">
            <span className="text-sm font-medium">Converted Amount</span>
            <div className="flex items-center">
              <span className="text-2xl font-bold">{convertedAmount}</span>
              <span className="ml-2 text-muted-foreground">{targetCurrency}</span>
            </div>
          </div>
        </div>
        <Button type="button" className="w-full" onClick={convertCurrency}>
          Convert
        </Button>
      </div>
    </div>
  )
}