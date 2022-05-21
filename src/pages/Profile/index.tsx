import { FC, useCallback, useState } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { styles } from './styles';
import { useAuth } from '../../providers';
import { Button, ButtonType, ImagePicker, Input, InputScheme, Navbar } from '../../components';

const avatarPlaceholder = require('./avatar.png');

export const ProfilePage: FC = () => {
    const [inFocus, setInFocus] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const { user, uploadAvatar, changeUsername, changePassword } = useAuth();

    const onFocus = useCallback(() => {
        setInFocus(true);
    }, []);

    const onBlur = useCallback(() => {
        setInFocus(false);
    }, []);

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.wrapper}>
                <Navbar />
                <ScrollView style={{ width: '100%' }}>
                    <View style={styles.avatarContainer}>
                        <ImagePicker image={user?.photo} onPick={uploadAvatar} placeholder={avatarPlaceholder} />
                        <Text style={styles.username}>{user?.username}</Text>
                    </View>

                    <View style={{ ...styles.block, ...(inFocus ? styles.focused : {})}}>
                        <Input
                            marginBottom={10}
                            value={username}
                            onChange={setUsername}
                            label={'New Username'}
                            scheme={InputScheme.DARK}
                        />
                        <Button
                            type={ButtonType.AGREE}
                            mb={20}
                            text={'Change username'}
                            onClick={() => changeUsername(username)}
                            disabled={!username}
                        />
                        <Input
                            marginBottom={10}
                            value={password}
                            onChange={setPassword}
                            label={'Password'}
                            scheme={InputScheme.DARK}
                            secureTextEntry={true}
                            onFocus={onFocus}
                            onBlur={onBlur}
                        />
                        <Input
                            value={newPassword}
                            onChange={setNewPassword}
                            label={'New password'}
                            scheme={InputScheme.DARK}
                            secureTextEntry={true}
                            onFocus={onFocus}
                            onBlur={onBlur}
                        />
                        <Button
                            type={ButtonType.AGREE}
                            mt={10}
                            text={'Change password'}
                            onClick={() => changePassword(newPassword, password)}
                            disabled={!newPassword || !password}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}
