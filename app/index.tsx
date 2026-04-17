import React from "react";
// import WelcomeScreen from "./screens/WelcomeScreen";
// import { Text, View } from "react-native";
// import colors from "./config/colors";
// import Card from "./components/Card";
// import ListingDetailsScreen from "./screens/listingDetailsScreen";
import ViewImageScreen from "./screens/ViewImageScreen";

export default function App() {
  // return<WelcomeScreen />;
  return (
    <ViewImageScreen />
    // <ListingDetailsScreen/>
    // <View
    //   style={{
    //     backgroundColor: "#f8f4f4",
    //     padding: 20,
    //     paddingTop: 100,
    //     flex: 1,
    //   }}
    // >
    //   {/* <View
    //     style={{
    //       backgroundColor: "#fff",
    //       borderRadius: 15,
    //       marginBottom: 20,
    //       overflow: "hidden",
    //     }}
    //   >
    //     <View
    //       style={{
    //         width: "100%",
    //         height: 200,
    //         backgroundColor: "navy",
    //       }}
    //     />
    //     <View style={{ padding: 20 }}>
    //       <Text style={{ marginBottom: 7 }}>red jacket for sale!</Text>
    //       <Text
    //         style={{
    //           color: colors.secondary,
    //           fontWeight: "bold",
    //         }}
    //       >
    //         $200
    //       </Text>
    //     </View>
    //   </View> */}
    //   <Card
    //     image={require("./assets/images/jacket.jpg")}
    //     title="Red Jacket"
    //     subTitle="$50"
    //   />
    //   <Card
    //     image={require("./assets/images/couch.jpg")}
    //     title="Old couch for sale!"
    //     subTitle="$500"
    //   />
    // </View>
  );
}
