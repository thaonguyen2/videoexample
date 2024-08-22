import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';

interface ScrollContainerProps {
  children: React.ReactNode;
}

const ScrollContainer = (props: ScrollContainerProps) => {
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.contentContainer}>
        {props.children}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  contentContainer: {
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
});

export default ScrollContainer;
