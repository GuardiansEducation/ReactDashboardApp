import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "@constants";
import { Subscriptions } from "@pages";
import { StandingsArea, CompetitionStatistics, FavoriteTeams } from "../../pages/overview";

const DashboardRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={routes.subscriptions} />} />
      <Route path={routes.subscriptions} element={<Subscriptions />} />
      <Route path={routes.overviewStandings} element={<StandingsArea />} />
      <Route path={routes.overviewStats} element={<CompetitionStatistics />} />
      <Route path={routes.overviewFavoriteTeams} element={<FavoriteTeams />} />
    </Routes>
  );
};

export default DashboardRouter;
