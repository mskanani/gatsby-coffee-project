import React from 'react'

export default function Footer() {
    return (
        <footer className="footer py-3">
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 text-yellow text-center text-capitalize">
                        <h6 className="mx-auto my-2">all rights reserved &copy; {new Date().getFullYear().toString()}</h6>
                    </div>
                </div>
            </div>
        </footer>
    )
}
