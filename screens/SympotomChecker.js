import React from "react";
import {
  StyleSheet,
  StatusBar,
  Dimensions,
  ImageBackground,
  View
} from "react-native";
import { SearchBar } from 'react-native-elements';
import { NavBar, Block, Text, theme, Button, DeckSwiper, Radio } from "galio-framework";
import StepIndicator from 'react-native-step-indicator';
import Swiper from 'react-native-swiper';
import { ListItem } from 'react-native-material-ui'
const { width, height } = Dimensions.get("screen");
const labels = ["Choose a\n symptom", "Select\n related\nfactors", "View\n possible\n causes"];
import {fetchAddresses} from '../utils/db/SQLiteManager';

// import { useDbContext } from "../hooks/useDb"
const customStyles = {
  stepIndicatorSize: 35,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#fe7013',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#fe7013'
}

const PAGES = ['Page 1', 'Page 2', 'Page 3'];
const renderViewPagerPage = (data) => {
  return (
    <View key={data} style={styles.page}>
      <Text>{data}</Text>
    </View>
  );
};
class SympotomChecker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPosition: 0,
      adultInitialValue: true,
      childInitialValue: false,
      search: '',
      firstPageData: ["Abdominal pain", "Blood in stool", "Chest pain"],
      firstSearchPageData: ["Abdominal pain", "Blood in stool", "Chest pain"],
      secondPageData1: ["Burning", "Ongoing"],
      secondPageData2: ["Middle abdomen", "Low abdomen"],
      thirdPageData: ["Irritable bowel syndroms"],
    };
    fetchAddresses().then(result =>{
      this.setState({
        firstSearchPageData:result.rows._array.map(item=>item.painName)
      })
      console.log("result",result.rows._array)
    })
  }


  onPageChange(position) {
    this.setState({ currentPosition: position });
  }
  nextStep() {
    this.onPageChange(this.state.currentPosition + 1)
  }

  updateSearch = search => {
    this.setState({ search });
    this.setState({
      firstSearchPageData:this.state.firstPageData.filter(item=>item.indexOf(search) >-1)
    })  
  };

  render() {
    return (
      <Block flex style={styles.container}>
        <StepIndicator
          stepCount={3}
          customStyles={customStyles}
          currentPosition={this.state.currentPosition}
          labels={labels}
        />
        <Block style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          <Radio style={styles.radio} label="Adult Symptom" containerStyle={{ backgroundColor: "#B0C4DE", marginRight: 10 }} labelStyle={{ color: 'black' }} initialValue={this.state.adultInitialValue} name='a' color="primary" />
          <Radio style={styles.radio} label="Child Symptom" containerStyle={{ backgroundColor: "#B0C4DE" }} labelStyle={{ color: 'black' }} initialValue={this.state.childInitialValue} name='a' color="info" />
        </Block>

        <SearchBar
          lightTheme={true}
          placeholder="Type Here to Search..." onChangeText={this.updateSearch} value={this.state.search}
        />
        <Swiper
          style={{ flexGrow: 1 }}
          loop={false}
          index={this.state.currentPosition}
          autoplay={false}
          onIndexChanged={(page) => {
            this.setState({ currentPosition: page });
          }}
        >
          <View key={"page1"} style={styles.page}>
            <Block  >
              {this.state.firstSearchPageData.map((item) => {
                return (<ListItem
                key={item}
                  divider
                  centerElement={{
                    primaryText: item,
                  }}
                  onPress={() => { 
                    // this.setState({ currentPosition: this.state.currentPosition++ });
                  }}
                />)
              })}

            </Block>
          </View>
          <View key={"page2"} style={styles.page}>
            <Text>page2</Text>
          </View>
          <View key={"page3"} style={styles.page}>
            <Text>page3</Text>
          </View>
        </Swiper>

      </Block>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.WHITE
  },
  radio: {
  },
  page: {

  }
});

export default SympotomChecker;
