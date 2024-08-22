import {Pressable, StyleSheet, Text} from 'react-native';
import {ColorConstants, SizeConstants} from '../constants/StyleConstants';

interface BackButtonProps {
  text: String;
  onPress: () => void;
}

const BackButton = (props: BackButtonProps) => {
  return (
    <Pressable onPress={props.onPress} style={styles.backButton}>
      <Text style={styles.backButtonText}>{props.text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  backButton: {
    padding: SizeConstants.paddingLarge,
    marginBottom: SizeConstants.paddingLarge,
    backgroundColor: ColorConstants.backgroundMedium,
  },
  backButtonText: {
    color: ColorConstants.font,
  },
});

export default BackButton;
