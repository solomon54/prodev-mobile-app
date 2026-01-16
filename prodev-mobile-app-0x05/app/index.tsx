// Add this import
import { styles } from "@/styles";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";

// Inside the Index component
// eslint-disable-next-line react-hooks/rules-of-hooks
const router = useRouter();

// Change the TouchableOpacity
<TouchableOpacity
  style={styles.button}
  onPress={() => router.push("/join")}></TouchableOpacity>;
