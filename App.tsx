import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  TouchableOpacity, 
  ScrollView, 
  Alert 
} from 'react-native';

export default function App() {
  // Button click hone par alert popup dikhane ka function
  const handlePress = (actionName) => {
    Alert.alert("Button Pressed", `${actionName} button par touch hua hai!`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.welcomeText}>Welcome Back 👋</Text>
            <Text style={styles.title}>ZN WALLET</Text>
          </View>
          <TouchableOpacity style={styles.avatar} onPress={() => handlePress("Profile")}>
            <Text style={styles.avatarText}>Z</Text>
          </TouchableOpacity>
        </View>

        {/* Card View */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardLabel}>Total Balance</Text>
            <Text style={styles.cardBrand}>ZN WALLET</Text>
          </View>
          <Text style={styles.balance}>$2,450.00</Text>
          <View style={styles.cardFooter}>
            <Text style={styles.cardNumber}>**** **** **** 8824</Text>
            <Text style={styles.cardType}>VISA</Text>
          </View>
        </View>

        {/* Quick Actions (Touchable Buttons) */}
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.actionsContainer}>
          
          <TouchableOpacity style={styles.actionBtn} onPress={() => handlePress("Send")}>
            <View style={[styles.iconBox, { backgroundColor: '#E3F2FD' }]}>
              <Text style={styles.icon}>⬆️</Text>
            </View>
            <Text style={styles.actionLabel}>Send</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionBtn} onPress={() => handlePress("Receive")}>
            <View style={[styles.iconBox, { backgroundColor: '#E8F5E9' }]}>
              <Text style={styles.icon}>⬇️</Text>
            </View>
            <Text style={styles.actionLabel}>Receive</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionBtn} onPress={() => handlePress("Pay Bill")}>
            <View style={[styles.iconBox, { backgroundColor: '#FFF3E0' }]}>
              <Text style={styles.icon}>💳</Text>
            </View>
            <Text style={styles.actionLabel}>Pay Bill</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionBtn} onPress={() => handlePress("Add Funds")}>
            <View style={[styles.iconBox, { backgroundColor: '#F3E5F5' }]}>
              <Text style={styles.icon}>➕</Text>
            </View>
            <Text style={styles.actionLabel}>Add Funds</Text>
          </TouchableOpacity>

        </View>

        {/* Recent Transactions Header */}
        <View style={styles.transactionHeader}>
          <Text style={styles.sectionTitle}>Recent Transactions</Text>
          <TouchableOpacity onPress={() => handlePress("See All")}>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>

        {/* Transactions List */}
        <View style={styles.transactionCard}>
          <View style={styles.transItem}>
            <Text style={styles.transIcon}>📥</Text>
            <View style={styles.transDetails}>
              <Text style={styles.transName}>Ali Nifaz</Text>
              <Text style={styles.transDate}>Today, 2:30 PM</Text>
            </View>
            <Text style={[styles.transAmount, { color: '#2e7d32' }]}>+$350.00</Text>
          </View>

          <View style={styles.transItem}>
            <Text style={styles.transIcon}>📤</Text>
            <View style={styles.transDetails}>
              <Text style={styles.transName}>Supermarket</Text>
              <Text style={styles.transDate}>Yesterday, 8:15 PM</Text>
            </View>
            <Text style={[styles.transAmount, { color: '#d32f2f' }]}>-$42.50</Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA' },
  scrollContent: { padding: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  welcomeText: { fontSize: 14, color: '#6C757D' },
  title: { fontSize: 22, fontWeight: 'bold', color: '#1A1A1A' },
  avatar: { width: 45, height: 45, borderRadius: 25, backgroundColor: '#5E35B1', justifyContent: 'center', alignItems: 'center' },
  avatarText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
  card: { backgroundColor: '#1E1E2C', borderRadius: 16, padding: 20, marginBottom: 25 },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between' },
  cardLabel: { color: '#A0A0A0', fontSize: 12 },
  cardBrand: { color: '#7986CB', fontWeight: 'bold' },
  balance: { color: '#FFF', fontSize: 28, fontWeight: 'bold', marginVertical: 15 },
  cardFooter: { flexDirection: 'row', justifyContent: 'space-between' },
  cardNumber: { color: '#A0A0A0' },
  cardType: { color: '#FFF', fontWeight: 'bold' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#1A1A1A', marginBottom: 15 },
  actionsContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 25 },
  actionBtn: { alignItems: 'center', width: '22%' },
  iconBox: { width: 55, height: 55, borderRadius: 16, justifyContent: 'center', alignItems: 'center', marginBottom: 8 },
  icon: { fontSize: 20 },
  actionLabel: { fontSize: 12, fontWeight: '500', color: '#333' },
  transactionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  seeAll: { color: '#5E35B1', fontWeight: '600' },
  transactionCard: { backgroundColor: '#FFF', borderRadius: 16, padding: 15 },
  transItem: { flexDirection: 'row', alignItems: 'center', marginVertical: 10 },
  transIcon: { fontSize: 22, marginRight: 12 },
  transDetails: { flex: 1 },
  transName: { fontSize: 15, fontWeight: '600', color: '#1A1A1A' },
  transDate: { fontSize: 12, color: '#888' },
  transAmount: { fontSize: 15, fontWeight: 'bold' },
});

