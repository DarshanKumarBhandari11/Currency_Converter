import React, { useId } from "react";

export default function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div className={`bg-gradient-to-r from-blue-400 to-gray-800 p-3 rounded-lg text-sm flex ${className} shadow-md transition-shadow duration-200 ease-in-out hover:shadow-lg`}>
      <div className="w-1/2 pr-3">
        <label
          htmlFor={amountInputId}
          className="text-black/100 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-2 px-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition duration-200 ease-in-out placeholder-gray-400"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right pl-3">
        <p className="text-white/100 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-3 py-2 bg-gray-100 cursor-pointer outline-none border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition duration-200 ease-in-out"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
