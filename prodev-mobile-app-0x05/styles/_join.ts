//styles/_join.ts

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  // Used in Signin/Join headers
  navGroup: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 15,
    marginTop: 20,
    marginBottom: 10,
  },
  iconsection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 22,
  },
  // Typography
  largeText: {
    fontWeight: "700",
    fontSize: 32,
    color: "#000",
  },
  smallText: {
    fontWeight: "400",
    fontSize: 14,
    color: "#7E7B7B",
    marginTop: 5,
  },
  titleTextGroup: {
    marginTop: 20,
  },
  titleText: {
    fontWeight: "700",
    fontSize: 39,
  },
  subText: {
    fontWeight: "400",
    fontSize: 12,
    color: "#7E7B7B",
  },
  // Form Controls
  formGroup: {
    marginTop: 44,
    rowGap: 10,
  },
  formLabel: {
    fontSize: 18,
    fontWeight: "400",
    color: "#7B7B7B",
    marginBottom: 7,
  },
  placeholderText: {
    fontSize: 16,
    fontWeight: "400",
    color: "#7B7B7B",
    marginBottom: 5,
  },
  formControl: {
    borderWidth: 2,
    height: 50,
    borderRadius: 10,
    borderColor: "#E9E9E9",
    paddingHorizontal: 10,
  },
  inputField: {
    borderWidth: 2,
    height: 50,
    borderRadius: 10,
    borderColor: "#E9E9E9",
    paddingHorizontal: 10,
  },
  formPasswordControl: {
    borderWidth: 2,
    height: 50,
    borderRadius: 10,
    borderColor: "#E9E9E9",
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  passwordGroup: {
    borderWidth: 2,
    height: 50,
    borderRadius: 10,
    borderColor: "#E9E9E9",
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  passwordControl: {
    flex: 1,
  },
  // Buttons
  button: {
    backgroundColor: "#34967C",
    height: 53,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },
  primaryButton: {
    backgroundColor: "#34967C",
    height: 53,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },
  buttonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "600",
  },
  // Social Media Section (FIXES YOUR ERROR)
  socialMediaButtonGroup: {
    rowGap: 15,
    marginTop: 15,
  },
  socialMediaButton: {
    height: 53,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    columnGap: 10,
    borderWidth: 1,
    borderColor: "#E9E9E9",
  },
  socialMediaButtonText: {
    fontSize: 18,
    fontWeight: "400",
    color: "#000",
  },
  secondaryButtonGroup: {
    rowGap: 15,
    marginTop: 15,
  },
  secondaryButton: {
    height: 53,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    columnGap: 10,
    borderWidth: 1,
    borderColor: "#E9E9E9",
  },
  secondaryButtonText: {
    fontSize: 18,
    fontWeight: "400",
  },
  // Footer / Switch between Login & Join
  subTextGroup: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  subTextJoin: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFA800",
  },
  signupgroup: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 20,
  },
  signupTitleText: {
    fontSize: 18,
    fontWeight: "400",
  },
  signupSubTitleText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FFA800",
  },
  // Dividers
  dividerGroup: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
    marginBottom: 25,
    marginTop: 29,
  },
  divider: {
    borderWidth: 1,
    flex: 1,
    borderColor: "#e6e6e6",
  },
  dividerText: {
    fontSize: 17,
    fontWeight: "500",
    fontVariant: ["small-caps"],
    color: "#C2C2C2",
  },
  forgotPasswordText: {
    textAlign: "right",
    color: "#34967C",
    marginTop: 9,
  },
});

export { styles };
