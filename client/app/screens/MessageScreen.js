// import React, { useState } from "react";
// import { FlatList } from "react-native";
// import ListDeleteAction from "../components/ListDeleteAction";
// import ListItem from "../components/ListItem";
// import ListItemSeparator from "../components/ListItemSeparator";
// import ScreenComponent from "../components/ScreenComponent";

// const initialMessages = [
//   {
//     id: 1,
//     title: "T1",
//     subTitle: "D1",
//     image: require("../assets/mosh.jpg"),
//   },
//   {
//     id: 2,
//     title: "T2",
//     subTitle: "D2",
//     image: require("../assets/mosh.jpg"),
//   },
// ];

// function MessageScreen(props) {
//   const [messages, setMessages] = useState(initialMessages);
//   const [refreshing, setRefreshing] = useState(false);
//   const handleDelete = (message) => {
//     const newMessage = messages.filter((m) => m.id !== message.id);
//     setMessages(newMessage);
//   };
//   return (
//     <ScreenComponent>
//       <FlatList
//         data={messages}
//         keyExtractor={(messages) => messages.id.toString()}
//         renderItem={({ item }) => (
//           <ListItem
//             title={item.title}
//             subTitle={item.subTitle}
//             image={item.image}
//             onPress={() => console.log(item)}
//             renderRightActions={() => (
//               <ListDeleteAction onPress={() => handleDelete(item)} />
//             )}
//           />
//         )}
//         ItemSeparatorComponent={ListItemSeparator}
//         refreshing={refreshing}
//         onRefresh={() => {
//           setMessages([{
//             id: 2,
//             title: "T2",
//             subTitle: "D2",
//             image: require("../assets/mosh.jpg"),
//           }]);
//         }}
//       />
//     </ScreenComponent>
//   );
// }

// export default MessageScreen;

// import React, { useState } from "react";
// import { FlatList, StyleSheet, View } from "react-native";
// import ListDeleteAction from "../components/ListDeleteAction";
// import ListItem from "../components/ListItem";
// import ListItemSeparator from "../components/ListItemSeparator";
// // import {
// //   ListItem,
// //   ListItemDeleteAction,
// //   ListItemSeparator,
// // } from "../components/lists";
// import ScreenComponent from "../components/ScreenComponent";

// const initialMessages = [
//   {
//     id: 1,
//     title: "Mosh Hamedani",
//     description: "Hey! Is this item still available?",
//     image: require("../assets/mosh.jpg"),
//   },
//   {
//     id: 2,
//     title: "Mosh Hamedani",
//     description:
//       "I'm interested in this item. When will you be able to post it?",
//     image: require("../assets/mosh.jpg"),
//   },
// ];

// function MessagesScreen(props) {
//   const [messages, setMessages] = useState(initialMessages);
//   const [refreshing, setRefreshing] = useState(false);

//   const handleDelete = (message) => {
//     // Delete the message from messages
//     setMessages(messages.filter((m) => m.id !== message.id));
//   };

//   return (
//     <ScreenComponent>
//       <FlatList
//         data={messages}
//         keyExtractor={(message) => message.id.toString()}
//         renderItem={({ item }) => (
//           <ListItem
//             title={item.title}
//             subTitle={item.description}
//             image={item.image}
//             onPress={() => console.log("Message selected", item)}
//             renderRightActions={() => (
//               <ListDeleteAction onPress={() => handleDelete(item)} />
//             )}
//           />
//         )}
//         ItemSeparatorComponent={ListItemSeparator}
//         refreshing={refreshing}
//         onRefresh={() => {
//           setMessages([
//             {
//               id: 2,
//               title: "T2",
//               description: "D2",
//               image: require("../assets/mosh.jpg"),
//             },
//           ]);
//         }}
//       />
//     </ScreenComponent>
//   );
// }

// const styles = StyleSheet.create({});

// export default MessagesScreen;

import React, { useState } from "react";
import { FlatList } from "react-native";
import ListDeleteAction from "../components/ListDeleteAction";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import ScreenComponent from "../components/ScreenComponent";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    subTitle: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    subTitle: "D2",
    image: require("../assets/mosh.jpg"),
  },
];

function MessageScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = (message) => {
    const newMessage = messages.filter((m) => m.id !== message.id);
    setMessages(newMessage);
  };
  return (
    <ScreenComponent>
      <FlatList
        data={messages}
        keyExtractor={(messages) => messages.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
            onPress={() => console.log(item)}
            renderRightActions={() => (
              <ListDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([{
            id: 2,
            title: "T2",
            subTitle: "D2",
            image: require("../assets/mosh.jpg"),
          }]);
        }}
      />
    </ScreenComponent>
  );
}

export default MessageScreen;

