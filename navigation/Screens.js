import React from "react";
import { Dimensions } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// screens
import Home from "../screens/Home";
import Onboarding from "../screens/Onboarding";
import Booking from "../screens/Booking";
import Pro from "../screens/Pro";
import Profile from "../screens/Profile";
import uploadProfile from "../screens/uploadProfile";
import BookingDetail from "../screens/BookingDetail";
import Elements from "../screens/Elements";
import HospitalMap from "../screens/HospitalMap";
import Emergency from "../screens/Emergency";
import Translate from "../screens/Translate";
import SympotomChecker from "../screens/SympotomChecker";
import Insurance from "../screens/Insurance";
import StudyingInsurance from "../screens/StudyingInsurance";
import VisitingInsurance from "../screens/VisitingInsurance";
import CitizenInsurance from "../screens/CitizenInsurance";
import Service from "../screens/Service";
import ServiceClinic from "../screens/ServiceClinic";
import ServiceMedicalCenter from "../screens/ServiceMedicalCenter";
import ServiceHospital from "../screens/ServiceHospital";
// drawer
import CustomDrawerContent from "./Menu";

// header for screens
import { Header } from "../components";
import Account from "../screens/Account";

const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function ElementsStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Elements"
        component={Elements}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Elements" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
            <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}

function HospitalMapStack(props) {
  return (
    <Stack.Navigator initialRouteName="HospitalMap"mode="card" headerMode="screen">
      <Stack.Screen
        name="HospitalMap"
        component={HospitalMap}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Articles" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
            <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}

function ProfileStack(props) {
  return (
    <Stack.Navigator initialRouteName="Profile" mode="card" headerMode="screen">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              white
              title="Profile"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true
        }}
      />

      <Stack.Screen
        name="uploadProfile"
        component={uploadProfile}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              white
              title=""
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true
        }}
      />

      
      
    </Stack.Navigator>
  );
}

function HomeStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Home"
              search
              options
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
   
  
    </Stack.Navigator>
  );
}

export default function OnboardingStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        option={{
          headerTransparent: true
        }}
      />
      <Stack.Screen name="App" component={AppStack} />
        

      <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true
        }}
      />

      <Stack.Screen
              name="Emergency"
              component={Emergency}
              options={{
                header: ({ navigation, scene }) => (
                  <Header
                    title=""
                    back
                    white
                    transparent
                    navigation={navigation}
                    scene={scene}
                  />
                ),
                headerTransparent: true
              }}
        />

      <Stack.Screen
              name="SympotomChecker"
              component={SympotomChecker}
              options={{
                header: ({ navigation, scene }) => (
                  <Header
                    title=""
                    back
                    white
                    transparent
                    navigation={navigation}
                    scene={scene}
                  />
                ),
                headerTransparent: true
              }}
        />

    </Stack.Navigator>
  );
}

function EmergencyStack(props) {
  return (
    <Stack.Navigator initialRouteName="Emergency" mode="card" headerMode="screen">
      <Stack.Screen
        name="Emergency"
        component={Emergency}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              white
              title=""
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true
        }}
      />
      
    </Stack.Navigator>
  );
}

function BookingStack(props) {
  return (
    <Stack.Navigator initialRouteName="Booking" mode="card" headerMode="screen">
      <Stack.Screen
        name="Booking"
        component={Booking}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              white
              title=""
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true
        }}
      />

    <Stack.Screen
        name="BookingDetail"
        component={BookingDetail}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              white
              title=""
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true
        }}
      />
      
    </Stack.Navigator>
  );
}

function TranslateStack(props) {
  return (
    <Stack.Navigator initialRouteName="Translate" mode="card" headerMode="screen">
      <Stack.Screen
        name="Translate"
        component={Translate}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              white
              title=""
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}

function InsuranceStack(props) {
  return (
    <Stack.Navigator initialRouteName="Insurance" mode="card" headerMode="screen">
      <Stack.Screen
        name="Insurance"
        component={Insurance}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              white
              title=""
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true
        }}
      />
      
      <Stack.Screen
        name="StudyingInsurance"
        component={StudyingInsurance}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              white
              title=""
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true
        }}
      />

      <Stack.Screen
        name="VisitingInsurance"
        component={VisitingInsurance}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              white
              title=""
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true
        }}
      /> 

      <Stack.Screen
        name="CitizenInsurance"
        component={CitizenInsurance}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              white
              title=""
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}


function StudyingInsuranceStack(props) {
  return (
    <Stack.Navigator initialRouteName="StudyingInsurance" mode="card" headerMode="screen">
      <Stack.Screen
        name="StudyingInsurance"
        component={StudyingInsurance}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              white
              title=""
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true
        }}
      />
      
    </Stack.Navigator>
  );
}

