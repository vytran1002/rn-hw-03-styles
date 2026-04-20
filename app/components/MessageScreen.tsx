import React, { useState } from "react";
import { FlatList, ImageSourcePropType, StyleSheet } from "react-native";
import Screen from "../screens/Screen";
import ListItem from "./ListItem";
import ListItemDeleteAction from "./ListItemDeleteAction";
import ListItemSeparator from "./ListItemSeparator";

interface Message {
  id: number;
  title: string;
  description: string;
  image: ImageSourcePropType;
}

const initialMessages: Message[] = [
  {
    id: 1,
    title: "1",
    description: "D1",
    image: require("../assets/images/mario.jpg"),
  },
  {
    id: 2,
    title: "2",
    description: "D2",
    image: require("../assets/images/luigi.jpg"),
  },
];

export default function MessageScreen() {
  const [messages, setMessage] = useState<Message[]>(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = (msg: Message) => {
    setMessage(
      messages.filter((m) => {
        return m.id !== msg.id;
      }),
    );
  };
  return (
    <Screen>
      <FlatList
        refreshing={refreshing}
        onRefresh={async () => {
          setRefreshing(true);
          await new Promise((resolve) => setTimeout(resolve, 1000));
          setMessage([messages[0]]);
          setRefreshing(false);
        }}
        contentContainerStyle={
          {
            // backgroundColor: "gold"
          }
        }
        data={messages}
        keyExtractor={(msg) => msg.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log(item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
