import { Outlet, Link } from 'react-router-dom';

function NoPage() {
    return (

        <
        >

        <
        h1 align = "center" > Sorry page is not found < /h1> <
        img src = "images/404.gif"
        className = "notfound" / >

        <
        Link to = "/" > < button type = 'button'
        className = 'btn' > Go to Home < /button></Link >


        <
        />
    )
}

export default NoPage