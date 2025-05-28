import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import StarryBackground from '@/components/StarryBackground';
import Particles from '@/components/Particles';

const WorkWithMe = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    // Basic info
    name: '',
    email: '',
    company: '',
    role: '',
    
    // Business info
    businessType: '',
    monthlyRevenue: '',
    teamSize: '',
    
    // Current challenges
    challenges: [] as string[],
    currentTools: '',
    
    // Project details
    projectBudget: '',
    timeline: '',
    projectDescription: '',
    
    // Fit assessment
    hasWorkedWithConsultants: '',
    decisionMaker: '',
    urgency: ''
  });

  const totalSteps = 6;

  const handleInputChange = (field: string, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleChallengeChange = (challenge: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        challenges: [...prev.challenges, challenge]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        challenges: prev.challenges.filter(c => c !== challenge)
      }));
    }
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      toast({
        title: "Application submitted!",
        description: "I'll review your information and get back to you within 24 hours.",
      });
    }, 2000);
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.name && formData.email && formData.company && formData.role;
      case 2:
        return formData.businessType && formData.monthlyRevenue && formData.teamSize;
      case 3:
        return formData.challenges.length > 0 && formData.currentTools;
      case 4:
        return formData.projectBudget && formData.timeline && formData.projectDescription;
      case 5:
        return formData.hasWorkedWithConsultants && formData.decisionMaker && formData.urgency;
      case 6:
        return true;
      default:
        return false;
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen relative overflow-hidden">
        <StarryBackground />
        <Particles />
        
        <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
          <div className="max-w-md w-full text-center">
            <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-6" />
            <h1 className="text-2xl font-bold text-white mb-4">Thank you!</h1>
            <p className="text-white/80 mb-6">
              Your application has been submitted successfully. I'll review your information and get back to you within 24 hours to discuss next steps.
            </p>
            <Button 
              onClick={() => window.location.href = '/'}
              className="bg-gradient-to-r from-purple-600/20 via-violet-600/20 to-indigo-600/20 
                       border border-purple-400/40 text-white backdrop-blur-sm
                       hover:from-purple-600/30 hover:via-violet-600/30 hover:to-indigo-600/30 
                       hover:border-purple-300/60 hover:shadow-[0_0_40px_rgba(139,92,246,0.4)]
                       transition-all duration-700"
            >
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <StarryBackground />
      <Particles />
      
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-2xl w-full">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let's Work Together
            </h1>
            <p className="text-white/80 text-lg">
              Help me understand your business and challenges so I can determine if we're a good fit.
            </p>
          </div>

          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-white/60 mb-2">
              <span>Step {currentStep} of {totalSteps}</span>
              <span>{Math.round((currentStep / totalSteps) * 100)}% complete</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-purple-400 to-violet-400 h-2 rounded-full transition-all duration-500"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>
          </div>

          {/* Form */}
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10">
            {/* Step 1: Basic Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-white mb-6">Basic Information</h2>
                
                <div>
                  <Label htmlFor="name" className="text-white mb-2 block">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-white mb-2 block">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <Label htmlFor="company" className="text-white mb-2 block">Company Name *</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <Label htmlFor="role" className="text-white mb-2 block">Your Role *</Label>
                  <Input
                    id="role"
                    value={formData.role}
                    onChange={(e) => handleInputChange('role', e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    placeholder="CEO, CTO, Operations Manager, etc."
                  />
                </div>
              </div>
            )}

            {/* Step 2: Business Information */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-white mb-6">About Your Business</h2>
                
                <div>
                  <Label className="text-white mb-3 block">What type of business do you run? *</Label>
                  <RadioGroup 
                    value={formData.businessType} 
                    onValueChange={(value) => handleInputChange('businessType', value)}
                    className="space-y-3"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="agency" id="agency" />
                      <Label htmlFor="agency" className="text-white">Agency/Consultancy</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="saas" id="saas" />
                      <Label htmlFor="saas" className="text-white">SaaS Company</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="ecommerce" id="ecommerce" />
                      <Label htmlFor="ecommerce" className="text-white">E-commerce</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="service" id="service" />
                      <Label htmlFor="service" className="text-white">Service Business</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other" className="text-white">Other</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-white mb-3 block">Monthly Revenue Range *</Label>
                  <RadioGroup 
                    value={formData.monthlyRevenue} 
                    onValueChange={(value) => handleInputChange('monthlyRevenue', value)}
                    className="space-y-3"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="under-10k" id="under-10k" />
                      <Label htmlFor="under-10k" className="text-white">Under $10K</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="10k-50k" id="10k-50k" />
                      <Label htmlFor="10k-50k" className="text-white">$10K - $50K</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="50k-100k" id="50k-100k" />
                      <Label htmlFor="50k-100k" className="text-white">$50K - $100K</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="100k-500k" id="100k-500k" />
                      <Label htmlFor="100k-500k" className="text-white">$100K - $500K</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="over-500k" id="over-500k" />
                      <Label htmlFor="over-500k" className="text-white">Over $500K</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-white mb-3 block">Team Size *</Label>
                  <RadioGroup 
                    value={formData.teamSize} 
                    onValueChange={(value) => handleInputChange('teamSize', value)}
                    className="space-y-3"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="just-me" id="just-me" />
                      <Label htmlFor="just-me" className="text-white">Just me</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="2-5" id="2-5" />
                      <Label htmlFor="2-5" className="text-white">2-5 people</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="6-15" id="6-15" />
                      <Label htmlFor="6-15" className="text-white">6-15 people</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="16-50" id="16-50" />
                      <Label htmlFor="16-50" className="text-white">16-50 people</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="over-50" id="over-50" />
                      <Label htmlFor="over-50" className="text-white">50+ people</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            )}

            {/* Step 3: Current Challenges */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-white mb-6">Current Challenges</h2>
                
                <div>
                  <Label className="text-white mb-3 block">What challenges are you facing? (Select all that apply) *</Label>
                  <div className="space-y-3">
                    {[
                      'Manual processes taking too much time',
                      'Difficulty tracking leads and customers',
                      'Poor communication between team members',
                      'Inconsistent data across different tools',
                      'Lack of automation in workflows',
                      'Difficulty scaling operations',
                      'Poor reporting and analytics',
                      'Integration issues between tools'
                    ].map((challenge) => (
                      <div key={challenge} className="flex items-center space-x-2">
                        <Checkbox
                          id={challenge}
                          checked={formData.challenges.includes(challenge)}
                          onCheckedChange={(checked) => handleChallengeChange(challenge, checked as boolean)}
                        />
                        <Label htmlFor={challenge} className="text-white text-sm">{challenge}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="currentTools" className="text-white mb-2 block">What tools/systems are you currently using? *</Label>
                  <Textarea
                    id="currentTools"
                    value={formData.currentTools}
                    onChange={(e) => handleInputChange('currentTools', e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    placeholder="e.g., Salesforce, HubSpot, Monday.com, custom spreadsheets..."
                    rows={4}
                  />
                </div>
              </div>
            )}

            {/* Step 4: Project Details */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-white mb-6">Project Details</h2>
                
                <div>
                  <Label className="text-white mb-3 block">What's your budget range for this project? *</Label>
                  <RadioGroup 
                    value={formData.projectBudget} 
                    onValueChange={(value) => handleInputChange('projectBudget', value)}
                    className="space-y-3"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="under-5k" id="under-5k" />
                      <Label htmlFor="under-5k" className="text-white">Under $5K</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="5k-15k" id="5k-15k" />
                      <Label htmlFor="5k-15k" className="text-white">$5K - $15K</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="15k-30k" id="15k-30k" />
                      <Label htmlFor="15k-30k" className="text-white">$15K - $30K</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="30k-50k" id="30k-50k" />
                      <Label htmlFor="30k-50k" className="text-white">$30K - $50K</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="over-50k" id="over-50k" />
                      <Label htmlFor="over-50k" className="text-white">Over $50K</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-white mb-3 block">When do you need this completed? *</Label>
                  <RadioGroup 
                    value={formData.timeline} 
                    onValueChange={(value) => handleInputChange('timeline', value)}
                    className="space-y-3"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="asap" id="asap" />
                      <Label htmlFor="asap" className="text-white">ASAP (within 2 weeks)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="1-month" id="1-month" />
                      <Label htmlFor="1-month" className="text-white">Within 1 month</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="2-3-months" id="2-3-months" />
                      <Label htmlFor="2-3-months" className="text-white">2-3 months</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="flexible" id="flexible" />
                      <Label htmlFor="flexible" className="text-white">Flexible timeline</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="projectDescription" className="text-white mb-2 block">Describe your ideal solution *</Label>
                  <Textarea
                    id="projectDescription"
                    value={formData.projectDescription}
                    onChange={(e) => handleInputChange('projectDescription', e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    placeholder="Tell me about what you want to achieve, what success looks like, and any specific requirements..."
                    rows={5}
                  />
                </div>
              </div>
            )}

            {/* Step 5: Fit Assessment */}
            {currentStep === 5 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-white mb-6">Fit Assessment</h2>
                
                <div>
                  <Label className="text-white mb-3 block">Have you worked with consultants/agencies before? *</Label>
                  <RadioGroup 
                    value={formData.hasWorkedWithConsultants} 
                    onValueChange={(value) => handleInputChange('hasWorkedWithConsultants', value)}
                    className="space-y-3"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes-good" id="yes-good" />
                      <Label htmlFor="yes-good" className="text-white">Yes, and it was a good experience</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes-bad" id="yes-bad" />
                      <Label htmlFor="yes-bad" className="text-white">Yes, but it didn't go well</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="no" />
                      <Label htmlFor="no" className="text-white">No, this would be my first time</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-white mb-3 block">Are you the decision maker for this project? *</Label>
                  <RadioGroup 
                    value={formData.decisionMaker} 
                    onValueChange={(value) => handleInputChange('decisionMaker', value)}
                    className="space-y-3"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="yes-decision" />
                      <Label htmlFor="yes-decision" className="text-white">Yes, I can make the final decision</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="partial" id="partial-decision" />
                      <Label htmlFor="partial-decision" className="text-white">I need approval from 1-2 others</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="no-decision" />
                      <Label htmlFor="no-decision" className="text-white">No, others make the decisions</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-white mb-3 block">How urgent is solving this problem? *</Label>
                  <RadioGroup 
                    value={formData.urgency} 
                    onValueChange={(value) => handleInputChange('urgency', value)}
                    className="space-y-3"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="critical" id="critical" />
                      <Label htmlFor="critical" className="text-white">Critical - costing us money daily</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="important" id="important" />
                      <Label htmlFor="important" className="text-white">Important - need to solve soon</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="nice-to-have" id="nice-to-have" />
                      <Label htmlFor="nice-to-have" className="text-white">Nice to have - when time permits</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            )}

            {/* Step 6: Review */}
            {currentStep === 6 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-white mb-6">Review Your Information</h2>
                
                <div className="bg-white/5 rounded-lg p-4 space-y-4 text-sm">
                  <div>
                    <span className="text-white/60">Name:</span> <span className="text-white">{formData.name}</span>
                  </div>
                  <div>
                    <span className="text-white/60">Company:</span> <span className="text-white">{formData.company}</span>
                  </div>
                  <div>
                    <span className="text-white/60">Business Type:</span> <span className="text-white">{formData.businessType}</span>
                  </div>
                  <div>
                    <span className="text-white/60">Monthly Revenue:</span> <span className="text-white">{formData.monthlyRevenue}</span>
                  </div>
                  <div>
                    <span className="text-white/60">Budget:</span> <span className="text-white">{formData.projectBudget}</span>
                  </div>
                  <div>
                    <span className="text-white/60">Timeline:</span> <span className="text-white">{formData.timeline}</span>
                  </div>
                </div>

                <p className="text-white/80 text-sm">
                  By submitting this form, you agree to receive communication from me regarding your project inquiry.
                </p>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              <Button
                onClick={prevStep}
                disabled={currentStep === 1}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 bg-transparent"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>

              {currentStep < totalSteps ? (
                <Button
                  onClick={nextStep}
                  disabled={!isStepValid()}
                  className="bg-gradient-to-r from-purple-600/20 via-violet-600/20 to-indigo-600/20 
                           border border-purple-400/40 text-white backdrop-blur-sm
                           hover:from-purple-600/30 hover:via-violet-600/30 hover:to-indigo-600/30 
                           hover:border-purple-300/60 hover:shadow-[0_0_40px_rgba(139,92,246,0.4)]
                           transition-all duration-700"
                >
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-purple-600/20 via-violet-600/20 to-indigo-600/20 
                           border border-purple-400/40 text-white backdrop-blur-sm
                           hover:from-purple-600/30 hover:via-violet-600/30 hover:to-indigo-600/30 
                           hover:border-purple-300/60 hover:shadow-[0_0_40px_rgba(139,92,246,0.4)]
                           transition-all duration-700"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin mr-2 h-4 w-4 border-t-2 border-r-2 border-white rounded-full"></div>
                      Submitting...
                    </div>
                  ) : (
                    'Submit Application'
                  )}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkWithMe;
