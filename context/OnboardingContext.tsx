import { createContext, useContext, useState } from 'react';
import { router } from 'expo-router';

type OnboardingStep = 'language' | 'location' | 'notification' | 'map' | 'done';

interface OnboardingContextType {
  currentStep: OnboardingStep;
  selectedLanguage: string;
  setLanguage: (lang: string) => void;
  next: () => void;
  back: () => void;
  skip: () => void;
}

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

const steps: OnboardingStep[] = ['language', 'location'];

export function OnboardingProvider({ children }: { children: React.ReactNode }) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const currentStep = steps[currentStepIndex] || 'done';

  const next = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(i => i + 1);
      router.push(`/(onboarding)/${steps[currentStepIndex + 1]}`);
    } else {
      router.replace('/(app)');
    }
  };

  const back = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(i => i - 1);
    }
  };

  const skip = () => router.push(`/(onboarding)/${steps[currentStepIndex + 1]}`);;

  return (
    <OnboardingContext.Provider
      value={{
        currentStep,
        selectedLanguage: selectedLanguage,
        setLanguage: setSelectedLanguage,
        next,
        back,
        skip,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}

export const useOnboarding = () => {
  const ctx = useContext(OnboardingContext);
  if (!ctx) throw new Error('useOnboarding must be used within OnboardingProvider');
  return ctx;
};