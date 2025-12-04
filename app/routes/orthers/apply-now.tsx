import { useState } from 'react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import { FormInput } from '@/components/form/FormInput';
import { FormSelect } from '@/components/form/FormSelect';
import { FormTextarea } from '@/components/form/FormTextarea';
import { FormRadio } from '@/components/form/FormRadio';
import { FormCheckbox } from '@/components/form/FormCheckbox';
import { ChildDetailsForm } from '@/components/form/ChildDetailsForm';
import { ImageWithFallback } from '~/components/ImageWithFallback';
import { useNavigate } from 'react-router';

interface ChildFormData {
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: string;
  intendedStartDate: string;
}

export default function ApplyNowPage() {
  const navigate = useNavigate();
  const onNavigate = (path: string) => {
    navigate(path)
  }
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true, amount: 0.1 });
  
  // Form state - Group A: Parent/Guardian Details
  const [title, setTitle] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [nationality, setNationality] = useState('');
  const [countryOfResidence, setCountryOfResidence] = useState('');
  const [preferredContact, setPreferredContact] = useState('');
  const [hearAboutUs, setHearAboutUs] = useState('');
  
  // Form state - Group B: Children Details
  const [numberOfChildren, setNumberOfChildren] = useState('');
  const [childrenData, setChildrenData] = useState<ChildFormData[]>([
    { firstName: '', lastName: '', gender: '', dateOfBirth: '', intendedStartDate: '' }
  ]);
  
  // Form state - Group C: Tell us more
  const [enquiryDetails, setEnquiryDetails] = useState('');
  
  // Form state - Group D: Visit our school
  const [wantToVisit, setWantToVisit] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [interestedInBoarding, setInterestedInBoarding] = useState('');
  const [campusOfInterest, setCampusOfInterest] = useState('');
  
  // Form state - Group E: Marketing Consent
  const [marketingConsent, setMarketingConsent] = useState(false);
  
  // Validation errors
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Handle number of children change
  const handleNumberOfChildrenChange = (value: string) => {
    setNumberOfChildren(value);
    const count = parseInt(value) || 0;
    const newChildrenData = Array.from({ length: count }, (_, i) => 
      childrenData[i] || { firstName: '', lastName: '', gender: '', dateOfBirth: '', intendedStartDate: '' }
    );
    setChildrenData(newChildrenData);
  };

  // Handle child data change
  const handleChildDataChange = (index: number, data: ChildFormData) => {
    const newChildrenData = [...childrenData];
    newChildrenData[index] = data;
    setChildrenData(newChildrenData);
  };

  // Validate form
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    // Group A validation
    if (!title) newErrors.title = 'Title is required';
    if (!firstName) newErrors.firstName = 'First name is required';
    if (!lastName) newErrors.lastName = 'Last name is required';
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!telephone) newErrors.telephone = 'Contact telephone is required';
    if (!countryOfResidence) newErrors.countryOfResidence = 'Country/Region is required';
    
    // Group B validation
    if (!numberOfChildren) {
      newErrors.numberOfChildren = 'Please specify number of children';
    } else {
      childrenData.forEach((child, index) => {
        if (!child.firstName) newErrors[`child${index}FirstName`] = 'Required';
        if (!child.lastName) newErrors[`child${index}LastName`] = 'Required';
        if (!child.gender) newErrors[`child${index}Gender`] = 'Required';
        if (!child.dateOfBirth) newErrors[`child${index}DateOfBirth`] = 'Required';
        if (!child.intendedStartDate) newErrors[`child${index}IntendedStartDate`] = 'Required';
      });
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Here you would normally submit to your backend
      console.log('Form submitted:', {
        parentDetails: { title, firstName, lastName, companyName, email, telephone, nationality, countryOfResidence, preferredContact, hearAboutUs },
        children: childrenData,
        enquiryDetails,
        visitDetails: { wantToVisit, preferredTime, preferredDate, interestedInBoarding, campusOfInterest },
        marketingConsent
      });
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Scroll to first error
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Breadcrumbs
  const breadcrumbs = [
    { label: 'Home', onClick: () => onNavigate('/') },
    { label: 'Admissions', onClick: () => onNavigate('/admissions') },
    { label: 'Apply Now' }
  ];

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full mx-4">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="w-20 h-20 bg-[#1a5336] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h2 className="text-[24px] md:text-[28px] text-[#1a5336] mb-4">
              Thank You!
            </h2>
            
            <p className="text-[#212121] mb-4 leading-relaxed">
              We have received your enquiry and will be in touch with you shortly.
            </p>
            
            <div className="flex flex-col gap-3">
              <button
                onClick={() => onNavigate('/')}
                className="px-6 h-12 bg-[#1a5336] text-white font-semibold hover:bg-[#14432b] transition-colors rounded"
              >
                Return to Home
              </button>
              
              <button
                onClick={() => onNavigate('/contact/book-tour')}
                className="px-6 h-12 border-2 border-[#1a5336] text-[#1a5336] font-semibold hover:bg-[#1a5336] hover:text-white transition-colors rounded"
              >
                Book a School Tour
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Column - Fixed Sidebar */}
      <div 
        className="hidden lg:block fixed content-center top-0 left-0 h-screen w-[40%] bg-gradient-to-br from-[#1a5336] to-[#14432b] p-8 md:p-12 z-40 overflow-y-auto"
        style={{ bottom: '100px' }}
      >
    {/* Content */}
    <div className="relative z-10 text-white">
      {/* <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Welcome to</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-[#FABA1E] mb-2">Lac Hong Bilingual School</h1>
        <p className="text-white/80 text-lg">Ho Chi Minh City Campus</p>
      </div>

      <div className="space-y-6 mb-10">
        <div className="flex items-start gap-3">
          <div className="w-3 h-3 bg-[#FABA1E] rounded-full mt-2 flex-shrink-0" />
          <p className="text-white/90 text-lg leading-relaxed">
            World-class bilingual education with British curriculum
          </p>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-3 h-3 bg-[#FABA1E] rounded-full mt-2 flex-shrink-0" />
          <p className="text-white/90 text-lg leading-relaxed">
            Experienced international teaching staff
          </p>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-3 h-3 bg-[#FABA1E] rounded-full mt-2 flex-shrink-0" />
          <p className="text-white/90 text-lg leading-relaxed">
            Modern facilities and innovative learning environment
          </p>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-3 h-3 bg-[#FABA1E] rounded-full mt-2 flex-shrink-0" />
          <p className="text-white/90 text-lg leading-relaxed">
            Personalized learning pathways for every student
          </p>
        </div>
      </div> */}

      {/* Statistics */}
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
          <div className="text-3xl md:text-4xl font-bold text-[#FABA1E]">97%</div>
          <div className="text-base text-white/80 mt-1">University acceptance rate</div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
          <div className="text-3xl md:text-4xl font-bold text-[#FABA1E]">15+</div>
          <div className="text-base text-white/80 mt-1">Years of excellence</div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
          <div className="text-3xl md:text-4xl font-bold text-[#FABA1E]">500+</div>
          <div className="text-base text-white/80 mt-1">Global university partnerships</div>
        </div>
      </div>
    </div>
  </div>

  {/* Right Column - Scrollable Form */}
  <div className="w-full lg:w-[60%] lg:ml-[45%] overflow-y-auto mt-20">
    <div className="p-8 lg:px-16 lg:py-12 pt-28 lg:pt-24 border-b border-gray-200 max-w-4xl">
      <h1 className="text-3xl lg:text-4xl font-medium text-[#2c3e50] mb-4">
        Welcome to LHBS
      </h1>
      <p className="text-gray-600 mb-4 leading-relaxed">
        We're delighted that you're considering Lac Hong Bilingual School Dong Nai Province for your child's education.
      </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            To have the best experience of our school, share your availability for a tour. Our team will respond within 24 hours (Mon-Fri).
          </p>
          <p className="text-sm text-gray-500">
            Questions?{' '}
            <button 
              onClick={() => onNavigate('/contact/contact-us')}
              className="text-[#2c5282] underline hover:text-[#1e3a5f] transition-colors"
            >
              Email us
            </button>
            {' '}or call{' '}
            <span className="text-[#2c5282]">+84 (28) 3758 8033</span>
          </p>
        </div>

        
        {/* Form Section */}
        <div className="flex-1 p-8 lg:px-16 lg:py-16 pt-12 pb-16 overflow-y-auto max-w-4xl">
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} noValidate className="space-y-10">
              {/* Step 1: Tell us about you and your family */}
              <div>
                <h3 className="text-lg font-medium text-[#2c3e50] mb-6">
                  1. Tell us about you and your family
                </h3>
                
                <div className="space-y-6">
                  <FormSelect
                    label="Title"
                    name="title"
                    value={title}
                    onChange={setTitle}
                    options={[
                      { value: '', label: 'Please select...' },
                      { value: 'mr', label: 'Mr' },
                      { value: 'mrs', label: 'Mrs' },
                      { value: 'ms', label: 'Ms' },
                      { value: 'dr', label: 'Dr' },
                      { value: 'prof', label: 'Prof' }
                    ]}
                    required
                    error={errors.title}
                  />
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormInput
                      label="First Name"
                      name="firstName"
                      value={firstName}
                      onChange={setFirstName}
                      required
                      error={errors.firstName}
                    />
                    
                    <FormInput
                      label="Last Name"
                      name="lastName"
                      value={lastName}
                      onChange={setLastName}
                      required
                      error={errors.lastName}
                    />
                  </div>
                  
                  <FormInput
                    label="Company Name"
                    name="companyName"
                    value={companyName}
                    onChange={setCompanyName}
                  />
                  
                  <FormInput
                    label="Email Address"
                    name="email"
                    type="email"
                    value={email}
                    onChange={setEmail}
                    required
                    error={errors.email}
                  />
                  
                  <FormInput
                    label="Contact Telephone Number"
                    name="telephone"
                    type="tel"
                    value={telephone}
                    onChange={setTelephone}
                    required
                    error={errors.telephone}
                    placeholder="+84"
                  />
                </div>
              </div>

              {/* Children Details */}
              <div>
                <h3 className="text-lg font-medium text-[#2c3e50] mb-6">
                  2. Children Details
                </h3>
                
                <div className="space-y-6">
                  <FormSelect
                    label="Number of children"
                    name="numberOfChildren"
                    value={numberOfChildren}
                    onChange={handleNumberOfChildrenChange}
                    options={[
                      { value: '', label: 'Please select...' },
                      { value: '1', label: '1' },
                      { value: '2', label: '2' },
                      { value: '3', label: '3' },
                      { value: '4', label: '4' },
                      { value: '5', label: '5' }
                    ]}
                    required
                    error={errors.numberOfChildren}
                  />
                  
                  {numberOfChildren && (
                    <div className="space-y-6">
                      {childrenData.map((child, index) => (
                        <ChildDetailsForm
                          key={index}
                          index={index}
                          data={child}
                          onChange={handleChildDataChange}
                          errors={errors}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Tell us more */}
              <div>
                <h3 className="text-lg font-medium text-[#2c3e50] mb-6">
                  3. Tell Us More
                </h3>
                
                <FormTextarea
                  label="Tell us more about your enquiry"
                  name="enquiryDetails"
                  value={enquiryDetails}
                  onChange={setEnquiryDetails}
                  placeholder="Please share details about your interests such as facilities, curriculum, fees, specific programs, etc."
                  rows={4}
                  maxLength={1000}
                  showCharCount
                  helpText="Optional - Share any specific questions or interests"
                />
              </div>

              {/* Visit our school */}
              <div>
                <h3 className="text-lg font-medium text-[#2c3e50] mb-6">
                  4. Visit Our School
                </h3>
                
                <div className="space-y-6">
                  <FormRadio
                    label="Would you like to visit us?"
                    name="wantToVisit"
                    value={wantToVisit}
                    onChange={setWantToVisit}
                    options={[
                      { value: 'yes', label: 'Yes' },
                      { value: 'not-now', label: 'Not at the moment' }
                    ]}
                    layout="horizontal"
                  />
                  
                  {wantToVisit === 'yes' && (
                    <div className="grid md:grid-cols-2 gap-4 pl-6">
                      <FormSelect
                        label="Preferred time"
                        name="preferredTime"
                        value={preferredTime}
                        onChange={setPreferredTime}
                        options={[
                          { value: '', label: 'Please select...' },
                          { value: 'morning', label: 'Morning' },
                          { value: 'afternoon', label: 'Afternoon' }
                        ]}
                      />
                      
                      <FormInput
                        label="Preferred date"
                        name="preferredDate"
                        type="date"
                        value={preferredDate}
                        onChange={setPreferredDate}
                      />
                    </div>
                  )}
                  
                  <FormSelect
                    label="Campus of interest"
                    name="campusOfInterest"
                    value={campusOfInterest}
                    onChange={setCampusOfInterest}
                    options={[
                      { value: '', label: 'Please select...' },
                      { value: 'not-sure', label: 'Not sure' },
                    ]}
                    helpText="Select the campus you're most interested in visiting"
                  />
                </div>
              </div>

              {/* Marketing Consent */}
              <div className="border-t border-gray-200 pt-6">
                <FormCheckbox
                  label="I'd like to receive updates about news, events and admissions"
                  name="marketingConsent"
                  checked={marketingConsent}
                  onChange={setMarketingConsent}
                />
                
                <p className="text-xs text-gray-500 mt-4 leading-relaxed">
                  By submitting this form, you agree to our{' '}
                  <button
                    type="button"
                    onClick={() => onNavigate('/privacy-policy')}
                    className="text-[#2c5282] underline hover:text-[#1e3a5f]"
                  >
                    Privacy Policy
                  </button>
                  {' '}and{' '}
                  <button
                    type="button"
                    onClick={() => onNavigate('/cookie-policy')}
                    className="text-[#2c5282] underline hover:text-[#1e3a5f]"
                  >
                    Cookie Policy
                  </button>
                  . We are committed to protecting your personal information.
                </p>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full h-12 bg-[#2c5282] text-white font-semibold hover:bg-[#1e3a5f] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2c5282] focus:ring-offset-2 rounded"
                >
                  Submit Enquiry
                </button>
                
                <div className="text-center mt-4">
                  <button
                    type="button"
                    onClick={() => onNavigate('/contact/contact-us')}
                    className="text-sm text-[#2c5282] underline hover:text-[#1e3a5f]"
                  >
                    Or contact admissions directly
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}