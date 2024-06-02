import React, { useMemo } from 'react';
import { View, StyleSheet, Animated, useWindowDimensions } from 'react-native';

const Paginator = ({ data, scrollx }) => {
	const { width } = useWindowDimensions();

	const dots = useMemo(() => {
		return data.map((_, i) => {
			const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
			const dotWidth = scrollx.interpolate({
				inputRange,
				outputRange: [10, 20, 10],
				extrapolate: 'clamp',
			});

			const opacity = scrollx.interpolate({
				inputRange,
				outputRange: [0.3, 1, 0.3],
				extrapolate: 'clamp',
			});
			return (
				<Animated.View
					style={[styles.dot, { width: dotWidth, opacity }]}
					key={i.toString()}
				/>
			);
		});
	}, [data, scrollx, width]);

	return <View style={{ flexDirection: 'row', height: 32 }}>{dots}</View>;
};

const styles = StyleSheet.create({
	dot: {
		height: 10,
		borderRadius: 5,
		backgroundColor: '#8AC600',
		marginHorizontal: 8,
	},
});

export default React.memo(Paginator);
