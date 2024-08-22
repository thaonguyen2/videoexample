import {StyleSheet, Text} from 'react-native';

interface HeaderProps {
  text: String;
}

const Header = (props: HeaderProps) => {
  return <Text style={styles.title}>{props.text}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 36,
    color: 'black',
  },
});

export default Header;
