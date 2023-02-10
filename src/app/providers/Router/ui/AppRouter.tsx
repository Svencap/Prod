import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { routerConfig } from "shared/config/routeConfig/routerConfig";

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routerConfig).map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
};
