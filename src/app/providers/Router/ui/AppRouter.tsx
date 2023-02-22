import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { routerConfig } from 'shared/config/routeConfig/routerConfig';
import { PageLoader } from 'widgets/PageLoader';

export const AppRouter = () => (
    <Suspense fallback={<PageLoader />}>
        <Routes>
            {Object.values(routerConfig).map(({ path, element }) => (
                <Route
                    key={path}
                    path={path}
                    element={<div className="page-wrapper">{element}</div>}
                />
            ))}
        </Routes>
    </Suspense>
);
