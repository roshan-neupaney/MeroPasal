import { View, Text, Pressable } from "react-native";
import { useOnboarding } from "../../context/OnboardingContext";
import { SafeAreaView } from "react-native-safe-area-context";

const languages = [
  { code: "en", name: "English" },
  { code: "np", name: "Nepali" },
];

export default function LanguageScreen() {
  const { selectedLanguage, setLanguage, next, skip } = useOnboarding();

  return (
    <SafeAreaView edges={["top"]} className="flex-1">
      <View className="flex-1 px-6 justify-between pb-12">
        <View className="flex-1 justify-center">
          <Text className="text-4xl font-bold text-center mb-4">
            Choose your language
          </Text>

          <View className="gap-3 mt-10">
            {languages.map((lang) => (
              <Pressable
                key={lang.code}
                onPress={() => setLanguage(lang.code)}
                className={`p-5 rounded-2xl border-2 ${
                  selectedLanguage === lang.code
                    ? "border-black bg-black"
                    : "border-gray-300"
                }`}
              >
                <Text
                  className={`text-center text-xl ${
                    selectedLanguage === lang.code ? "text-white" : "text-black"
                  }`}
                >
                  {lang.name}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>

        <View className="">
          <Pressable
            onPress={next}
            disabled={!selectedLanguage}
            className={`py-4 rounded-2xl ${
              selectedLanguage ? "bg-black" : "bg-gray-300"
            }`}
          >
            <Text className="text-white text-center text-lg font-semibold">
              Continue
            </Text>
          </Pressable>
          <View className="flex flex-row justify-between">
            <Pressable onPress={skip} className="mt-4">
              <Text className="text-center text-gray-600 font-bold">Back</Text>
            </Pressable>
            <Pressable onPress={skip} className="mt-4">
              <Text className="text-center text-gray-600">Later</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
