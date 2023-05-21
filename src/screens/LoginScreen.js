import { StyleSheet, View, Text, Pressable } from "react-native";
import { useForm } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import ControlledInput from "../components/ControlledInput";

const defaultValues = {
  email: "xx@xx.xx",
  password: "somepass",
};

const validationSchema = object().shape({
  email: string().required().email(),
  password: string().required().min(8),
});

export default function LoginScreen({ navigation }) {
  const { control, handleSubmit } = useForm({
    defaultValues,
    // Kiedy będzie uruchomiona walidacja
    mode: "onBlur",
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    navigation.navigate("Posts", {
      email: data.email,
    });
  };

  const onRegister = () => {
    navigation.navigate("Join");
  };

  const forgetPasswordRenderer = () => (
    <Pressable>
      <Text style={styles.forgetPasswordLabel}>Forgot password?</Text>
    </Pressable>
  );

  return (
    <View style={styles.rootContainer}>
      <View style={styles.contentContainer}>
        <Text style={styles.heading}>Login Now</Text>
        <Text style={styles.subHeading}>
          Please enter your information below in order to login to your account.
        </Text>
        <View style={styles.InputContainer}>
          <ControlledInput
            label={"Email Address"}
            name="email"
            control={control}
            TextInputProps={{
              autoCapitalize: "none",
              placeholder: "Type your e-mail address",
              keyboardType: "email-address",
            }}
          />
          <View style={styles.divider} />
          <ControlledInput
            actionRenderer={forgetPasswordRenderer}
            label={"Password"}
            name="password"
            control={control}
            TextInputProps={{
              placeholder: "Type your password",
              secureTextEntry: true,
            }}
          />
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        <Button title="Sign Up" onPress={onRegister} filled={false} />
      </View>
    </View>
  );
}

const Button = ({ onPress, title, filled = true }) => (
  <Pressable onPress={onPress}>
    <View
      style={[styles.buttonContainer, filled && styles.filledButtonContainer]}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </View>
  </Pressable>
);

export const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    borderRadius: 16,
    borderColor: "#EAEAEA",
    borderWidth: 1,
    padding: 16,
    marginVertical: 8,
  },
  filledButtonContainer: {
    backgroundColor: "#FFDFD6",
    borderColor: "#FFDFD6",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  rootContainer: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 32,
    justifyContent: "space-between",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  InputContainer: {
    width: "100%",
    paddingVertical: 32,
  },
  registerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  registerBtn: {
    color: "blue",
  },
  divider: {
    paddingVertical: 16,
  },
  forgetPasswordLabel: {
    fontSize: 14,
    fontWeight: "bold",
  },
  subHeading: {
    textAlign: "center",
    color: "#6D6D78",
    paddingVertical: 12,
    lineHeight: 24,
  },
  buttonsContainer: {
    width: "100%",
  },
  contentContainer: {
    width: "100%",
    paddingTop: 32,
  },
});
