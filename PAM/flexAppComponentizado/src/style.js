import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#ff416c",
    width: "100%",
    height: "50%",
    padding: 20,
    borderBottomLeftRadius: 26,
    borderBottomRightRadius: 26,
    borderTopRightRadius: 26,
    borderTopLeftRadius: 26,
    alignItems: "center",
  },
  balanceCard: {
    backgroundColor: "white",
    padding: 26,
    marginTop: 30,
    borderRadius: 13,
    alignItems: "center",
    width: "95%",
    position: "relative",
  },
  balanceTitle: {
    fontSize: 18,
    color: "#777",
  },
  balanceAmount: {
    fontSize: 35,
    fontWeight: "bold",
    color: "black",
  },
  settingsIcon: {
    position: "absolute",
    top: 13,
    right: 13,
    fontSize: 24,
    color: "black",
  },
  navButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "95%",
    marginTop: 26,
  },
  button: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 13,
    alignItems: "center",
    width: 100,
  },
  buttonText: {
    marginTop: 6,
    fontSize: 16,
  },
  buttonIcon: {
    fontSize: 35,
    color: "black",
  },
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
  description: {
    textAlign: "center",
    color: "gray",
    fontSize: 16,
    marginTop: 26,
    paddingHorizontal: 26,
  },
});
