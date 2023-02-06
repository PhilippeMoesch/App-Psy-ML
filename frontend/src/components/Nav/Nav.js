import '../../assets/main.css';
import { BsGearFill } from 'react-icons/bs';
import { FaArrowAltCircleRight,FaDatabase, FaChartBar, FaHome} from 'react-icons/fa';
import { NavItem } from './NavItem';
import {RoutesType} from '../../types/routes'


function Nav() {
 return (
<div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-white dark:bg-gray-900 shadow-lg">
  <NavItem icon={<FaHome size="28" />} to='/' />
  <Divider />
  <NavItem icon={<FaArrowAltCircleRight size="32"/>} to={RoutesType.Prediction}/>
  <NavItem icon={<FaDatabase size="20"/>} to={RoutesType.Database} />
  <NavItem icon={<FaChartBar size="20"/>} to={RoutesType.Analytics} />
  <Divider />
  <NavItem icon={<BsGearFill size="22"/>} to={RoutesType.Settings} />

</div>
 );
 };



const Divider = () => <hr className="sidebar-hr" />;

export default Nav;