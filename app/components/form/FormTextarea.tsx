interface FormTextareaProps {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  helpText?: string;
  disabled?: boolean;
  rows?: number;
  maxLength?: number;
  showCharCount?: boolean;
}

export function FormTextarea({
  label,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  error,
  helpText,
  disabled = false,
  rows = 5,
  maxLength,
  showCharCount = false
}: FormTextareaProps) {
  const textareaId = `textarea-${name}`;
  const errorId = `error-${name}`;
  const helpId = `help-${name}`;

  return (
    <div className="flex flex-col gap-2">
      <label 
        htmlFor={textareaId}
        className=" text-sm text-[#212121]"
      >
        {label}
        {required && <span className="text-[#d32f2f] ml-1">*</span>}
      </label>
      
      <textarea
        id={textareaId}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        rows={rows}
        maxLength={maxLength}
        aria-describedby={`${error ? errorId : ''} ${helpText ? helpId : ''}`.trim() || undefined}
        aria-invalid={error ? 'true' : 'false'}
        className={`
          px-4 py-3
           text-[#212121]
          bg-white border
          ${error ? 'border-[#d32f2f]' : 'border-[#d0d0d0]'}
          ${disabled ? 'bg-[#f5f5f5] cursor-not-allowed' : ''}
          focus:outline-none focus:ring-2 focus:ring-[#1a5336] focus:border-transparent
          transition-colors
          resize-y
        `}
      />
      
      {showCharCount && maxLength && (
        <p className=" text-xs text-[#666] text-right">
          {value.length} / {maxLength}
        </p>
      )}
      
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
