// store/navigationReducer.js

// const location = useLocation();
const initialState = {
    isCollapsed: false,
    selectedKey: 'home', // 默认选中的菜单项
    menuItems: [
        { key: 'home', label: 'home', icon: 'dashboard' },
        { key: 'users', label: 'Users', icon: 'user' },
        { key: 'products', label: 'Products', icon: 'shopping' },
        // 更多菜单项...
    ]
};

export default function navigationReducer(state = initialState, action)
{
    switch (action.type)
    {
        case 'TOGGLE_SIDEBAR':
            return {
                ...state,
                isCollapsed: !state.isCollapsed
            };
        case 'SELECT_MENU_ITEM':
            return {
                ...state,
                selectedKey: action.payload
            };
        case 'UPDATE_MENU_ITEMS':
            return {
                ...state,
                menuItems: action.payload
            };
        default:
            return state;
    }
}