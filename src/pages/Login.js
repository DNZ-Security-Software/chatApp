import React from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView } from 'react-native';

const Login = () => {
  return (
    <View style={{ flex: 1 }}>
      <KeyboardAvoidingView style={{ flex: 1, backgroundColor: 'gray' }}>
        <ScrollView contentContainerStyle={{ flex: 1 }}>
            <Text>Login Page</Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export { Login };
