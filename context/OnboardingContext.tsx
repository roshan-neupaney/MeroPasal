import { createContext, useContext, useState } from "react";
import { router } from "expo-router";

type OnboardingStep = "" | "locationStep" | "notificationStep" | "mapStep";

interface OnboardingContextType {
  currentStep: OnboardingStep;
  selectedLanguage: string;
  setLanguage: (lang: string) => void;
  selectedLocation: { latitude: number; longitude: number } | null;
  setSelectedLocation: (value: { latitude: number; longitude: number }) => void;
  next: () => void;
  back: () => void;
  steps: OnboardingStep[];
}

const OnboardingContext = createContext<OnboardingContextType | undefined>(
  undefined
);

const steps: OnboardingStep[] = [
  "",
  "locationStep",
  "notificationStep",
  "mapStep",
];

export function OnboardingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [selectedLocation, setSelectedLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const currentStep = steps[currentStepIndex];

  const next = () => {
    if (currentStepIndex < steps.length - 1) {
      const nextStepIndex = currentStepIndex + 1;
      const nextStep = steps[nextStepIndex];
      setCurrentStepIndex(nextStepIndex);
      const route = nextStep
        ? (`/(onboarding)/${nextStep}` as const)
        : ("/(onboarding)" as const);
      router.replace(route);
    } else {
      router.replace("/(app)");
    }
  };

  const back = () => {
    if (currentStepIndex > 0) {
      const prevStepIndex = currentStepIndex - 1;
      setCurrentStepIndex(prevStepIndex);
      // const prevStep = steps[prevStepIndex];
      // const route = prevStep ? `/(onboarding)/${prevStep}` as const : '/(onboarding)' as const;
      router.back();
    }
  };

  return (
    <OnboardingContext.Provider
      value={{
        currentStep,
        selectedLanguage: selectedLanguage,
        setLanguage: setSelectedLanguage,
        next,
        back,
        steps,
        selectedLocation,
        setSelectedLocation,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}

export const useOnboarding = () => {
  const ctx = useContext(OnboardingContext);
  if (!ctx)
    throw new Error("useOnboarding must be used within OnboardingProvider");
  return ctx;
};
