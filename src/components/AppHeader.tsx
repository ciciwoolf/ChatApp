import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  StatusBar,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import { theme, typography, spacing } from "../styles";

interface AppHeaderProps {
title?: string;
subtitle?: string;
showBack?: boolean;
onBack?: () => void;
right?: React.ReactNode;
containerStyle?: StyleProp<ViewStyle>;
titleStyle?: StyleProp<TextStyle>;
subtitleStyle?: StyleProp<TextStyle>;
}

export default function AppHeader({
title = "App",
subtitle,
showBack = false,
onBack,
right,
containerStyle,
titleStyle,
subtitleStyle,
}: AppHeaderProps) {
const statusBarHeight =
    Platform.OS === "android" ? StatusBar.currentHeight ?? 0 : 44;

return (
    <View style={[styles.safeArea, { paddingTop: statusBarHeight }, containerStyle]}>
        <View style={styles.row}>
            {showBack ? (
                <TouchableOpacity onPress={onBack} style={styles.backButton} accessibilityRole="button">
                    <Text style={styles.backText}>‹</Text>
                </TouchableOpacity>
            ) : (
                <View style={styles.backPlaceholder} />
            )}

            <View style={styles.titleContainer}>
                <Text numberOfLines={1} style={[styles.title, titleStyle]}>
                    {title}
                </Text>
                {subtitle ? (
                    <Text numberOfLines={1} style={[styles.subtitle, subtitleStyle]}>
                        {subtitle}
                    </Text>
                ) : null}
            </View>

            <View style={styles.rightContainer}>{right ?? <View style={styles.rightPlaceholder} />}</View>
        </View>
    </View>
);
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: theme.background,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: theme.border,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    height: 56,
    paddingHorizontal: spacing.md,
  },
  backButton: {
    width: 40,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  backText: {
    fontSize: 28,
    color: theme.primary,
    lineHeight: 28,
  },
  backPlaceholder: {
    width: 40,
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: spacing.sm,
  },
  title: {
    ...typography.h6,
    color: theme.textPrimary,
  },
  subtitle: {
    ...typography.caption,
    color: theme.textSecondary,
    marginTop: 2,
  },
  rightContainer: {
    width: 40,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  rightPlaceholder: {
    width: 40,
  },
});