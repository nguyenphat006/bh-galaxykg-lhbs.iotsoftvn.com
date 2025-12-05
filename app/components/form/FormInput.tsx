interface FormInputProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  helpText?: string;
  disabled?: boolean;
}

export function FormInput({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  error,
  helpText,
  disabled = false
}: FormInputProps) {
  const inputId = `input-${name}`;
  const errorId = `error-${name}`;
  const helpId = `help-${name}`;

  return (
    <div className="flex flex-col gap-2">
      <label 
        htmlFor={inputId}
        className=" text-sm text-[#212121]"
      >
        {label}
        {required && <span className="text-[#d32f2f] ml-1">*</span>}
      </label>
      
      <input
        id={inputId}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        aria-describedby={`${error ? errorId : ''} ${helpText ? helpId : ''}`.trim() || undefined}
        aria-invalid={error ? 'true' : 'false'}
        className={`
          h-12 px-4 
           text-[#212121]
          bg-white border
          ${error ? 'border-[#d32f2f]' : 'border-[#d0d0d0]'}
          ${disabled ? 'bg-[#f5f5f5] cursor-not-allowed' : ''}
          focus:outline-none focus:ring-2 focus:ring-[#1a5336] focus:border-transparent
          transition-colors
        `}
      />
      
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
