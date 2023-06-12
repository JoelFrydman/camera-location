import { StyleSheet, Text, View } from 'react-native'
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

import PlaceItem from "../components/PlaceItem";

import React from 'react'
const places = useSelector(state => state.places.places);

  const renderItem = ({ item }) => (
    <PlaceItem
      title={item.title}
      image={item.image}
      address={"cualquiera"}
      onSelect={() => navigation.navigate("Detalle", { placeId: item.id })}
    />
  );

const PlaceDetailScreen = () => {
    return (
        <FlatList
        data={places}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default PlaceDetailScreen