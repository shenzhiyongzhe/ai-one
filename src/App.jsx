import { Suspense } from "react";

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import SharePage from "./page/SharePage";
import LikesPage from "./page/LikesPage";
import CommentPage from "./page/CommentPage";
import LivePage from "./page/LivePage";
import PrivateRoute from './components/PrivateRoute';
import LoginPage from "./page/LoginPage";


export default function App()
{
    return (

        <Router>
            <Suspense fallback={<BigSpinner />}>
                <Routes>
                    <Route
                        path="/"
                        element={<LoginPage />}
                    />
                    <Route
                        path="/login"
                        element={<LoginPage />}
                    />
                    <Route element={<PrivateRoute />}>
                        <Route
                            path="/home"
                            element={<HomePage />}
                        />
                        <Route
                            path="/share"
                            element={<SharePage />}
                        />
                        <Route
                            path="/likes"
                            element={<LikesPage />}
                        />
                        <Route
                            path="/comment"
                            element={<CommentPage />}
                        />
                        <Route
                            path="/live"
                            element={<LivePage />}
                        />
                    </Route>

                </Routes>
            </Suspense>
        </Router>

    );
}

function BigSpinner()
{
    return <h2>🌀 Loading...</h2>;
}
