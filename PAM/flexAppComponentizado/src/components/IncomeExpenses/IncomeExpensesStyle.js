import { StyleSheet } from "react-native";

export default StyleSheet.create({
  summary: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    marginTop: 36,
  },
  summaryItem: {
    alignItems: "center",
    width: "40%",
  },
  labelRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 6,
  },
  summaryTitle: {
    fontSize: 25,
  },
  summaryAmount: {
    fontSize: 50,
    fontWeight: "bold",
  },
  dot1: {
    height: 13,
    width: 13,
    borderRadius: 50,
    backgroundColor: "red",
  },
  dot2: {
    height: 13,
    width: 13,
    borderRadius: 50,
    backgroundColor: "black",
  },
  divider: {
    width: 1.5,
    height: "100%",
    backgroundColor: "#ccc",
  },
});