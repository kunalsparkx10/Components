import React, {useContext, useState} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import {Button} from 'react-native-elements';
import {Paragraph, Subheading, useTheme} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../auth/AuthProvider';

const EventScreen = ({route, navigation}) => {
  const {event} = route.params;
  const {setCurrentUser, isSignedIn, currentUser} = useContext(AuthContext);
  const [volunteered, setVolunteered] = useState(
    isSignedIn ? currentUser.pEvents.find(i => i._id === event._id) : false,
  );
  const {colors} = useTheme();

  const Detail = ({name, value}) => {
    return (
      <View
        style={{
          marginVertical: 5,
          flexDirection: 'row',
          marginLeft: 5,
          width: '80%',
        }}>
        <Paragraph style={{color: colors.primary, fontWeight: 'bold'}}>
          {name}:-{' '}
        </Paragraph>
        <Paragraph style={{color: colors.background}}>{value}</Paragraph>
      </View>
    );
  };

  function volunteer() {
    if (!isSignedIn)
      return alert('Please login or register before Volunteering :)');
    ToastAndroid.show(
      'Thank you for Volunteering ! \n We hope to see you there :)',
      ToastAndroid.LONG,
    );
    setCurrentUser(c => {
      return {...c, pEvents: [...c.pEvents, event]};
    });
    setVolunteered(true);
  }

  return (
    <ImageBackground source={{uri: event.image}} style={styles.container}>
      <View
        style={{...StyleSheet.absoluteFill, backgroundColor: 'rgba(0,0,0,0.4)'}}
      />
      <TouchableOpacity
        onPress={navigation.goBack}
        hitSlop={{top: 20, bottom: 100, left: 20, right: 20}}>
        <Ionicons
          name="arrow-back"
          style={{
            fontSize: 30,
            color: colors.background,
            marginRight: 15,
            position: 'absolute',
            top: -10,
            left: -5,
          }}
        />
      </TouchableOpacity>
      <Subheading
        style={{
          color: colors.accent,
          fontSize: 18,
          textAlign: 'center',
          fontWeight: 'bold',
        }}>
        {event.name}
      </Subheading>
      <Paragraph style={{color: colors.background}}>
        By ~{event.createdBy}
      </Paragraph>
      <ScrollView
        style={{
          flex: 1,
          marginTop: 10,
          borderWidth: 2,
          borderColor: colors.disabled,
          borderRadius: 10,
          padding: 10,
        }}>
        <View style={{flex: 1}}></View>
        <Paragraph
          style={{
            color: colors.background,
            fontWeight: 'bold',
            fontSize: 16,
            textDecorationLine: 'underline',
          }}>
          About Event:
        </Paragraph>
        <Paragraph style={{color: colors.background}}>
          {event.description}
        </Paragraph>
        <View style={{marginTop: 10}}>
          <Paragraph
            style={{
              color: colors.background,
              fontWeight: 'bold',
              fontSize: 16,
              textDecorationLine: 'underline',
            }}>
            Event Description
          </Paragraph>
          <Detail name={'Target Amount'} value={event.targetAmount} />
          <Detail
            name={'Event Date'}
            value={new Date(event.event_date).toLocaleDateString()}
          />
          <Detail
            name={'No. of Volunteers Required'}
            value={event.targetVolunteers}
          />
          <Detail name={'Location'} value={event.address} />
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              justifyContent: 'space-evenly',
            }}>
            <Button
              title={'Volunteer'}
              style={'solid'}
              disabled={volunteered}
              onPress={volunteer}
              buttonStyle={{
                backgroundColor: volunteered
                  ? colors.textBefore
                  : colors.border,
                height: 50,
                width: 120,
                borderRadius: 30,
                marginBottom: 20,
              }}
              titleStyle={{
                fontWeight: 'bold',
                fontSize: 18,
              }}
            />
            <Button
              title={'Donate'}
              style={'solid'}
              buttonStyle={{
                backgroundColor: colors.border,
                height: 50,
                width: 120,
                borderRadius: 30,
                marginBottom: 20,
              }}
              titleStyle={{
                fontWeight: 'bold',
                fontSize: 18,
              }}
            />
          </View>
          <Button
            title={'Chat'}
            style={'solid'}
            onPress={() => {
              if (!isSignedIn)
                return alert('Please login or register before Volunteering :)');
              navigation.navigate('Chat');
            }}
            buttonStyle={{
              backgroundColor: colors.primary,
              height: 50,
              width: 120,
              borderRadius: 30,
              marginBottom: 20,
              alignSelf: 'center',
            }}
            titleStyle={{
              fontWeight: 'bold',
              fontSize: 18,
            }}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});

export default EventScreen;
