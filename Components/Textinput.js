import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, View } from "react-native";
import { Accelerometer } from "expo-sensors";
import Toast from 'react-native-root-toast';

const UselessTextInput = () => {
  const [text, setText] = React.useState("");
  const [undotext, setTextUndo] = React.useState("");
  const [flag, setflag] = React.useState(0);
  const [toast, setToast] = React.useState(null);
  const onChangeText = (newText) => {
    // console.log(newText);
    // console.log(text);
    setText(newText);
    setTextUndo('')
    // console.log(text);
  };
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [subscription, setSubscription] = useState(null);

  const _subscribe = () => {
    setSubscription(
      Accelerometer.addListener((accelerometerData) => {
        setData(accelerometerData);
      })
    );
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);

  const { x, y, z } = data;
  // console.log(undotext)
  // console.log(text)
  Accelerometer.setUpdateInterval(280);
  return (
    <View>
      <Text style={styles.text}>
        <VarText
          x={round(x)}
          setTextUndo={setTextUndo}
          text={text}
          setText={setText}
          flag={flag}
          setflag={setflag}
          undotext={undotext}
          toast={toast}
          setToast={setToast}
        />
      </Text>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
      </SafeAreaView>
    </View>
  );
};

export default UselessTextInput;

const VarText = ({
  x,
  setTextUndo,
  text,
  setText,
  flag,
  setflag,
  undotext,
  toast,
  setToast,
}) => {

  if (x >= 0.6 && flag != 1 && text.length > 0) {
    setflag(1);
    setTextUndo(undotext + text[text.length - 1]);
    setText(text.substring(0, text.length - 1));
    toast && Toast.hide(toast)
    setToast(Toast.show('UNDO', {
      duration: Toast.durations.SHORT,
    }))
  }
  if (x < 0.6 && x > -0.6) {
    setflag(0);
  }
  if (x <= -0.6 && flag != 2 && undotext.length > 0) {
    setflag(2);
    setText(text + undotext[undotext.length - 1]);
    setTextUndo(undotext.substring(0, undotext.length - 1));
    toast && Toast.hide(toast)
    setToast(Toast.show('REDO', {
      duration: Toast.durations.SHORT,
    }))

  }
  return null;
};

function round(n) {
  if (!n) {
    return 0;
  }
  return Math.floor(n * 100) / 100;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  text: {
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "stretch",
    marginTop: 15,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
    padding: 10,
  },
  middleButton: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#ccc",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
