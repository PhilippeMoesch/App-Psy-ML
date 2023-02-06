import {useNavigate} from 'react-router-dom';

export interface NavItemProps {
    icon: React.ReactNode;
    to?: string;
}

export const NavItem = ({icon, to}: NavItemProps) => {
    
    const navigate = useNavigate();

    const redirectTo = () => {
        if(to) {
            navigate(to);
        }
    }
    
    return (
    <div className='sidebar-icon' onClick={redirectTo}>
      {icon}
    </div>
  )}