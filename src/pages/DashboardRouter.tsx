import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "@constants";
import { Subscriptions } from "@pages";
import { StandingsArea, CompetitionStatistics, FavoriteTeams } from "./overview";
import { Login } from "./authentication";
import { PrivateRoute } from "@components";

const DashboardRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={routes.subscriptions} />} />
      <Route
        path={routes.subscriptions}
        element={
          <PrivateRoute>
            <Subscriptions />
          </PrivateRoute>
        }
      />
      <Route
        path={routes.overviewStandings}
        element={
          <PrivateRoute>
            <StandingsArea />
          </PrivateRoute>
        }
      />
      <Route
        path={routes.overviewStats}
        element={
          <PrivateRoute>
            <CompetitionStatistics />
          </PrivateRoute>
        }
      />
      <Route
        path={routes.overviewFavoriteTeams}
        element={
          <PrivateRoute>
            <FavoriteTeams />
          </PrivateRoute>
        }
      />
      <Route path={routes.login} element={<Login />} />
    </Routes>
  );
};

export default DashboardRouter;
