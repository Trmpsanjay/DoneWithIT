import React from "react";
import { Image, StyleSheet, View } from "react-native";
import * as yup from 'yup';

import { AppForm, AppFormField, SubmitButton  } from '../components/forms';


let validationSchema  = yup.object().shape({
  email : yup.string().required().email().label('Email'),
  password : yup.string().required().min(4).label('Password')
});

function LoginScreen(props) {
  return (
    <View style = {styles.container}>
     <Image
            style={styles.logo}
            source={require("../assets/logo-red.png")}
          />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema = {validationSchema}
      >
       <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            name = 'email'
            keyboardType="email-address"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name = 'password'
            placeholder="Password"
            secureTextEntry={true}
            textContentType="password"
          />
          <SubmitButton title ='Login' />
     
      </AppForm>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginBottom: 20,
    marginTop: 50,
  },
});

export default LoginScreen;
