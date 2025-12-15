import { View, Text, Pressable } from "react-native";
import { useOnboarding } from "../../context/OnboardingContext";
import Button from "@/components/Button";
import { MotiView } from "moti";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CircleCheckBig } from "lucide-react-native";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";

const languages = [
  { code: "en", name: "English" },
  { code: "ne", name: "Nepali" },
];

export default function LanguageScreen() {
  const { selectedLanguage, setLanguage, next } = useOnboarding();
  const { t } = useTranslation();

  const handleChange = async (lang: string) => {
    setLanguage(lang);
    await AsyncStorage.setItem("language", lang);
    await i18n.changeLanguage(lang);
  };

  return (
    <View className="flex-1 justify-between px-6 ">
      <MotiView
        className="flex-1 justify-center"
        key={"index"}
        from={{ opacity: 0, translateY: 50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: "timing", duration: 300, delay: 300 }}
      >
        <Text className="text-4xl font-bold text-center mb-4 py-1">
          {t("namaste")}
        </Text>
        <Text className="text-2xl font-bold text-center mb-4 text-grey">
          {t('choose_language')}
        </Text>

        <View className="gap-3 mt-10">
          {languages.map((lang) => (
            <Pressable
              key={lang.code}
              onPress={() => handleChange(lang.code)}
              className={`p-5 rounded-2xl border-2 flex flex-row justify-between ${
                selectedLanguage === lang.code
                  ? "border-primary bg-red-200"
                  : "border-gray-300"
              }`}
            >
              <Text
                className={`text-center text-2xl ${
                  selectedLanguage === lang.code ? "font-bold" : "text-grey"
                }`}
              >
                {lang.name}
              </Text>
              {selectedLanguage === lang.code && (
                <MotiView
                  from={{ scale: 0.7 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    damping: 5,
                    mass: 1,
                    stiffness: 400,
                    delay: 100,
                  }}
                >
                  <CircleCheckBig />
                </MotiView>
              )}
            </Pressable>
          ))}
        </View>
      </MotiView>

      <MotiView
        key={"indexButton"}
        from={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "timing", duration: 300, delay: 300 }}
      >
        <Button
          label={t("continue")}
          onPress={next}
          disabled={!selectedLanguage}
        />
      </MotiView>
    </View>
  );
}
