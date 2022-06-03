import React, {useContext, useState} from 'react';
import {ScrollView, StyleSheet, ToastAndroid, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import {useNavigation} from '@react-navigation/core';
import {Button, Input, Avatar} from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo';
import ImageCropPicker from 'react-native-image-crop-picker';
import {AuthContext} from '../auth/AuthProvider';
import LoginScreen from './LoginScreen';
import Header from '../components/Header';

const ProfileScreen = () => {
  const {colors} = useTheme();
  const {isLoading, currentUser, signOut, isSignedIn, setCurrentUser} =
    useContext(AuthContext);
  const [email, setEmail] = useState(currentUser.email || '');
  const [name, setName] = useState(currentUser.name || '');
  const [image, setImage] = useState(currentUser.profile || '');

  const pickImage = () => {
    ImageCropPicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setImage(image.path);
      setCurrentUser(c => {
        return {...c, profile: image.path};
      });
    });
  };
  // const onChange = (event, selectedDate) => {
  //   const currentDate = selectedDate || new Date();
  //   setShow(false);
  //   setDob(format(currentDate, 'dd/MM/yyyy'));
  // };

  // const OnDobEnter = t => {
  //   let temp = t;
  //   if (temp.length === 2 || dob.length === 4) {
  //     temp += '/';
  //   }
  //   setDob(temp);
  // };

  // const register = () => {
  //   let names = name.split(' ');
  //   let fname = names[0];
  //   let lname = '';
  //   if (names.length > 1) {
  //     lname = names[1];
  //   }
  //   let body = {
  //     userDetails: {
  //       email: isRegistering ? email1 : email,
  //       password: pass1,
  //       fname,
  //       lname,
  //       phone: '',
  //       collegeName: college,
  //       bdate: dob,
  //     },
  //   };
  //   if (phone !== '') {
  //     if (!isValidPhone(phone)) {
  //       return false;
  //     } else {
  //       body.userDetails.phone = phone;
  //     }
  //   }

  //   if (isRegistering) signUp(body);
  //   else {
  //     delete body.userDetails.password;
  //     console.log(body);
  //     updateProfile(image, body, setCurrentUser, setIsLoading);
  //   }
  // };

  return isSignedIn ? (
    <ScrollView>
      <View style={{marginTop: 15, marginLeft: 15}}>
        <Header title={'Profile'} />
      </View>

      <View style={{flex: 1, alignItems: 'center', padding: 20}}>
        <Avatar
          rounded
          onPress={pickImage}
          size={160}
          source={{
            uri:
              image ||
              'https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_960_720.png',
          }}>
          <Avatar.Accessory
            style={{height: 40, width: 40, borderRadius: 20}}
            iconStyle={{fontSize: 25}}
            ImageComponent={<Entypo name={'pencil'} color={colors.text} />}
          />
        </Avatar>

        <Input
          value={name}
          onChangeText={setName}
          label={'Name'}
          placeholder={'enter name'}
          leftIcon={{type: 'ionicons', name: 'person-outline'}}
        />
        <Input
          value={email}
          onChangeText={setEmail}
          label={'Email'}
          placeholder={'enter your mail '}
          leftIcon={{type: 'feather', name: 'mail'}}
        />
        <Button
          title={'Done'}
          style={'solid'}
          onPress={() => {
            setCurrentUser(c => {
              return {...c, profile: image, name, email};
            });
            ToastAndroid.show('Profile Details updated !!', ToastAndroid.SHORT);
          }}
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
        />

        <Button
          title={'Sign-Out'}
          style={'solid'}
          buttonStyle={{
            backgroundColor: colors.error,
            height: 60,
            width: 150,
            borderRadius: 30,
            marginBottom: 20,
          }}
          titleStyle={{
            fontWeight: 'bold',
            fontSize: 20,
          }}
          onPress={signOut}
        />
      </View>
    </ScrollView>
  ) : (
    <LoginScreen />
  );
};

export default ProfileScreen;
