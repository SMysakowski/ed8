import { StyleSheet, View, Text, Button, Alert } from "react-native";
import { useForm } from "react-hook-form";
import { object, string, ref } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import ControlledInput from "../components/ControlledInput";

const defaultValues = {
  email: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = object().shape({
  email: string().required().email(),
  password: string().required().min(8),
  confirmPassword: string()
    .required()
    .oneOf([ref("password"), null], "Passwords must match"),
});

export default function JoinScreen() {
  const { control, handleSubmit } = useForm({
    defaultValues,
    // Kiedy będzie uruchomiona walidacja
    mode: "onBlur",
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    Alert.alert("Success", "Account created successfully");
  };

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.heading}>Register Account</Text>
      <View style={styles.InputContainer}>
        <ControlledInput
          name="email"
          control={control}
          TextInputProps={{
            autoCapitalize: "none",
            placeholder: "Type your e-mail address",
            keyboardType: "email-address",
          }}
        />
        <ControlledInput
          name="password"
          control={control}
          TextInputProps={{
            placeholder: "Type your password",
            secureTextEntry: true,
          }}
        />
        <ControlledInput
          name="confirmPassword"
          control={control}
          TextInputProps={{
            placeholder: "Confirm your password",
            secureTextEntry: true,
          }}
        />
      </View>
      <Button title="Log in" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

export const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
  },
  InputContainer: {
    padding: 16,
    width: "100%",
  },
});
