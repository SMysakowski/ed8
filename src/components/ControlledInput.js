import { StyleSheet, View, Text } from "react-native";
import { Controller } from "react-hook-form";

import Input from "./Input";

const ControlledInput = ({
  name,
  control,
  ControllerProps = {},
  TextInputProps = {},
  label,
  actionRenderer,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { name, onChange, onBlur, ref, value },
        fieldState: { error },
      }) => {
        const isError = !!error;
        const hasHeader = !!label || !!actionRenderer;

        return (
          <View style={styles.inputContainer}>
            {hasHeader && (
              <View style={styles.header}>
                {label ? <Text style={styles.label}>{label}</Text> : <View />}
                {actionRenderer ? actionRenderer() : <View />}
              </View>
            )}
            <Input
              value={value}
              textInputRef={ref}
              onBlur={onBlur}
              id={name}
              onChangeText={(value) => onChange(value)}
              {...TextInputProps}
            />
            {isError && <Text style={styles.errorLabel}>{error.message}</Text>}
          </View>
        );
      }}
      {...ControllerProps}
    />
  );
};

export default ControlledInput;

export const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
  },
  errorLabel: {
    color: "red",
    fontSize: 10,
  },
  label: {
    color: "#6D6D78",
    paddingBottom: 4,
    fontSize: 12,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
