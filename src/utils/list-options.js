import { FaUsers } from "react-icons/fa";
import { TbMovie } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";

const listOptions = [
    {
        label: 'Animes',
        path: '/animes',
        icon: <TbMovie/>,
        enable: [
            "user",
            "admin"
        ]
    },
    {
        label: 'Usuarios',
        path: '/users',
        icon: <FaUsers />,
        enable: [
            "admin"
        ]
    },
    {
        label: 'configurações',
        path: '/settings',
        icon: <IoMdSettings />,
        enable:[
            "admin"
        ]
    }
]

export default listOptions;
