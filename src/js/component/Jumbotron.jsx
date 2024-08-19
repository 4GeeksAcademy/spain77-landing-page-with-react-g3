import React from "react"

export const Jumbotron = () => {
    return (
        <div className="container">
            <div className="p-5 text-start rounded-3">
                <h1>A Warm Welcome!</h1>
                <p className="mx-auto fs-5 text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className="d-inline-flex gap-2 mb-5">
                    <button className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill" type="button">
                        Call to action!
                    </button>
                </div>
            </div>
        </div>
    )
}