import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Alert,
  Text,
  Image,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';

import { authStyle } from './styles';
import { Input, Button } from '../components';
import { resolveAuthError } from '../functions';
import auth from '@react-native-firebase/auth';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function login() {

    try {
      if (email === '' || password === '') {
        Alert.alert('DNZ Free Chat', resolveAuthError('auth/null-value'));
      } else {
        await auth().signInWithEmailAndPassword(email, password);
        props.navigation.navigate('Timeline');
      }
    } catch (error) {
      Alert.alert('DNZ Free Chat', resolveAuthError(error.code));
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView style={{ flex: 1, backgroundColor: '#cfd8dc' }}>
        <ScrollView contentContainerStyle={{ flex: 1 }}>
          <View style={authStyle.container}>
            <Image
              style={authStyle.logo}
              source={require('../assets/logo.png')}
            />
            <Text style={authStyle.logoText}>Free Chat</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Input
              inputProps={{
                placeholder: 'Type your email address..',
                keyboardType: 'email-address',
              }}
              onType={(value) => setEmail(value)}
            />
            <Input
              inputProps={{
                placeholder: 'Type your password..',
                secureTextEntry: true,
              }}
              onType={(value) => setPassword(value)}
            />

            <Button title="Sign In" onPress={() => login()} />
            <Button
              title="Sign Up"
              noBorder
              onPress={() => props.navigation.navigate('Sign')}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export { Login };
