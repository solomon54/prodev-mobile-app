//styles/_mainStyle.ts

import { StyleSheet, Dimensions } from "react-native";

// Constants for reusable values

const COLORS = {
  white: "#fff",
};

const SPACING = {
  small: 10,

  medium: 20,

  large: 40,
};

const FONT_SIZE = {
  small: 18,

  medium: 24,

  large: 40,
};

const BORDER_RADIUS = {
  large: 36,
};

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  searchGroup: {
    padding: 20,
    backgroundColor: "#fff",
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 30,
    padding: 10,
  },
  searchControlGroup: {
    flex: 1,
    marginLeft: 10,
  },
  searchFormText: {
    fontSize: 12,
    color: "#000",
  },
  searchControl: {
    fontSize: 16,
  },
  searchButton: {
    backgroundColor: "#34967C",
    padding: 10,
    borderRadius: 20,
  },
  filterGroup: {
    flexDirection: "row",
    padding: 10,
  },
  filterContainer: {
    alignItems: "center",
    marginHorizontal: 15,
  },
  listingContainer: {
    flex: 1,
  },
  paginationContainer: {
    padding: 20,
    alignItems: "center",
  },
  showMoreButton: {
    padding: 15,
    backgroundColor: "#000",
    borderRadius: 10,
  },
  showMoreButtonText: {
    color: "#fff",
  },

  container: {
    flex: 1,
  },

  backgroundImageContainer: {
    flex: 1,

    height: height,
  },

  logoContainer: {
    padding: SPACING.large,

    alignItems: "center",

    marginTop: 74,
  },

  titleContainer: {
    marginTop: SPACING.large,
  },

  titleText: {
    fontSize: FONT_SIZE.large,

    textAlign: "center",

    fontWeight: 800,

    color: COLORS.white,
  },

  titleSubTextContainer: {
    marginTop: SPACING.medium,
  },

  titleSubText: {
    fontWeight: 300,

    fontSize: FONT_SIZE.small,

    textAlign: "center",

    color: COLORS.white,
  },

  buttonPrimary: {
    backgroundColor: COLORS.white,

    alignItems: "center",

    padding: SPACING.medium,

    borderRadius: BORDER_RADIUS.large,

    flex: 1,
  },

  buttonPrimaryText: {
    fontSize: FONT_SIZE.small,

    fontWeight: 300,

    textAlign: "center",
  },

  buttonSecondary: {
    alignItems: "center",

    padding: SPACING.medium,

    borderRadius: BORDER_RADIUS.large,

    borderWidth: 1,

    borderColor: COLORS.white,

    flex: 1,
  },

  buttonSecondaryText: {
    fontSize: FONT_SIZE.small,

    fontWeight: 300,

    textAlign: "center",

    color: COLORS.white,
  },

  buttonGroup: {
    flexDirection: "row",

    alignItems: "center",

    justifyContent: "center",

    gap: SPACING.medium,

    paddingHorizontal: SPACING.medium,
  },

  buttonGroupSubText: {
    flexDirection: "row",

    justifyContent: "center",

    alignItems: "center",

    gap: SPACING.small,

    marginTop: 19,
  },
});

export { styles };
