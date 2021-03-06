import { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styled';
import { AddIcon, CategoriesIcon, HomeIcon, LogoutIcon, MusicListIcon, PersonIcon } from '../../components';
import { COLORS } from '../../utils/colors';
import { useAuth } from '../../providers';
import { NavItem } from './NavItem';
import { useRouter } from '../../router/useRouter';
import { Routes } from '../../router/routes';

export interface INavbarProps {

}

export const Navbar: FC<INavbarProps> = () => {
    const { goTo, currentPage } = useRouter();
    const { logout } = useAuth();

    return (
        <View style={styles.container}>
            <View style={styles.block}>
                <NavItem
                    onClick={() => goTo(Routes.MAIN)}
                    icon={<MusicListIcon fill={currentPage === Routes.MAIN ? COLORS.whiteLight : COLORS.white} />}
                    text={'Music'}
                    isActive={currentPage === Routes.MAIN}
                />
                <NavItem
                    onClick={() => goTo(Routes.PROFILE)}
                    icon={<PersonIcon fill={currentPage === Routes.PROFILE ? COLORS.whiteLight : COLORS.white} />}
                    text={'Profile'}
                    isActive={currentPage === Routes.PROFILE}
                />
            </View>
            <View style={styles.block}>
                <TouchableOpacity onPress={logout}>
                    <LogoutIcon fill={COLORS.lightRed} />
                </TouchableOpacity>
            </View>
        </View>
    )
}