function VisitingInsuranceStack(props) {
  return (
    <Stack.Navigator initialRouteName="VisitingInsurance" mode="card" headerMode="screen">
      <Stack.Screen
        name="VisitingInsurance"
        component={VisitingInsurance}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              white
              title=""
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true
        }}
      />
      
    </Stack.Navigator>
  );
}

function CitizenInsuranceStack(props) {
  return (
    <Stack.Navigator initialRouteName="CitizenInsurance" mode="card" headerMode="screen">
      <Stack.Screen
        name="CitizenInsurance"
        component={CitizenInsurance}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              white
              title=""
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true
        }}
      />
      
    </Stack.Navigator>
  );
}

function ServiceStack(props) {
  return (
    <Stack.Navigator initialRouteName="Service" mode="card" headerMode="screen">
      <Stack.Screen
        name="Service"
        component={Service}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              white
              title=""
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true
        }}
      />

      <Stack.Screen
        name="ServiceClinic"
        component={ServiceClinic}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              white
              title=""
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true
        }}
      />

    <Stack.Screen
        name="ServiceHospital"
        component={ServiceHospital}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              white
              title=""
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true
        }}
      />

    <Stack.Screen
        name="ServiceMedicalCenter"
        component={ServiceMedicalCenter}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              white
              title=""
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true
        }}
      />
      </Stack.Navigator>
      );
}

function uploadProfileStack(props) {
  return (
    <Stack.Navigator initialRouteName="uploadProfile" mode="card" headerMode="screen">
      <Stack.Screen
        name="uploadProfile"
        component={uploadProfile}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              white
              title=""
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true
        }}
      />
      
    </Stack.Navigator>
  );
}

function ServiceClinicStack(props) {
  return (
    <Stack.Navigator initialRouteName="ServiceClinic" mode="card" headerMode="screen">
      <Stack.Screen
        name="ServiceClinic"
        component={ServiceClinic}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              white
              title=""
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true
        }}
      />
      
    </Stack.Navigator>
  );
}

function ServiceMedicalCenterStack(props) {
  return (
    <Stack.Navigator initialRouteName="ServiceMedicalCenter" mode="card" headerMode="screen">
      <Stack.Screen
        name="ServiceMedicalCenter"
        component={ServiceMedicalCenter}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              white
              title=""
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true
        }}
      />
      
    </Stack.Navigator>
  );
}

function ServiceHospitalStack(props) {
  return (
    <Stack.Navigator initialRouteName="ServiceHospital" mode="card" headerMode="screen">
      <Stack.Screen
        name="ServiceHospital"
        component={ServiceHospital}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              white
              title=""
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true
        }}
      />
      
    </Stack.Navigator>
  );
}

function BookingDetailStack(props) {
  return (
    <Stack.Navigator initialRouteName="bookingDetail" mode="card" headerMode="screen">
      <Stack.Screen
        name="BookingDetail"
        component={BookingDetail}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              white
              title=""
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true
        }}
      />

      <Stack.Screen
        name="Booking"
        component={Booking}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              white
              title=""
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true
        }}
      />
      
    </Stack.Navigator>
  );
}



function AppStack(props) {
  return (
    <Drawer.Navigator
      style={{ flex: 1 }}
      drawerContent={props => <CustomDrawerContent {...props} />}
      drawerStyle={{
        backgroundColor: "white",
        width: width * 0.8
      }}
      drawerContentOptions={{
        activeTintcolor: "white",
        inactiveTintColor: "#000",
        activeBackgroundColor: "transparent",
        itemStyle: {
          width: width * 0.75,
          backgroundColor: "transparent",
          paddingVertical: 16,
          paddingHorizonal: 12,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          overflow: "hidden"
        },
        labelStyle: {
          fontSize: 18,
          marginLeft: 12,
          fontWeight: "normal"
        }
      }}
      initialRouteName="Home"
    >
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Booking" component={BookingStack} />
      <Drawer.Screen name="BookingDetail" component={BookingDetailStack} />
      <Drawer.Screen name="Profile" component={ProfileStack} />
      <Drawer.Screen name="Account" component={Account} />
      <Drawer.Screen name="Emergency" component={Emergency} />
      <Drawer.Screen name="Translate" component={Translate} />
      <Drawer.Screen name="SympotomChecker" component={SympotomChecker} />
      <Drawer.Screen name="Elements" component={ElementsStack} />
      <Drawer.Screen name="Service" component={ServiceStack} />
      <Drawer.Screen name="Insurance" component={InsuranceStack} />
      <Drawer.Screen name="HospitalMap" component={HospitalMap} />
    </Drawer.Navigator>
  );
}

