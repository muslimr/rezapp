import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Modal } from 'react-native';
import { rezGetAnnouncements } from '../../../api_client';
import { ListItem, Spacer, Button } from '../../components';
import { Strings } from '../../constants';
import dayjs from 'dayjs';


export function AnnouncementsScreen(props) {
    const [announcements, setAnnouncements] = useState([]);
    const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

    useEffect(() => {
        async function fetchAnnouncements() {
            const announcements = await rezGetAnnouncements();
            setAnnouncements(announcements);
        }

        fetchAnnouncements();
    }, []);

    const renderAnnouncement = ({ item }) => {
        const ann = {
            id: item.id,
            name: item.subject,
        };
        return (<ListItem styleName='secondary' text={ann.name} onPress={() => setSelectedAnnouncement(item)} />);
    };

    const announcementDate = dayjs(selectedAnnouncement?.inserted_at).format('ddd, MM/DD/YYYY, hh:mm a');


    React.useLayoutEffect(() => {
        if (props.route.params?.title) {
            props.navigation.setOptions({ title: props.route.params.title });
        }
    }, [props.navigation, props.route.params?.title]);


    return (
        <View style={styles.container}>
            <Spacer height={20} />

            <FlatList
                data={announcements}
                renderItem={renderAnnouncement}
                keyExtractor={item => `${item.id}`}
            />

            <Spacer height={20} />

            <Modal animationType="fade" transparent={true} visible={!!selectedAnnouncement}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalTitle}>{selectedAnnouncement?.subject}</Text>

                        <Text style={styles.modalText}>{selectedAnnouncement?.description}</Text>

                        <Text style={styles.modalText}>
                            {Strings.captionPostedOn().replace('%s', announcementDate)}
                        </Text>

                        <Button text={Strings.buttonOK()} onPress={() => setSelectedAnnouncement(null)} />
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 20,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalTitle: {
        marginBottom: 15,
        fontSize: 24,
    },
    modalText: {
        marginBottom: 15,
    },
});
