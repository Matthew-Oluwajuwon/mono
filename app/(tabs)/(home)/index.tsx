import { View, Image, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Balance from "../../../components/balance";
import SingleTransaction, {
  SingleTransactionProps,
} from "@/components/SingleTransaction";

function greetUser() {
  const currentHour = new Date().getHours();

  if (currentHour >= 5 && currentHour < 12) {
    return "Good morning";
  } else if (currentHour >= 12 && currentHour < 18) {
    return "Good afternoon";
  } else {
    return "Good evening";
  }
}

const Home = () => {
  const { top } = useSafeAreaInsets();
  const data: SingleTransactionProps[] = [
    {
      image: require("@/assets/images/up.png"),
      title: "Upwork",
      time: "Today",
      amount: "850.00",
      type: "CREDIT",
    },
    {
      image: require("@/assets/images/prof.png"),
      title: "Transfer",
      time: "Yesterday",
      amount: "85.00",
      type: "DEBIT",
    },
    {
      image: require("@/assets/images/pp.png"),
      title: "Paypal",
      time: "Jan 30, 2022",
      amount: "1,406.00",
      type: "CREDIT",
    },
    {
      image: require("@/assets/images/youtube.png"),
      title: "Youtube",
      time: "Jan 16, 2022",
      amount: "11.99",
      type: "DEBIT",
    },
  ];

  const datas = [
    require("@/assets/images/prof-big.png"),
    require("@/assets/images/prof-2.png"),
    require("@/assets/images/prof-3.png"),
    require("@/assets/images/prof-4.png"),
    require("@/assets/images/prof-5.png"),
  ];

  return (
    <View className="relative flex-1 bg-[#FBFBFB]">
      <Image
        source={require("@/assets/images/top-bg.png")}
        className="absolute top-0 left-0"
      />
      <View
        style={{ marginTop: top + 10 }}
        className="flex-row items-center justify-between p-5"
      >
        <View>
          <Text className="font-InterRegular text-white leading-loose">
            {greetUser()},
          </Text>
          <Text className="font-InterSemiBold text-2xl text-white">
            Matthew Oluwajuwon
          </Text>
        </View>
        <TouchableOpacity>
          <Image source={require("@/assets/images/notification.png")} />
        </TouchableOpacity>
      </View>
      <Balance />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="flex-grow"
        className="flex-1 mt-3 p-5"
      >
        <View className="flex-row justify-between mb-5">
          <Text className="font-InterSemiBold text-lg">
            Transactions History
          </Text>
          <TouchableOpacity>
            <Text className="text-[#666666] font-InterRegular">See all</Text>
          </TouchableOpacity>
        </View>
        {data.map((item, index) => (
          <SingleTransaction key={index} {...item} />
        ))}
        <View>
          <View className="flex-row justify-between mb-5">
            <Text className="font-InterSemiBold text-lg">Send Again</Text>
            <TouchableOpacity>
              <Text className="text-[#666666] font-InterRegular">See all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView showsHorizontalScrollIndicator={false} contentContainerClassName="flex-row justify-between items-center">
            {datas.map((item, index) => (
              <Image source={item} key={index} />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
