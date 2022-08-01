import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Introduce() {
  const [name, setName] = useState<string>("");
  const [birth, setBirth] = useState<string>("");
  const [hpNum, setHpNum] = useState<string>("");
  const [carNum, setCarNum] = useState<string>("");
  const [carSize, setCarSize] = useState<string>("");

  console.log("name : ", name);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.7 }}>
        <View>
          <Text style={{ paddingBottom: 20, paddingRight: 20 }}>
            예약자 이름
          </Text>
        </View>
        <View>
          <TextInput
            value={name}
            placeholder="이름을 입력해주세요."
            onChangeText={setName}
          />
        </View>
      </View>
      <View style={{ flex: 0.7 }}>
        <View>
          <Text style={{ paddingBottom: 20, paddingRight: 20 }}>
            생년월일 (6자리)
          </Text>
        </View>
        <View>
          <TextInput
            value={birth}
            placeholder="생년월일 6자리를 입력해주세요."
            onChangeText={setBirth}
          />
        </View>
      </View>
      <View style={{ flex: 0.7 }}>
        <View>
          <Text style={{ paddingBottom: 20, paddingRight: 20 }}>
            휴대폰번호
          </Text>
        </View>
        <View>
          <TextInput
            value={hpNum}
            placeholder="휴대폰번호를 입력해주세요."
            onChangeText={setHpNum}
          />
        </View>
      </View>
      <View style={{ flex: 0.7 }}>
        <View>
          <Text style={{ paddingBottom: 20, paddingRight: 20 }}>차량번호</Text>
        </View>
        <View>
          <TextInput
            value={carNum}
            placeholder="차량번호를 입력해주세요."
            onChangeText={setCarNum}
          />
        </View>
      </View>
      <View style={{ flex: 0.7 }}>
        <View>
          <Text style={{ paddingBottom: 20, paddingRight: 20 }}>차종</Text>
        </View>
        <View>
          <TextInput
            value={carSize}
            placeholder="차종을 입력해주세요."
            onChangeText={setCarSize}
          />
        </View>
      </View>
      <View style={{ flex: 0.7 }}>
        <Button
          title="회원가입"
          onPress={() => alert("가입이 완료되었습니다.")}
        />
      </View>
      {/* <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => alert("삭제되었습니다.")}>
          <Text style={{ textAlign: "center" }}>삭제하기</Text>
        </TouchableOpacity>
      </View> */}
      <StatusBar style="auto" />
    </View>
  );
}
