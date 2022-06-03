import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import BlogCard from '../components/BlogCard';
import Header from '../components/Header';

const BlogsScreen = () => {
  const [blogs, setBlogs] = useState([
    {
      title:
        'Now is the winter of our discontent \n Made glorious summer by this sun of York',
      blog: "And all the clouds that lour'd upon our houseIn the deep bosom of the ocean buried.Now are our brows bound with victorious wreaths;Our bruised arms hung up for monuments;Our stern alarums changed to merry meetings,Our dreadful marches to delightful measures.Grim-visaged war hath smooth'd his wrinkled front;And now, instead of mounting barded steedsTo fright the souls of fearful adversaries,He capers nimbly in a lady's chamberTo the lascivious pleasing of a lute.But I, that am not shaped for sportive tricks,Nor made to court an amorous looking-glass;I, that am rudely stamp'd, and want love's majestyTo strut before a wanton ambling nymph;I, that am curtail'd of this fair proportion,",
      image:
        'https://bsmedia.business-standard.com/_media/bs/img/article/2020-09/30/full/1601405150-2084.jpg',
      createdBy: 'Lorem ipsum',
      createdAt: new Date().toString(),
      likes: 10,
      comments: [
        {
          createdBy: {
            name: 'Ipsim Lorem',
          },
          comment: 'very good keep it up!!!!',
        },
      ],
    },
  ]);

  return (
    <View style={styles.container}>
      <Header title={'Blogs'} />
      <FlatList
        data={blogs}
        keyExtractor={(x, i) => i.toString()}
        renderItem={({item}) => <BlogCard blog={item} />}
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

export default BlogsScreen;
