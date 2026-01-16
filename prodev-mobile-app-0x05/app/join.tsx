import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { styles } from "@/styles/_join"; // Ensure this path is correct
import { HEROLOGOGREEN, GOOGLELOGO, FACEBOOKLOGO } from "@/constants/data";
import { useRouter } from "expo-router";

export default function Join() {
  const router = useRouter();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Top Navigation Section */}
          <View style={styles.iconsection}>
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={25} color="black" />
            </TouchableOpacity>
            <Image source={HEROLOGOGREEN} />
            <View style={{ width: 25 }} /> {/* Balance the layout */}
          </View>

          {/* Title Section */}
          <View style={styles.titleTextGroup}>
            <Text style={styles.titleText}>Join our</Text>
            <Text style={styles.titleText}>Community</Text>
            <Text style={styles.subText}>
              Enter your details to create a new account.
            </Text>
          </View>

          {/* Form Section */}
          <View style={styles.formGroup}>
            <View>
              <Text style={styles.formLabel}>Full Name</Text>
              <TextInput
                placeholder="Enter your name"
                style={styles.formControl}
              />
            </View>

            <View style={{ marginTop: 20 }}>
              <Text style={styles.formLabel}>Email</Text>
              <TextInput
                keyboardType="email-address"
                placeholder="Enter your email"
                style={styles.formControl}
              />
            </View>

            <View style={{ marginTop: 20 }}>
              <Text style={styles.formLabel}>Password</Text>
              <View style={styles.formPasswordControl}>
                <TextInput
                  secureTextEntry={true}
                  placeholder="Create a password"
                  style={styles.passwordControl}
                />
                <FontAwesome name="eye-slash" size={20} color="#7E7B7B" />
              </View>
            </View>
          </View>

          {/* Action Buttons */}
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.buttonText}>Create Account</Text>
          </TouchableOpacity>

          <View style={styles.dividerGroup}>
            <View style={styles.divider} />
            <Text style={styles.dividerText}>OR</Text>
            <View style={styles.divider} />
          </View>

          {/* Social Buttons */}
          <View style={styles.secondaryButtonGroup}>
            <TouchableOpacity style={styles.secondaryButton}>
              <Image source={GOOGLELOGO} style={{ width: 20, height: 20 }} />
              <Text style={styles.secondaryButtonText}>
                Continue with Google
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.secondaryButton}>
              <Image source={FACEBOOKLOGO} style={{ width: 20, height: 20 }} />
              <Text style={styles.secondaryButtonText}>
                Continue with Facebook
              </Text>
            </TouchableOpacity>
          </View>

          {/* Footer Link */}
          <View style={styles.signupgroup}>
            <Text style={styles.signupTitleText}>
              Already have an account?{" "}
            </Text>
            <TouchableOpacity onPress={() => router.push("/signin")}>
              <Text style={styles.signupSubTitleText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
