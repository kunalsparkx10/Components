import React, {useState} from 'react';
import {View, StyleSheet, Image, ScrollView} from 'react-native';
import {
  Avatar,
  Button,
  Paragraph,
  Subheading,
  TextInput,
  Title,
  useTheme,
} from 'react-native-paper';

const Blog = ({route}) => {
  const {blog} = route.params;
  const [comments, setComments] = useState(blog.comments);
  const [comment, setComment] = useState('');
  const {colors} = useTheme();

  const commentSubmit = () => {
    setComments(s => [...s, {comment, createdBy: {name: 'Test Account'}}]);
    setComment('');
  };
  return (
    <ScrollView style={styles.container}>
      <Title style={{fontWeight: 'bold', fontSize: 24, textAlign: 'center'}}>
        {blog.title}
      </Title>
      <Image
        source={{uri: blog.image}}
        style={{
          height: 250,
          width: '100%',
          borderRadius: 10,
          marginVertical: 10,
        }}
      />

      <Paragraph>{blog.blog}</Paragraph>

      <Subheading style={{fontWeight: 'bold'}}>Comment Section:- </Subheading>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Avatar.Image
          size={37}
          source={{
            uri: 'https://www.pngkit.com/png/detail/320-3209421_jianxiong-tao-superintendent-anonymous-person.png',
          }}
        />
        <TextInput
          value={comment}
          onChangeText={setComment}
          placeholder="Enter Comment..."
          placeholderTextColor={colors.textAfter}
          textAlignVertical={'bottom'}
          style={{
            borderWidth: 2,
            borderColor: colors.text,
            marginRight: 10,
            height: 40,
            width: '85%',
            marginTop: 5,
            marginLeft: 5,
            borderRadius: 7,
          }}
        />
        {comment.trim() !== '' && (
          <Button
            style={{position: 'absolute', right: 25}}
            onPress={commentSubmit}>
            Send
          </Button>
        )}
      </View>
      {comments.map((item, index) => (
        <View
          key={index}
          style={{
            width: '100%',
            marginTop: 15,
            flexDirection: 'row',
            borderWidth: 1,
            borderColor: 'black',
            padding: 10,
            borderRadius: 10,
            paddingHorizontal: 10,
            marginBottom: 10,
          }}>
          <Avatar.Image
            size={30}
            source={{
              uri: '',
            }}
          />
          <View style={{marginLeft: 10}}>
            <Subheading style={{fontWeight: 'bold'}}>
              {item.createdBy.name}
            </Subheading>
            <Paragraph>{item.comment}</Paragraph>
          </View>
        </View>
      ))}
      <View style={{height: 20}} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingBottom: 20,
  },
  input: {
    marginLeft: 10,
    width: 50,
    height: 40,
    color: 'black',
    paddingRight: 55,
    fontSize: 10,
    marginTop: 5,
  },
});
export default Blog;
