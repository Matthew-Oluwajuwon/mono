import React, { useEffect } from "react";
import { router, Stack, useSegments } from "expo-router";
import { useAppSelector } from "@/store/hooks";

const Navigations = () => {
  const state = useAppSelector((state) => {
    return state.auth;
  });
  const segments = useSegments();

  useEffect(() => {
    const inAuthGroup =
      segments[0] === "(tabs)" || segments[0] === "(protected)" as any;
    if (state.isAuthenticated && !inAuthGroup) {
      router.replace("/(tabs)/(home)");
    } else if (!state.isAuthenticated && inAuthGroup) {
      router.replace("/");
    }
  }, [state.isAuthenticated]);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="signup" options={{ headerShown: false }} />
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false, gestureEnabled: false }}
      />
    </Stack>
  );
};

export default Navigations;
