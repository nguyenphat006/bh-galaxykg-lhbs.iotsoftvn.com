interface FormSelectProps {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: Array<{ value: string; label: string }>;
  placeholder?: string;
  required?: boolean;
  error?: string;
  helpText?: string;
  disabled?: boolean;
}

export function FormSelect({
  label,
  name,
  value,
  onChange,
  options,
  placeholder = 'Please select...',
  required = false,
  error,
  helpText,
  disabled = false
}: FormSelectProps) {
  const selectId = `select-${name}`;
  const errorId = `error-${name}`;
  const helpId = `help-${name}`;

  return (
    <div className="flex flex-col gap-2">
      <label 
        htmlFor={selectId}
        className=" text-sm text-[#212121]"
      >
        {label}
        {required && <span className="text-[#d32f2f] ml-1">*</span>}
      </label>
      
      <select
        id={selectId}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        disabled={disabled}
        aria-describedby={`${error ? errorId : ''} ${helpText ? helpId : ''}`.trim() || undefined}
        aria-invalid={error ? 'true' : 'false'}
        className={`
          h-12 px-4 
           text-[#212121]
          bg-white border
          ${error ? 'border-[#d32f2f]' : 'border-[#d0d0d0]'}
          ${disabled ? 'bg-[#f5f5f5] cursor-not-allowed' : 'cursor-pointer'}
          focus:outline-none focus:ring-2 focus:ring-[#1a5336] focus:border-transparent
          transition-colors
        `}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      
      {helpText && !error && (
        <p id={helpId} className=" text-xs text-[#666]">
          {helpText}
        </p>
      )}
      
      {error && (
        <p id={errorId} className=" text-xs text-[#d32f2f]" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
