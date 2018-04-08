import React, { Component } from "react";
import { View, Text, Button } from "react-native";

export default class Detail extends Component {
  render() {
    return (
      <View>
        <Text>here is detail </Text>
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
