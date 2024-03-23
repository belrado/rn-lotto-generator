import {StyleSheet, View} from "react-native";
import {LangText} from "@/components/layout/LangText.tsx";
import {BallProps} from "@/types/common.ts";

export default function Ball({color, number, bonus}: BallProps) {
  return (
    <>
      {bonus && <View style={styles.bonus}><LangText size={30}>+</LangText></View>}
      <View style={[styles.ball, {backgroundColor: color}]}>
        <LangText size={18} color={"#fff"} style={{fontWeight: "bold"}}>
          {number}
        </LangText>
      </View>
    </>
  )
};

const styles = StyleSheet.create({
  ball: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#999',
    marginRight: 4,
  },
  bonus: {
    width: 22,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 4,
  }
})
