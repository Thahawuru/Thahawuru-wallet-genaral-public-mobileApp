import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { CameraView, Camera } from "expo-camera";
import CameraOverlay from "../../components/UI/cameraOverlay";
import CustomButton from "../../components/UI/customButton";


export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getCameraPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View className=" relative flex flex-1 justify-center items-center ">
      <CameraView
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        barcodeScannerSettings={{
          barcodeTypes: ["qr", "pdf417"],
        }}
        style={StyleSheet.absoluteFillObject}
      />
      <CameraOverlay title="Scan Wallet ID" />

      {scanned && (
        // <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
        <View className="absolute bottom-[10%] w-full flex justify-center items-center">
          <CustomButton title="Scan Again" handelPress={() => setScanned(false)} />
        </View>
      )}
    </View>
  );
}
