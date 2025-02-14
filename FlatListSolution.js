```javascript
import React, { useMemo, useCallback, memo } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

const Item = memo(({ item }) => {
  return (
    <View style={styles.item}>
      <Text>{item.title}</Text>
    </View>
  );
});

const FlatListSolution = ({ data }) => {
  const renderItem = useCallback(({ item }) => {
    return <Item item={item} />;
  }, []);

  const memoizedData = useMemo(() => data, [data]);

  return (
    <FlatList
      data={memoizedData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default FlatListSolution;
```