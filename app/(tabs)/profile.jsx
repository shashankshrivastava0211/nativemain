import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Animated, Easing } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import QRCode from 'react-native-qrcode-svg';
import { GestureHandlerRootView, TouchableWithoutFeedback } from 'react-native-gesture-handler';

const Profile = () => {
  const [msg, setMsg] = useState("");
  const [age, setAge] = useState("");
  const [qrData, setQrData] = useState("");
  const [showQR, setShowQR] = useState(false);
  const [flipAnim] = useState(new Animated.Value(0));

  const generateQRCode = () => {
    setQrData(`Name: ${msg}, Age: ${age}`);
  };

  const handleFlip = () => {
    setShowQR(!showQR);
    Animated.timing(flipAnim, {
      toValue: showQR ? 0 : 180,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  const frontInterpolate = flipAnim.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });
  const backInterpolate = flipAnim.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });

  const frontAnimatedStyle = {
    transform: [{ rotateY: frontInterpolate }],
  };
  const backAnimatedStyle = {
    transform: [{ rotateY: backInterpolate }],
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 50 }}>
        <View style={{ position: 'absolute', top: 5, right: 5 }}>
          <FontAwesome 
            name="user-circle" 
            size={50} 
            color="black" 
          />
        </View>
        <TextInput 
          placeholder='Type your name'
          value={msg}
          onChangeText={text => setMsg(text)}
          style={{
            width: '90%',
            borderRadius: 20,
            borderWidth: 0.5,
            padding: 10,
            marginVertical: 10,
            backgroundColor: 'white'
          }}
        />
        <TextInput 
          placeholder='Type your age'
          value={age}
          onChangeText={text => setAge(text)}
          style={{
            width: '90%',
            borderRadius: 20,
            borderWidth: 0.5,
            padding: 10,
            marginVertical: 10,
            backgroundColor: 'white'
          }}
        />
        <TouchableOpacity 
          onPress={generateQRCode}
          style={{
            padding: 10,
            backgroundColor: 'blue',
            borderRadius: 10,
            marginVertical: 20,
            alignItems: 'center',
            width: '50%'
          }}
        >
          <Text style={{ color: 'white', fontSize: 16 }}>Generate QR</Text>
        </TouchableOpacity>
        <TouchableWithoutFeedback onPress={handleFlip}>
          <Animated.View style={[{
            alignItems: 'center',
            marginVertical: 20,
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 10,
            padding: 20,
            backgroundColor: '#fff',
            backfaceVisibility: 'hidden'
          }, showQR ? backAnimatedStyle : frontAnimatedStyle]}>
            {showQR ? (
              <QRCode value={qrData} size={200} />
            ) : (
              <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Username: {msg}</Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Age: {age}</Text>
              </View>
            )}
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    </GestureHandlerRootView>
  );
};

export default Profile;
