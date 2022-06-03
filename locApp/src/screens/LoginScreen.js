import React, {useState, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Text,
  useTheme,
  Subheading,
  Button as PaperButton,
} from 'react-native-paper';
import {Input, Button} from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';
import {AuthContext} from '../auth/AuthProvider';
import {useNavigation} from '@react-navigation/native';
import {validateEmail} from '../utils/helper';

const LoginScreen = ({register = false}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hide, setHide] = useState(true);
  const {colors} = useTheme();
  const {signIn, isLoading, signUp} = useContext(AuthContext);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{register ? 'Sign-Up' : 'Sign-In'}</Text>

      <View style={{height: 40}} />
      {register && (
        <Input
          value={name}
          onChangeText={setName}
          label={'Name'}
          placeholder={'enter your name '}
          leftIcon={{type: 'feather', name: 'mail'}}
        />
      )}
      <Input
        value={email}
        onChangeText={setEmail}
        label={'Email'}
        placeholder={'enter your mail '}
        leftIcon={{type: 'feather', name: 'mail'}}
      />
      <Input
        value={password}
        onChangeText={setPassword}
        label={'Password'}
        placeholder={'enter your password '}
        leftIcon={{type: 'feather', name: 'lock'}}
        secureTextEntry={hide}
        rightIcon={
          <Feather
            name={hide ? 'eye-off' : 'eye'}
            onPress={() => setHide(h => !h)}
            color={colors.text}
            size={22}
          />
        }
      />
      <Button
        //raised={true}
        title={register ? 'register' : 'Login'}
        style={'solid'}
        loading={isLoading}
        disabled={isLoading}
        buttonStyle={{
          backgroundColor: !isLoading ? colors.secondary : colors.textBefore,
          height: 60,
          width: 150,
          borderRadius: 30,
          marginBottom: 20,
        }}
        titleStyle={{
          fontWeight: 'bold',
          fontSize: 20,
        }}
        onPress={async () => {
          if (validateEmail(email)) {
            if (register) {
              await signUp(name, email, password);
              navigation.goBack();
            } else signIn(email, password);
          }
        }}
      />
      <Subheading>
        {register ? 'Already have an account ?' : "Don't have an account ?"}
      </Subheading>
      <PaperButton
        labelStyle={{fontSize: 18, color: colors.secondary}}
        onPress={() =>
          navigation.navigate(register ? 'ProfileMain' : 'SignUp')
        }>
        {register ? 'Sign-In' : 'Sign-Up'}
      </PaperButton>
      {/* <Title style={{color: colors.secondary}}>Sign-Up</Title> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //top: 100,
    padding: 20,

    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'left',
    marginVertical: 30,
    marginLeft: 20,
  },
});

export default LoginScreen;
