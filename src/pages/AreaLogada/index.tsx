import React from "react";
import { Image, Text, View, ImageBackground } from "react-native";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import { RectButton } from 'react-native-gesture-handler';
import MyTextInput from "./MyTextInput";
import styles from "./styles";
import PageHeader from '../../components/PageHeader';
import backLogin from '../../assets/images/back-login.png';

    
    function cacheImages(images) {
      return images.map(image => {
        if (typeof image === "string") {
          return Image.prefetch(image);
        } else {
          return Asset.fromModule(image).downloadAsync();
        }
      });
    }
    
    export default class PWDAreaLogada extends React.Component {
      state = {
        isReady: false
      };
    
      async _loadAssetsAsync() {
        const imageAssets = cacheImages([
          require("../../assets/images/icons/icon.png"),
          require("../../assets/images/icons/icons8-lock-black.png"),
          require("../../assets/images/icons/icons8-lock-white.png")
        ]);
    
        await Promise.all([...imageAssets]);
      }
    
      render() {
        if (!this.state.isReady) {
          return (
            <AppLoading
              startAsync={this._loadAssetsAsync}
              onFinish={() => this.setState({ isReady: true })}
              onError={console.warn}
            />
          );
        }
    
        return (
          <View style={styles.container}>
            <PageHeader title="Verificação de Segurança" backColor="#2CC272">
              <Text style={styles.titleChildren}>Para sua segurança, sempre perguntaremos sua senha.</Text>
            </PageHeader>
            
            <ImageBackground source={backLogin} style={styles.backgroungLogin}>
                <View style={styles.content}>
                    <Text style={styles.titleBold}>
                    Para acessar a área logada, digite sua senha novamente
                    </Text>

                    <MyTextInput />

                    <RectButton style={styles.button}>
                        <Text style={styles.buttonText}>Acessar</Text>
                    </RectButton>

                </View>

            </ImageBackground>
          </View>
        );
      }
    }
