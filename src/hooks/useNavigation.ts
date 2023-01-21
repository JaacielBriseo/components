import NavigationContext from '../context/Navigation';
import { useContext } from 'react';

const useNavigation =()=>useContext(NavigationContext);

export default useNavigation
