import React from 'react';
import { Text } from 'react-native';
import styles from './LoremTextStyle';

export default function LoremText(){
    return (
        <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh lorem ipsum dolor
        </Text>
    );
}