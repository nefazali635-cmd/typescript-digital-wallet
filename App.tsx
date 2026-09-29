import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';

export default function App() {
  const [balance, setBalance] = useState(2450.00);

  const transactions = [
    { id: '1', name: 'Ali Nifaz', type: 'Received', amount: '+$350.00', date: 'Today, 2:30 PM', isCredit: true },
    { id: '2', name: 'Supermarket', type: 'Shopping', amount: '-$42.50', date: 'Yesterday, 8:15 PM', isCredit: false },
    { id: '3', name: 'Mobile Recharge', type: 'Utility', amount: '-$15.00', date: '28 Sep 2026', isCredit: false },
    { id: '4', name: 'Salary Credit', type: 'Deposit', amount: '+$2,100.00', date: '25 Sep 2026', isCredit: true },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1e1e2d" />
      
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greetingText}>Welcome Back 👋</Text>
            <Text style={styles.userNameText}>Digital Wallet User</Text>
          </View>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>W</Text>
          </View>
        </View>

        {/* Balance Card */}
        <View style={styles.balanceCard}>
          <Text style={styles.cardLabel}>Total Balance</Text>
          <Text style={styles.cardBalance}>${balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}</Text>
          <View style={styles.cardFooter}>
            <Text style={styles.cardNumber}>**** **** **** 8824</Text>
            <Text style={styles.cardType}>VISA</Text>
          </View>
        </View>

        {/* Quick Actions */}
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.actionsGrid}>
          <TouchableOpacity style={styles.actionBtn}>
            <View style={[styles.iconBox, { backgroundColor: '#e3f2fd' }]}>
              <Text style={styles.actionIcon}>⬆️</Text>
            </View>
            <Text style={styles.actionText}>Send</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionBtn}>
            <View style={[styles.iconBox, { backgroundColor: '#e8f5e9' }]}>
              <Text style={styles.actionIcon}>⬇️</Text>
            </View>
            <Text style={styles.actionText}>Receive</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionBtn}>
            <View style={[styles.iconBox, { backgroundColor: '#fff3e0' }]}>
              <Text style={styles.actionIcon}>💳</Text>
            </View>
            <Text style={styles.actionText}>Pay Bill</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionBtn}>
            <View style={[styles.iconBox, { backgroundColor: '#f3e5f5' }]}>
              <Text style={styles.actionIcon}>➕</Text>
            </View>
            <Text style={styles.actionText}>Add Funds</Text>
          </TouchableOpacity>
        </View>

        {/* Recent Transactions */}
        <View style={styles.txHeader}>
          <Text style={styles.sectionTitle}>Recent Transactions</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.txList}>
          {transactions.map((tx) => (
            <View key={tx.id} style={styles.txItem}>
              <View style={styles.txLeft}>
                <View style={styles.txIconContainer}>
                  <Text style={{ fontSize: 18 }}>{tx.isCredit ? '📥' : '📤'}</Text>
                </View>
                <View>
                  <Text style={styles.txName}>{tx.name}</Text>
                  <Text style={styles.txDate}>{tx.date}</Text>
                </View>
              </View>
              <Text style={[styles.txAmount, { color: tx.isCredit ? '#2e7d32' : '#c62828' }]}>
                {tx.amount}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fb',
  },
  scrollContainer: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  greetingText: {
    fontSize: 14,
    color: '#6c757d',
  },
  userNameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e1e2d',
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#4f46e5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  balanceCard: {
    backgroundColor: '#1e1e2d',
    borderRadius: 20,
    padding: 24,
    marginBottom: 25,
    elevation: 5,
  },
  cardLabel: {
    color: '#a0a5ba',
    fontSize: 14,
  },
  cardBalance: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 12,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  cardNumber: {
    color: '#a0a5ba',
    fontSize: 14,
  },
  cardType: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e1e2d',
    marginBottom: 15,
  },
  actionsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  actionBtn: {
    alignItems: 'center',
    width: '22%',
  },
  iconBox: {
    width: 55,
    height: 55,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  actionIcon: {
    fontSize: 22,
  },
  actionText: {
    fontSize: 12,
    color: '#4b5563',
    fontWeight: '600',
  },
  txHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  seeAllText: {
    color: '#4f46e5',
    fontWeight: '600',
  },
  txList: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  txItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  txLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#f3f4f6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  txName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1e1e2d',
  },
  txDate: {
    fontSize: 12,
    color: '#9ca3af',
    marginTop: 2,
  },
  txAmount: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
