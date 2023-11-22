    import React, { useEffect, useState } from 'react';
    import { StyleSheet, View, Text, FlatList } from 'react-native';
    import * as Contacts from 'expo-contacts';

    export default function Contactos() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        (async () => {
          const { status } = await Contacts.requestPermissionsAsync();
          if (status === 'granted') {
            const { data } = await Contacts.getContactsAsync({
              fields: [Contacts.Fields.Emails],
              fields: [Contacts.Fields.PhoneNumbers],
            });
            if (data.length > 0) {
              const contactsWithPhoneNumber = data.filter(
                (contact) => contact.phoneNumbers && contact.phoneNumbers[0] && contact.phoneNumbers[0].number
              );
              setContacts(contactsWithPhoneNumber);
            }
          }
        })();
      }, []);

    return (
        <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
            return (
            <View style={styles.contactContainer}>
                <Text style={styles.contactName}>{item.name}</Text>
                {item.phoneNumbers && item.phoneNumbers[0] && (
                <Text style={styles.contactNumber}>{item.phoneNumbers[0].number}</Text>
                )}
                <Text style={styles.contactExample}>Contacts Module Example</Text>
            </View>
            );
        }}
        />
    );
    }

    const styles = StyleSheet.create({
        contactContainer: {
        backgroundColor: '#e6e6e6',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        },
        contactName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        },
        contactNumber: {
        fontSize: 16,
        color: '#333333',
        marginBottom: 10,
        },
        contactExample: {
        fontSize: 14,
        color: '#666666',
        },
    });