import React, { useState } from "react";
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const car = require("@/assets/images/car.png");

const DOWN_PAYMENT = [5, 10, 15, 20, 25, 30, 35];
const MONTH_OPTION = [24, 36, 40, 60, 72];

export default function Input() {
  const [carPrice, setCarPrice] = useState("");
  const [carDown, setCarDown] = useState("");
  const [carMont, setCarMonth] = useState("");
  const [carInterest, setCarInterest] = useState("");
  const [carInstallment, setCarInstallment] = useState("");
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView style={{ flex: 1 }} showsHorizontalScrollIndicator={false}>
        <Image source={car} style={styles.car} />

        <View style={styles.inputcont}>
          <Text style={{ fontFamily: "Kanit_700Bold", fontSize: 30 }}>
            คำนวณค่างวดรถ
          </Text>
          <Text style={styles.inputTitle}>ราคารถ(บาท)</Text>
          <TextInput
            placeholder="เช่น 850000"
            keyboardType="numeric"
            style={styles.inputView}
            value={carPrice}
            onChangeText={setCarPrice}
          />
          <Text style={styles.inputTitle}>เลือกเงินดาวน์(%)</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {DOWN_PAYMENT.map((item) => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.downPayment,
                  carDown === item.toString() && styles.downPaymentSelect,
                ]}
                onPress={() => setCarDown(item.toString())}
              >
                <Text style={styles.downLabel}>{item}%</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <Text style={styles.inputTitle}>ระยะเวลาผ่อน(งวด)</Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {MONTH_OPTION.map((item) => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.downPayment,
                  carMont === item.toString() && styles.downPaymentSelect,
                ]}
                onPress={() => setCarMonth(item.toString())}
              >
                <Text style={styles.downLabel}>{item}%</Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text style={styles.inputTitle}>ดอกเบี้ย(% ต่อปั)</Text>
          <TextInput
            placeholder="เช่น 2.59"
            keyboardType="numeric"
            style={styles.inputView}
            value={carInterest}
            onChangeText={setCarInterest}
          />
          <TouchableOpacity style={styles.btnCal}>
            <Text style={styles.labelCal}>คำนวณค่างวดรถ</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  btnCal: {
    backgroundColor: "#0644f0",
    padding: 25,
    marginTop: 25,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  labelCal: {
    fontFamily: "Kanit_600SemiBold",
    fontSize: 20,
    color: "#fff",
  },
  downPayment: {
    backgroundColor: "#979797",
    padding: 15,
    height: 50,
    width: 70,
    margin: 5,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  downLabel: {
    fontFamily: "Kanit_600SemiBold",
    fontSize: 16,
    color: "#fff",
  },
  downPaymentSelect: { backgroundColor: "#494747" },
  downLabelSelect: { color: "#fff" },
  inputView: {
    fontFamily: "Kanit_600semiBold",
    padding: 15,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#4d4848",
    backgroundColor: "#fff",
  },
  inputTitle: {
    fontFamily: "Kanit_600SemiBold",
    fontSize: 15,
    color: "#645f5f",
    marginTop: 18,
  },
  inputcont: {
    backgroundColor: "#fff",
    marginTop: 30,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 25,
  },
  car: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
  },
});
