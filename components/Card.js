import React from 'react';
import { withNavigation } from '@react-navigation/compat';
import PropTypes from 'prop-types';
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback } from 'react-native';
import { Block, Text, theme, Button} from 'galio-framework';

class Card extends React.Component {
  render() {
    const { navigation, item, horizontal, full, style, ctaColor, imageStyle } = this.props;
    
    const imageStyles = [
      full ? styles.fullImage : styles.horizontalImage,
      imageStyle
    ];
    const cardContainer = [styles.card, styles.shadow, style];
    const imgContainer = [styles.imageContainer,
      horizontal ? styles.horizontalStyles : styles.verticalStyles,
      styles.shadow
    ];
      
    return (
      <Block row={horizontal} card flex style={cardContainer}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate(item.cta)}>
          <Block flex >
            <Image source={{uri:item.image}} style={imageStyles} />
            {/* <Image source={require("../assets/imgs/222.jpg")} style={imageStyles}/> */}
            
            
          </Block>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => navigation.navigate(item.cta)}>
          <Block flex space="between" style={styles.cardDescription}>
            <Text size={14} style={styles.cardTitle}>{item.title}</Text>
            {/* <Button>use</Button> */}
            {/* <Text size={13} muted={!ctaColor} color={ctaColor || argonTheme.COLORS.ACTIVE} bold>{item.cta}</Text> */}
          </Block>
        </TouchableWithoutFeedback>
        
      </Block>
    );
  }
}

Card.propTypes = {
  item: PropTypes.object,
  horizontal: PropTypes.bool,
  full: PropTypes.bool,
  ctaColor: PropTypes.string,
  imageStyle: PropTypes.any,
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "rgb(240,248,255)",
    marginVertical: theme.SIZES.BASE,
    height:160,
    borderWidth: 0,
    borderRadius: 15,
    minHeight: 130,
    marginBottom: 13,
    
  },
  cardTitle: {
    flex: 1,
    fontSize:13,
    flexWrap: 'wrap', 
    fontWeight:'bold',
    marginTop:18,
    textAlign: 'center',
    textAlignVertical: 'center'

  },
  cardDescription: {
    padding: theme.SIZES.BASE / 2,
   
  },
  // imageContainer: {
  //   borderRadius: 10,
  //   elevation: 1,
  //   overflow: 'hidden',
  // },
  image: {
    borderRadius: 5,
  },
  horizontalImage: {
    height: 100,
    width: 'auto',
   
  },
  horizontalStyles: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  verticalStyles: {
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
  },
  fullImage: {
    height: 220
  },
  shadow: {
    // shadowColor: theme.COLORS.BLACK,
    // shadowOffset: { width: 0, height: 2 },
    // shadowRadius: 4,
    // shadowOpacity: 0.1,
    elevation:10,
  },
});

export default withNavigation(Card);