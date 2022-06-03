import React, {useContext} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Text} from 'react-native-paper';
import {AuthContext} from '../auth/AuthProvider';
import EventCard from '../components/EventCard';
import Header from '../components/Header';

const Participating = () => {
  const {isSignedIn, currentUser} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Header title={'Your Participated Events'} />
      <FlatList
        data={isSignedIn ? currentUser.pEvents : []}
        keyExtractor={(x, i) => i.toString()}
        ListEmptyComponent={() => (
          <Text style={{textAlign: 'center'}}>
            {isSignedIn
              ? 'Hurry up !!!! and volunteer for events so you can view them here'
              : 'Plz login or register to view the events you have opted to volunteer for :)'}{' '}
          </Text>
        )}
        renderItem={({item}) => <EventCard isVolunteer={true} event={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});

export default Participating;
