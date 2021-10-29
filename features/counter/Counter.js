import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './counterSlice'
import { Button, Text, View } from "react-native";

export function Counter() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  console.log('dispatch : ', dispatch)

  return (
    <View>
      <View>
        <Text style={{ textAlign: "center", fontSize:20 }}>
          Welcome in Counter component :
        </Text>
        <Button
          title="Increment"
          color="#2196F3"
          accessibilityLabel="Increment value"
          onPress={() => dispatch(increment())}
        />
        <Button
          title="Decrement"
          color="#2196F3"
          accessibilityLabel="Decrement value"
          onPress={() => dispatch(decrement())}
        />
        <Button
          title="Increment by 2"
          color="#2196F3"
          accessibilityLabel="Increment by 2 value"
          onPress={() => dispatch(incrementByAmount(2))}
        />
        <Text style={{ textAlign: "center", fontSize:20 }}>
          {count}
        </Text>
      </View>
    </View>
  )
}
