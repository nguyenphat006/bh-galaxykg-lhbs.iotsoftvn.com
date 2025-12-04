interface RadioOption {
  value: string;
  label: string;
}

interface FormRadioProps {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: RadioOption[];
  required?: boolean;
  error?: string;
  helpText?: string;
  disabled?: boolean;
  layout?: 'vertical' | 'horizontal';
}

export function FormRadio({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
  error,
  helpText,
  disabled = false,
  layout = 'vertical'
}: FormRadioProps) {
  const groupId = `radio-${name}`;
  const errorId = `error-${name}`;
  const helpId = `help-${name}`;

  return (
    <div className="flex flex-col gap-3">
      <fieldset
        aria-describedby={`${error ? errorId : ''} ${helpText ? helpId : ''}`.trim() || undefined}
        aria-invalid={error ? 'true' : 'false'}
      >
        <legend className=" text-sm text-[#212121] mb-2">
          {label}
          {required && <span className="text-[#d32f2f] ml-1">*</span>}
        </legend>
        
        <div className={`flex ${layout === 'horizontal' ? 'flex-row gap-6' : 'flex-col gap-3'}`}>
          {options.map((option) => {
            const radioId = `${groupId}-${option.value}`;
            return (
              <div key={option.value} className="flex items-center gap-2">
                <input
                  type="radio"
                  id={radioId}
                  name={name}
                  value={option.value}
                  checked={value === option.value}
                  onChange={(e) => onChange(e.target.value)}
                  disabled={disabled}
                  className="w-4 h-4 text-[#1a5336] border-[#d0d0d0] focus:ring-2 focus:ring-[#1a5336] cursor-pointer disabled:cursor-not-allowed"
                />
                <label
                  htmlFor={radioId}
                  className={` text-sm text-[#212121] cursor-pointer ${disabled ? 'cursor-not-allowed opacity-50' : ''}`}
                >
                  {option.label}
                </label>
              </div>
            );
          })}
        </div>
      </fieldset>
      
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
