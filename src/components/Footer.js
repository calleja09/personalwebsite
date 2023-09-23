import logo from "../assets/logo192.png"

export default function Footer() {
return(
    <>
        <footer>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 p-3 text-center">
                            <img alt="brand" src={logo} className="brand" width="75"/>
                            <i className="fa-regular fa-copyright"></i> Copyright 2023. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>    
    </>
)
}