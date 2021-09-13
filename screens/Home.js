import React from 'react';
import { StyleSheet, Dimensions, ScrollView, View } from 'react-native';
import { Block, theme ,Text} from 'galio-framework';

import { Card } from '../components';
import articles from '../constants/articles';

const { width } = Dimensions.get('screen');

class Home extends React.Component {
  renderArticles = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        <Block flex>
          <Text style={{fontWeight: 'bold', fontSize:20, marginLeft:10}}>Before </Text>
          <View style={{ backgroundColor:'black',borderWidth:0.5 }}>
          </View>
          <Block flex row>
            <Card item={articles[1]} style={{ marginRight: theme.SIZES.BASE}} />
            <Card item={articles[2]} style={{marginRight: theme.SIZES.BASE}}/>
            <Card item={articles[3]} />
            
          </Block>
          
          <Block  flex row>
            <Card item={articles[4]} style={{ marginRight: theme.SIZES.BASE}} />
            <Card item={articles[5]} style={{marginRight: theme.SIZES.BASE}}/>
            <Block style={{flex:1}}></Block>
          
          </Block>
          <Text style={{fontWeight: 'bold', fontSize:20, marginLeft:10}}>During </Text>
          <View style={{ backgroundColor:'black',borderWidth:0.5 }}>
          </View>
          <Block  flex row>
          <Card item={articles[6]} style={{ marginRight: theme.SIZES.BASE }} />
          <Block style={{flex:1,marginRight: theme.SIZES.BASE}}></Block>
          <Block style={{flex:1, marginRight: theme.SIZES.BASE}}></Block>
          </Block>
          <Text style={{fontWeight: 'bold', fontSize:20, marginLeft:10}}>After </Text>
          <View style={{ backgroundColor:'black',borderWidth:0.5 }}>
          </View>
          <Block  flex row>
          <Card item={articles[7]} style={{ marginRight: theme.SIZES.BASE }} />
          <Block style={{flex:1, marginRight: theme.SIZES.BASE}}></Block>
          <Block style={{flex:1,marginRight: theme.SIZES.BASE}}></Block>
          </Block>
        
      
        </Block>
      </ScrollView>
    )
  }
  

  render() {
  
    return (
      <Block flex center style={styles.home}>
        {this.renderArticles()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
});

export default Home;
