import React, { useState, useRef, useCallback } from 'react';
import { View, StyleSheet, FlatList, Animated } from 'react-native';

import list from './list';
import OnboardingItens from './onboardingItens';
import Paginator from './paginator';
import NextButton from './nextButton';

export default function Onboarding() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const scrollx = useRef(new Animated.Value(0)).current;
	const listRef = useRef(null);

	const viewableItemsChanged = useRef(({ viewableItems }) => {
		setCurrentIndex(viewableItems[0].index);
	}).current;

	const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

	const scrollTo = useCallback(() => {
		if (currentIndex < list.length - 1) {
			listRef.current.scrollToIndex({ index: currentIndex + 1 });
		} else {
			listRef.current.scrollToIndex({ index: currentIndex - 3 });
		}
	}, [currentIndex]);

	return (
		<View style={styles.container}>
			<View style={{ flex: 3 }}>
				<FlatList
					data={list}
					renderItem={({ item }) => <OnboardingItens item={item} />}
					horizontal
					showsHorizontalScrollIndicator={false}
					pagingEnabled
					bounces={false}
					keyExtractor={item => item.id}
					onScroll={Animated.event(
						[{ nativeEvent: { contentOffset: { x: scrollx } } }],
						{
							useNativeDriver: false, 
						}
					)}
					onViewableItemsChanged={viewableItemsChanged}
					viewabilityConfig={viewConfig}
					scrollEventThrottle={8}
					ref={listRef}
				/>
			</View>
			<Paginator data={list} scrollx={scrollx}  />
			<NextButton
				style={styles.button}
				scrollTo={scrollTo}
				percentage={(currentIndex + 1) * (100 / list.length)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	button:{
	},
});
