import { View, Text, StyleSheet, Image } from "react-native";

import { useUserById } from "../../hooks/api/users/useUserById";

export default function UserScreen({ route }) {
  const {
    params: { userId },
  } = route;

  const { data, isLoading, isError } = useUserById(userId);

  return (
    <View style={styles.root}>
      {isLoading && (
        <View style={styles.centeredContainer}>
          <Text>Loading...</Text>
        </View>
      )}
      {isError && (
        <View style={styles.centeredContainer}>
          <Text>Something went wrong</Text>
        </View>
      )}
      {!isLoading && !isError && (
        <View>
          <View style={styles.avatarContainer}>
            <Image
              style={styles.avatar}
              source={{
                uri: "https://png.pngtree.com/png-clipart/20190924/original/pngtree-businessman-user-avatar-free-vector-png-image_4827807.jpg",
              }}
            />
          </View>
          <Text style={styles.name}>{data.name}</Text>
          <Section label="Username" value={data.username} />
          <Section label="Email" value={data.email} />
          <Section label="Phone" value={data.phone} />
          <Section label="Website" value={data.website} />
          <Section label="Company" value={data.company.name} />
        </View>
      )}
    </View>
  );
}

const Section = ({ label, value }) => (
  <Text style={styles.sectionLabel}>
    {label}: <Text style={styles.sectionValue}>{value}</Text>
  </Text>
);

const styles = StyleSheet.create({
  sectionLabel: {
    fontWeight: "bold",
    paddingVertical: 4,
  },
  sectionValue: {
    fontWeight: "normal",
  },
  root: {
    padding: 32,
  },
  bold: {
    fontWeight: "bold",
  },
  item: {
    paddingHorizontal: 4,
    paddingVertical: 6,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarContainer: {
    alignItems: "center",
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: "100%",
  },
  name: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    paddingVertical: 16,
  },
});
