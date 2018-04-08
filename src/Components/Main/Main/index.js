import React, { Component } from "react";
import { View, Text, Button } from "react-native";

export default class Main extends Component {
  render() {
    console.log(this.props);
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>here is Main </Text>
        <Button
          title="hello to 'detail'"
          onPress={() =>
            this.props.navigation.navigate("Detail", { user: "i am user" })
          }
        />
      </View>
    );
  }
}
