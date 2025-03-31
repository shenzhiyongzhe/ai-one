// eslint-disable-next-line react/prop-types
const Content = ({ children }) =>
{
    return (
        <div className="flex-1 p-6 relative  bg-cover bg-center h-full" style={{ backgroundImage: "url('/home_background.png')" }}>
            <div className="z-10 ">
                {children}
            </div>
        </div>)
}

export default Content