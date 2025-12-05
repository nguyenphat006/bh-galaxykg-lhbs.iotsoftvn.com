import { FormInput } from './FormInput';
import { FormSelect } from './FormSelect';

interface ChildFormData {
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: string;
  intendedStartDate: string;
}

interface ChildDetailsFormProps {
  index: number;
  data: ChildFormData;
  onChange: (index: number, data: ChildFormData) => void;
  errors: Record<string, string>;
}

export function ChildDetailsForm({ index, data, onChange, errors }: ChildDetailsFormProps) {
  const handleChange = (field: keyof ChildFormData, value: string) => {
    onChange(index, { ...data, [field]: value });
  };

  return (
    <div className="p-6 border border-[#d0d0d0] bg-[#fafafa]">
      <h4 className=" text-[20px] text-[#1a5336] mb-6">
        Child {index + 1} Details
      </h4>
      
      <div className="grid md:grid-cols-2 gap-4">
        <FormInput
          label="First name"
          name={`child-${index}-firstName`}
          value={data.firstName}
          onChange={(value) => handleChange('firstName', value)}
          required
          error={errors[`child${index}FirstName`]}
        />
        
        <FormInput
          label="Last name"
          name={`child-${index}-lastName`}
          value={data.lastName}
          onChange={(value) => handleChange('lastName', value)}
          required
          error={errors[`child${index}LastName`]}
        />
        
        <FormSelect
          label="Gender"
          name={`child-${index}-gender`}
          value={data.gender}
          onChange={(value) => handleChange('gender', value)}
          options={[
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' }
          ]}
          required
          error={errors[`child${index}Gender`]}
        />
        
        <FormInput
          label="Date of birth"
          name={`child-${index}-dateOfBirth`}
          type="date"
          value={data.dateOfBirth}
          onChange={(value) => handleChange('dateOfBirth', value)}
          required
          error={errors[`child${index}DateOfBirth`]}
        />
        
        <FormInput
          label="Intended start date"
          name={`child-${index}-intendedStartDate`}
          type="date"
          value={data.intendedStartDate}
          onChange={(value) => handleChange('intendedStartDate', value)}
          required
          error={errors[`child${index}IntendedStartDate`]}
          helpText="When would you like your child to start?"
        />
      </div>
    </div>
  );
}
