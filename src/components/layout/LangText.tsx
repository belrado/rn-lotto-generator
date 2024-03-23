import React, { memo } from 'react';
import { Text } from 'react-native';
import { LangTextProps} from "@/types/common.ts";

export const LangText = memo(function LangText({ style, color, size, textAlign, letterSpacing, children, ...props }: LangTextProps) {
    return (
        <Text
            allowFontScaling={false}
            style={[
                style,
                color && { color: color },
                size && { fontSize: size },
                textAlign && { textAlign: textAlign },
                letterSpacing && { letterSpacing: letterSpacing },
            ]}
            {...props}>
            {children}
        </Text>
    );
});
